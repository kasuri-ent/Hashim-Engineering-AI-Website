import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, X, CheckCircle2, ChevronRight } from 'lucide-react';

export const BlogGuidesSection: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const articles = [
    {
      id: 'guide-5kw-10kw',
      title: '5kW & 10kW Solar Systems in Pakistan: Complete Guide',
      category: 'Residential Engineering',
      date: 'Updated March 2026',
      readTime: '6 min read',
      excerpt: 'Detailed analysis of household appliances, monthly unit generation curves, required roof area, and payback timelines for 5kW and 10kW residential systems.',
      content: `
        A 5kW or 10kW solar system represents the sweet spot for modern Pakistani urban residences.
        
        • 5kW System Profile:
        Ideal for 5-Marla to 10-Marla homes running one 1.5-ton DC inverter air conditioner, refrigerator, LED lighting, fans, and water pump. It generates approximately 600 to 650 kWh (units) monthly in Punjab and Sindh. Typically uses 9 to 10 N-Type TOPCon 585W modules and requires roughly 250 sq ft of unshaded roof space.

        • 10kW System Profile:
        Designed for 1-Kanal residences with two to three inverter AC units, multiple refrigerators, washing machines, and heavy daytime appliances. Generates approximately 1,200 to 1,300 kWh monthly. Requires 18 modules (585W) and about 500 sq ft of roof area.

        • Inverter Selection:
        For urban areas with continuous utility grid availability, on-grid inverters (GoodWe, Growatt, Huawei, Solis) provide highest efficiency. If load-shedding is frequent, a hybrid inverter (Deye, Sungrow) coupled with lithium storage provides instant UPS switchover without noisy generators.
      `,
    },
    {
      id: 'guide-agri-tubewell',
      title: 'Solar Tube Well in Pakistan: Complete Agriculture Guide',
      category: 'Agriculture Solar',
      date: 'Updated February 2026',
      readTime: '8 min read',
      excerpt: 'Comprehensive engineering guide to converting diesel or grid tube wells to solar VFD pumping, aquifer depth calculations, and panel array configurations.',
      content: `
        With agricultural electricity tariffs and diesel fuel costs at historic highs in Pakistan, solar-powered tube wells have transformed agricultural profitability across Punjab and Sindh.

        • Sizing Methodology:
        A direct 1:1 conversion between motor horsepower and solar kW will cause motor stalling during morning or cloudy hours. We apply a 1.35x to 1.5x array multiplier. For example, a 15 HP submersible pump motor (~11 kW) is paired with a 16.5 kW to 18 kW DC solar array and an 18.5 kW high-torque VFD.

        • Dynamic Head & Discharge:
        System performance depends entirely on the total dynamic head (depth to water table + draw-down + surface lift + pipe friction). Our engineers perform borehole head loss tests before selecting the pump stage and impeller geometry.

        • Structural Longevity:
        Agricultural installations face high open-field winds and dust. Hashim Engineering utilizes heavy hot-dip galvanized steel mounting structures with minimum 80-micron zinc coating and reinforced concrete pad footings.
      `,
    },
    {
      id: 'guide-nepra-prosumer',
      title: 'Understanding 2026 NEPRA Prosumer Regulations & Net Metering',
      category: 'Regulatory Affairs',
      date: 'Current 2026 Legal Review',
      readTime: '5 min read',
      excerpt: 'Clear breakdown of recent regulatory amendments, bi-directional metering paperwork, grid interconnect codes, and buyback billing mechanics.',
      content: `
        Pakistan's distributed generation landscape is governed by the National Electric Power Regulatory Authority (NEPRA) Prosumer Regulations 2026 and recent administrative amendments.

        • Key Prosumer Principles:
        1. Sanctioned Load Limitation: Your solar generator capacity cannot exceed your sanctioned electrical load as stated on your DISCO bill without an approved load enhancement.
        2. Three-Phase Connection Requirement: Net metering is strictly available for 3-phase domestic, commercial, and industrial connections. Single-phase meters must be upgraded to 3-phase prior to application.
        3. Approved Equipment List: Only inverters and PV modules certified by AEDB/NEPRA standards are accepted by DISCO inspectors.

        • The Turnkey Role of Hashim Engineering:
        Our regulatory desk handles the entire documentation: Single Line Diagram certification, electrical contractor test reports, DISCO site inspection coordination, green meter issuance, and commissioning certificate handover.
      `,
    },
    {
      id: 'guide-topcon-vs-perc',
      title: 'TOPCon vs PERC: Which Solar Panel Delivers Highest Yield in Heat?',
      category: 'Solar Hardware',
      date: 'Updated January 2026',
      readTime: '6 min read',
      excerpt: 'Why N-Type TOPCon technology has superseded older P-Type PERC modules in Pakistan’s high summer ambient temperatures.',
      content: `
        Pakistan experiences summer ambient rooftop temperatures reaching 45°C to 50°C, causing solar panel surface temperatures to exceed 65°C. In such conditions, cell temperature coefficient determines true generation.

        • P-Type PERC Limitations:
        Older PERC panels carry a temperature coefficient around -0.35%/°C to -0.38%/°C and suffer higher Light Induced Degradation (LID) in their first year of operation.

        • N-Type TOPCon Advantages:
        N-Type TOPCon has virtually zero Light-Induced Degradation (no boron-oxygen defects) and a lower temperature coefficient of -0.30%/°C. Under 60°C operating conditions, TOPCon delivers 3% to 5% higher actual electrical output than older PERC panels of identical wattage.

        • Hashim Engineering Policy:
        We strictly deploy Tier-1 N-Type TOPCon and Bifacial glass-glass modules (from LONGi, JinkoSolar, JA Solar, Trina) for superior 25-year levelized cost of energy (LCOE).
      `,
    },
  ];

  const activeArticle = articles.find((a) => a.id === selectedArticleId);

  return (
    <section id="blog" className="py-20 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
              <span>Engineering Insights</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Pakistan Solar Knowledge Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Solar Guides &amp; Technical Articles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Objective technical knowledge written by solar engineers for Pakistani homeowners, commercial business operators, and farmers.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="p-6 rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata with dot separators (Zero-Pill discipline) */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-3">
                  <span className="text-[#c51e28] font-semibold">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-base font-bold font-display text-white mb-2.5 leading-snug group-hover:text-rose-100 transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  {art.date}
                </span>

                <button
                  onClick={() => setSelectedArticleId(art.id)}
                  className="text-xs text-[#c51e28] hover:text-rose-400 font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-[#111726] border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 text-slate-100">
            <button
              onClick={() => setSelectedArticleId(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-[#c51e28] font-semibold">{activeArticle.category}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{activeArticle.date}</span>
            </div>

            <h2 className="text-2xl font-bold font-display text-white mb-4 leading-tight">
              {activeArticle.title}
            </h2>

            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4 border-t border-slate-800 pt-4">
              {activeArticle.content}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400">Written by Hashim Engineering Technical Desk</span>
              <button
                onClick={() => setSelectedArticleId(null)}
                className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
