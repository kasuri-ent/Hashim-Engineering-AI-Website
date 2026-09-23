import React from 'react';
import { Quote, Star, CheckCircle2, MapPin, Zap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Chaudhry Riaz Ahmad',
      role: 'Farm Owner & Agriculturalist',
      location: 'Sheikhupura District, Punjab',
      system: '20 HP Solar Tube Well System',
      quote:
        'Running our 20 HP tube well on diesel was costing over Rs. 350,000 every harvest month. Hashim Engineering calculated our borehole dynamics and installed a 23kW array with a heavy galvanized elevated frame. We now pump 1,000+ gallons per minute from 8 AM to 5 PM with zero fuel cost.',
      outcome: '100% Diesel Elimination · 9 Hours Daily Irrigation',
    },
    {
      name: 'Dr. Khurram Shahzad',
      role: 'Consultant Surgeon & Homeowner',
      location: 'DHA Phase 5, Lahore',
      system: '15 kW Hybrid System with LiFePO4 Storage',
      quote:
        'Our summer electricity bills were routinely crossing Rs. 140,000 per month. Hashim Engineering not only handled the bi-directional LESCO net meter paperwork smoothly, but the 15kW hybrid system with Dyness lithium batteries powers all four inverter ACs seamlessly during loadshedding.',
      outcome: 'Electricity Bill Reduced by 92% · Zero UPS Switchover Glitches',
    },
    {
      name: 'Mian Tariq Mehmood',
      role: 'Director Operations',
      location: 'Faisalabad Industrial Area',
      system: '250 kW Industrial Rooftop Solar Plant',
      quote:
        'We evaluated four solar vendors. Hashim Engineering stood out because their proposal was backed by electrical single-line diagrams, harmonic studies, and structural wind calculations. Their Huawei inverter installation has operated flawlessly across high-temperature summer peaks.',
      outcome: 'Rs. 2.1M Monthly Grid Electricity Savings',
    },
  ];

  return (
    <section className="py-20 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
            <span>Verified Track Record</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Client Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Trusted by Farmers, Homeowners &amp; Industrialists
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Authentic operational feedback from customers across Pakistan who rely on Hashim Engineering for continuous, high-yield solar energy.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-[11px] font-mono text-[#c51e28] font-semibold">
                    Verified Installation
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Outcome Callout */}
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 mb-4 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.outcome}</span>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <h4 className="text-sm font-bold text-white">
                    {t.name}
                  </h4>
                  <div className="text-[11px] text-slate-400">
                    {t.role}
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1">
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3 h-3 text-[#c51e28]" />
                      <span>{t.location}</span>
                    </span>
                    <span className="text-slate-400 font-medium">{t.system}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
