import React from 'react';
import { Cpu, ShieldCheck, Wrench, Layers, Award } from 'lucide-react';
import { BrandGridShowcase } from './BrandLogos';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Engineering-Based Design',
      description: 'Solar systems designed strictly around actual energy consumption patterns and load profiles, not rough dealer estimates.',
    },
    {
      icon: ShieldCheck,
      title: 'Tier-1 Certified Hardware',
      description: 'Carefully selected Tier-1 solar panels, inverters, batteries, and DC/AC electrical protection from established global makers.',
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'Proper structural engineering, torque-calibrated mounting, certified cabling, and complete pre-handover commissioning.',
    },
    {
      icon: Layers,
      title: 'Complete Solutions',
      description: 'From initial consultation and site survey to equipment supply, 2026 prosumer net-metering assistance, and lifetime after-sales support.',
    },
  ];

  return (
    <section className="bg-[#0e1422] border-b border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800/80 gap-3">
          <div>
            <span className="text-xs font-bold text-[#c51e28] uppercase tracking-wider">
              Why Hashim Engineering
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
              Built on Technical Precision &amp; Standards
            </h2>
          </div>
          <div className="text-xs text-slate-400 max-w-md">
            An engineering-led solar solutions provider committed to delivering long-term power security and optimal generation efficiency across Pakistan.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#c51e28]/10 text-[#c51e28] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-500 font-mono mb-1">
                  0{idx + 1}. Standard
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Brand Trust Bar */}
        <div className="pt-6 border-t border-slate-800/60">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            <Award className="w-4 h-4 text-[#c51e28]" />
            <span>Authorized Global Solar Brand Partnerships</span>
          </div>
          <BrandGridShowcase />
        </div>
      </div>
    </section>
  );
};
