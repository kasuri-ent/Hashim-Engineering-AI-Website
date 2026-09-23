import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap, Cpu, Gauge, SunMedium, Home } from 'lucide-react';
import residentialSolarHero from '../assets/images/residential_solar_hero_1790164280099.jpg';

interface HeroProps {
  onOpenQuoteModal: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-[#0b0f17] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 sun-ray-radial pointer-events-none opacity-80" />
      <div className="absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Proposition & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed metadata kicker (Strict Zero-Pill) */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-400 mb-4 tracking-wide">
              <span className="text-[#c51e28] font-bold uppercase tracking-widest">Engineering-Led EPC</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Turnkey Solar Systems</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Pakistan Solar Authority</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2026 Prosumer Compliant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white text-balance leading-[1.08]">
              Solar Energy &amp; Engineering Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-rose-200">Pakistan</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong className="text-white font-semibold">Power your future with precision solar engineering.</strong> Hashim Engineering delivers professionally designed solar solutions for homes, businesses, industries, and agricultural tube wells. From technical load profiling and tier-1 equipment supply to installation, testing, and commissioning.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenQuoteModal('Residential Solar')}
                className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-[#c51e28]/20 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#solutions"
                className="py-3 px-5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Explore Solar Solutions
              </a>

              <a
                href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20a%20solar%20quote%20for%20my%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-400 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Clean Quantitative Proof Markers (Claim-to-proof adjacency) */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                  25+ <span className="text-[#c51e28] text-xl font-normal">Years</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Linear Yield Warranty</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                  22.8%
                </div>
                <div className="text-xs text-slate-400 mt-1">N-Type TOPCon Cell Eff.</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-1">NEPRA Prosumer Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Residential Solar Solutions Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
              <img
                src={residentialSolarHero}
                alt="Residential Solar Solutions rooftop installation on modern luxury villa in Pakistan by Hashim Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Subtle contrast gradient scrim for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent" />

              {/* Engineering Telemetry HUD Overlays */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                <div className="px-2.5 py-1 rounded bg-[#0b0f17]/85 backdrop-blur-md border border-slate-700/80 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>RESIDENTIAL SOLAR · 15 kW</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#0b0f17]/85 backdrop-blur-md border border-slate-700/80 text-amber-300 flex items-center gap-1.5">
                  <SunMedium className="w-3.5 h-3.5" />
                  <span>5.4 kWh/m²/day Peak</span>
                </div>
              </div>

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0f17]/90 backdrop-blur-md border border-slate-700/80 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Home className="w-3.5 h-3.5 text-[#c51e28]" />
                    <span>Residential Solar Solutions</span>
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">Zero Net Bill</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Turnkey residential rooftop installations with elevated hot-dip galvanized pergolas, Tier-1 TOPCon bifacial modules, hybrid inverter &amp; LiFePO4 lithium battery backup.
                </p>
                <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Cpu className="w-3 h-3 text-[#c51e28]" /> Tier-1 N-Type TOPCon
                  </span>
                  <span>10ms UPS Switchover</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
