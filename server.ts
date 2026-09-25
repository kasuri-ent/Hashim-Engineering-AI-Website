import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SYSTEM_INSTRUCTION = `You are the senior Solar Energy Engineering AI Advisor for Hashim Engineering, Pakistan's premier solar EPC engineering firm based in Lahore.
Your role is to assist residential, commercial, industrial, and agricultural clients across Pakistan (Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, Sialkot, Karachi, etc.).

Key Engineering & Financial Benchmarks:
• Blended grid tariffs in Pakistan: Rs. 65 – 75 / kWh (including taxes, fuel charges, and surcharges).
• Solar ROI & Payback: On-grid systems pay for themselves within 2.4 to 2.8 years (~38% to 45% annualized ROI). Hybrid systems with LiFePO4 batteries payback in 3.2 to 3.8 years.
• Generation rule of thumb: In Pakistan's solar climate, 1 kW solar capacity generates ~120 to 130 kWh (units) per month (average 4.8 to 5.2 peak sun hours daily).
  - 5 kW: ~600–650 units/month, 8–9 Tier-1 585W TOPCon panels, approx Rs. 600k–680k turnkey on-grid.
  - 10 kW: ~1,200–1,300 units/month, 17–18 panels, approx Rs. 1.15M–1.28M turnkey on-grid.
  - 15 kW: ~1,850–2,000 units/month, 25–26 panels, approx Rs. 1.65M–1.85M turnkey on-grid.
  - 20 kW: ~2,500 units/month, 34 panels, approx Rs. 2.2M–2.5M turnkey on-grid.
• Net Metering: Official NEPRA green meter policy across all DISCOs (LESCO, IESCO, FESCO, MEPCO, GEPCO, K-Electric).
• Agriculture Solar: Solar tube wells using specialized VFD pumps (10 HP to 30 HP), saving 100% of grid/diesel operational costs.
• Equipment Tier-1: 585W N-Type TOPCon panels (Longi, Jinko, Canadian Solar, JA Solar), Inverters (Huawei, Solis, Sungrow, Growatt, Inverex, Knox), Batteries (Soluna, Narada, Phoenix Lithium LiFePO4), Hot-dip galvanized P2/P3 elevated structures.
• Contact: WhatsApp / Phone: +92 334 4319157. Head office in Lahore, Pakistan.

Be concise, practical, courteous, and authoritative. Use clean bullet points for calculations. If the user writes or speaks in Roman Urdu or Urdu, reply naturally in the same language.`;

// Candidate models for automatic failover when high demand occurs on a specific model
const CANDIDATE_MODELS = ['gemini-3.8-flash', 'gemini-3.1-flash-lite'];
const modelCooldown: Record<string, number> = {};

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));

  // Initialize Gemini Client (Server-side)
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || '';
  const ai = apiKey
    ? new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      })
    : null;

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(apiKey), timestamp: new Date().toISOString() });
  });

  // AI Chat & Question-Answering Endpoint with Model Failover & Heuristic Fallback
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      // If Gemini SDK is initialized, try model cascade with failover
      if (ai) {
        // Format conversation history for Gemini
        const contents = [];
        
        if (Array.isArray(history) && history.length > 0) {
          for (const item of history.slice(-6)) {
            if (item.role === 'user' || item.role === 'assistant') {
              contents.push({
                role: item.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: item.text }],
              });
            }
          }
        }

        // Append current user message
        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        // Loop through candidate models in priority order to seamlessly survive quota limits and 503 high demand spikes
        for (const model of CANDIDATE_MODELS) {
          if (modelCooldown[model] && Date.now() < modelCooldown[model]) {
            continue;
          }
          try {
            const response = await ai.models.generateContent({
              model,
              contents,
              config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                temperature: 0.7,
                topP: 0.95,
              },
            });

            const replyText = response.text?.trim();
            if (replyText) {
              return res.json({ reply: replyText, source: 'gemini', modelUsed: model });
            }
          } catch (modelError: any) {
            // Apply a 30s cooldown for rate limits (429) or unavailable demand spikes (503)
            const isRateLimitOrDemand =
              modelError?.status === 'RESOURCE_EXHAUSTED' ||
              modelError?.code === 429 ||
              modelError?.status === 'UNAVAILABLE' ||
              modelError?.code === 503 ||
              String(modelError?.message).includes('quota') ||
              String(modelError?.message).includes('high demand');

            if (isRateLimitOrDemand) {
              modelCooldown[model] = Date.now() + 30000;
            }
            // Gracefully move to the next candidate model or knowledge fallback
          }
        }
      }

      // Comprehensive Engineering Knowledge Engine fallback (instantaneous, 100% reliable)
      const lower = message.toLowerCase();
      let reply = '';

      // Pattern 1: Financials, Payback, ROI, Tariffs
      if (lower.includes('payback') || lower.includes('roi') || lower.includes('return') || lower.includes('breakeven')) {
        reply = 
          'With Pakistan’s current blended electricity tariffs (> Rs. 68/kWh with peak & fuel charges), standard On-Grid solar systems achieve complete capital payback within 2.4 to 2.8 years (~38% to 45% annualized ROI). Hybrid systems with Lithium LiFePO4 batteries payback in ~3.5 years while providing seamless 24/7 load shedding blackout security.';
      } 
      // Pattern 2: Net Metering, NEPRA, Green Meter, DISCOs
      else if (lower.includes('net metering') || lower.includes('nepra') || lower.includes('green meter') || lower.includes('disco') || lower.includes('lesco') || lower.includes('iesco') || lower.includes('fesco') || lower.includes('mepco')) {
        reply = 
          'NEPRA net metering enables bi-directional energy billing across all DISCOs (LESCO, IESCO, FESCO, MEPCO, K-Electric, etc.). Daytime surplus solar generation is exported to the grid at official peak rates, offsetting your evening and nighttime consumption. Hashim Engineering handles complete end-to-end green meter prosumer documentation, testing, and DISCO liaison.';
      } 
      // Pattern 3: Pricing & Capacities
      else if (lower.includes('cost') || lower.includes('price') || lower.includes('10 kw') || lower.includes('10kw') || lower.includes('5 kw') || lower.includes('5kw') || lower.includes('15 kw') || lower.includes('20 kw') || lower.includes('estimate') || lower.includes('quotation')) {
        reply = 
          'Turnkey EPC benchmark pricing in Pakistan (including Tier-1 TOPCon bifacial modules, certified inverters, hot-dip galvanized mounting & net metering):\n\n' +
          '• 5 kW On-Grid: Rs. 600,000 – 680,000 (~600–650 units/month, 8–9 panels)\n' +
          '• 10 kW On-Grid: Rs. 1,150,000 – 1,280,000 (~1,200–1,300 units/month, 17–18 panels)\n' +
          '• 15 kW On-Grid: Rs. 1,650,000 – 1,850,000 (~1,850–2,000 units/month, 25–26 panels)\n' +
          '• 20 kW On-Grid: Rs. 2,200,000 – 2,500,000 (~2,500 units/month, 34 panels)\n\n' +
          'For commercial and industrial installations (>50 kW), customized BOQ pricing is provided.';
      } 
      // Pattern 4: Agricultural Tube Wells & Solar Pumps
      else if (lower.includes('tube well') || lower.includes('agri') || lower.includes('tubewell') || lower.includes('pump') || lower.includes('vfd') || lower.includes('motor') || lower.includes('hp')) {
        reply = 
          'For agricultural tube wells (10 HP to 30 HP), we deploy heavy-duty IP54 solar VFD controllers with Tier-1 bifacial panels. Sizing is typically 1.35× to 1.5× motor horsepower (e.g. a 15 HP pump requires an 18 kW array to ensure strong torque even during morning and cloudy conditions), eliminating diesel generator costs and electricity bills completely.';
      }
      // Pattern 5: Batteries & Hybrid Storage
      else if (lower.includes('battery') || lower.includes('hybrid') || lower.includes('backup') || lower.includes('lithium') || lower.includes('lifepo4') || lower.includes('load shedding') || lower.includes('ups')) {
        reply = 
          'For uninterrupted 24/7 power during load shedding, we deploy premium Lithium Iron Phosphate (LiFePO4) energy storage (such as Soluna, Narada, or Phoenix LiFePO4). Unlike conventional tubular batteries which degrade in 1.5–2 years, LiFePO4 systems deliver 6,000+ deep discharge cycles (~10–12 years lifespan) with 95% depth of discharge.';
      }
      // Pattern 6: Bill sizing heuristics (e.g., 40,000, 50k, 100k)
      else if (/\d+/.test(lower) && (lower.includes('bill') || lower.includes('rs') || lower.includes('rupees') || lower.includes('month'))) {
        reply = 
          'Based on typical Pakistani domestic tariff rates (~Rs. 68/kWh):\n\n' +
          '• Bill ~Rs. 30,000/mo (approx 450 units) → Recommended: 5 kW System\n' +
          '• Bill ~Rs. 50,000/mo (approx 750 units) → Recommended: 7 kW – 10 kW System\n' +
          '• Bill ~Rs. 75,000/mo (approx 1,100 units) → Recommended: 10 kW – 12 kW System\n' +
          '• Bill ~Rs. 100,000+/mo (approx 1,500+ units) → Recommended: 15 kW System\n\n' +
          'With NEPRA Net Metering, this reduces your monthly electricity bill by 85% to 95%.';
      }
      // Pattern 7: Solar Equipment Brands & Quality
      else if (lower.includes('brand') || lower.includes('panel') || lower.includes('inverter') || lower.includes('longi') || lower.includes('jinko') || lower.includes('huawei') || lower.includes('sungrow')) {
        reply = 
          'Hashim Engineering installs only Tier-1 certified equipment with manufacturer-backed warranties:\n' +
          '• Solar Modules: Longi Hi-MO, Jinko Tiger Neo, Canadian Solar (N-Type TOPCon 585W bifacial with 25-year performance warranty).\n' +
          '• Inverters: Huawei FusionSolar, Sungrow, Solis, Knox, Inverex (On-grid & Hybrid 3-phase with 5–10 year warranty).\n' +
          '• Mounting: 100% Hot-dip galvanized P2/P3 elevated structures resistant to rust and severe winds.';
      }
      // General Inquiry & Greeting
      else {
        reply = 
          'Assalam-o-Alaikum! Hashim Engineering is a certified PEC-licensed solar EPC engineering contractor serving Lahore, Islamabad, and across Pakistan. We deliver turnkey On-Grid Net Metered, Hybrid, and Agricultural solar installations with full NEPRA approvals. For an itemized BOQ quotation or free site feasibility, please connect with our senior engineers via WhatsApp at +92 334 4319157.';
      }

      return res.json({ reply, source: 'engineering-engine' });
    } catch (_err) {
      return res.json({
        reply: 'Assalam-o-Alaikum! Hashim Engineering provides certified PEC-licensed solar EPC installations across Pakistan. For an exact site survey & itemized BOQ quote, please contact our engineers directly on WhatsApp at +92 334 4319157.',
        source: 'engineering-engine'
      });
    }
  });

  // Audio Transcription Endpoint for Voice AI
  app.post('/api/transcribe', async (req, res) => {
    try {
      const { audioData, mimeType = 'audio/webm' } = req.body;

      if (!audioData) {
        return res.status(400).json({ error: 'audioData is required' });
      }

      if (ai) {
        try {
          const response = await ai.models.generateContent({
            model: 'gemini-3.5-transcribe',
            contents: {
              parts: [
                {
                  inlineData: {
                    mimeType,
                    data: audioData,
                  },
                },
                {
                  text: 'Transcribe this voice audio query accurately in English or Urdu/Roman Urdu. Return only the transcribed text.',
                },
              ],
            },
          });

          const transcription = response.text?.trim() || '';
          return res.json({ text: transcription });
        } catch (_transcribeError) {
          // Fall through gracefully
        }
      }

      res.status(501).json({ error: 'Audio transcription service currently unavailable' });
    } catch (_err) {
      res.status(500).json({ error: 'Failed to transcribe audio' });
    }
  });

  if (!isProduction) {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT} in ${isProduction ? 'production' : 'development'} mode`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
