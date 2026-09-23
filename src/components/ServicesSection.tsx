import React from 'react';
import { 
  Compass, Eye, FileCode2, PackageCheck, Wrench, 
  CheckCheck, ScrollText, LifeBuoy, ArrowRight, ShieldCheck 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      icon: Compass,
      title: 'Solar Consultation',
      desc: 'Comprehensive evaluation of your electricity bills, hourly load patterns, and energy objectives to calculate your optimal system design without over-sizing or under-sizing.',
    },
    {
      icon: Eye,
      title: 'Precision Site Survey',
      desc: 'Detailed physical audit assessing rooftop structural load capacity, compass orientation, 3D sun-path shading obstacles, and agricultural aquifer bore conditions.',
    },
    {
      icon: FileCode2,
      title: 'Engineering System Design',
      desc: 'Rigorous electrical Single Line Diagrams (SLD), string voltage calculations, DC conduit routing, and wind-shear structural modeling in accordance with IEEE & IEC codes.',
    },
    {
      icon: PackageCheck,
      title: 'Equipment Supply',
      desc: 'Direct supply of authentic Tier-1 N-Type TOPCon panels, hybrid/grid-tied inverters, LiFePO4 battery banks, and certified circuit protection switchgear.',
    },
    {
      icon: Wrench,
      title: 'Professional EPC Installation',
      desc: 'Standardized mechanical assembly with hot-dip galvanized mounting structures, torque-calibrated connections, and weatherproof IP65 junction enclosures.',
    },
    {
      icon: CheckCheck,
      title: 'Testing & Commissioning',
      desc: 'Rigorous open-circuit voltage (Voc) verification, earth resistance pit testing (< 5 Ohms), insulation resistance verification, and full-load test before formal handover.',
    },
    {
      icon: ScrollText,
      title: '2026 Prosumer / Net Metering',
      desc: 'Assistance with applicable grid-interconnection and DISCO prosumer documentation in strict compliance with NEPRA 2026 Prosumer Regulations across LESCO, FESCO, MEPCO, IESCO & others.',
    },
    {
      icon: LifeBuoy,
      title: 'Maintenance & After-Sales',
      desc: 'Scheduled thermographic inspection for solar cell hotspots, inverter firmware updates, yield tracking, automated panel cleaning guidance, and prompt technical support.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0e1422] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
              <span>Full Lifecycle EPC</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Engineering, Procurement &amp; Construction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Solar Installation &amp; Engineering Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Hashim Engineering provides end-to-end solar EPC execution. We eliminate middlemen risks through technical leadership, certified electrical design, and guaranteed workmanship.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenQuoteModal('Turnkey Solar EPC Service')}
              className="py-3 px-5 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-md transition-colors flex items-center gap-2"
            >
              <span>Book Engineering Survey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c51e28]/10 text-[#c51e28] flex items-center justify-center group-hover:bg-[#c51e28] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}.
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => onOpenQuoteModal(srv.title)}
                    className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Inquire this service</span>
                    <ArrowRight className="w-3 h-3 text-[#c51e28]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
