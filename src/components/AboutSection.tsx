import React from 'react';
import { 
  CheckCircle, Target, Compass, Award, 
  Settings, Users, Wrench, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { HashimLogo } from './HashimLogo';
import resVillaImage from '../assets/images/residential_solar_villa_1790161006493.jpg';

interface AboutSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      icon: Settings,
      title: 'Engineering Expertise',
      desc: 'Technical assessment, electrical Single Line Diagrams, and system modeling based on actual project load curves rather than generic formulas.',
    },
    {
      icon: Compass,
      title: 'Customized Solutions',
      desc: 'Individual structural and electrical design tailored to each specific roof, factory shed, or agricultural borehole condition.',
    },
    {
      icon: Award,
      title: 'Quality Equipment',
      desc: 'Strict procurement protocol sourcing only Tier-1 N-Type TOPCon panels, certified inverters, and Grade-A LiFePO4 storage.',
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      desc: 'Hot-dip galvanized structural erection, torque-verified cabling, lightning protection, and comprehensive pre-handover commissioning.',
    },
    {
      icon: ShieldCheck,
      title: 'Complete Turnkey Solutions',
      desc: 'A single point of engineering responsibility from initial survey and DISCO prosumer documentation to commissioning and handover.',
    },
    {
      icon: Users,
      title: 'Dedicated After-Sales Support',
      desc: 'Prompt technical support, scheduled thermographic inspections, inverter diagnostics, and long-term performance monitoring.',
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
              <span>Corporate Profile</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Engineering-Led Solar Company</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Engineering a Smarter Energy Future
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              <strong className="text-white">Hashim Engineering</strong> is a Pakistan-based solar energy and engineering solutions company providing customized solar systems for residential, commercial, industrial, and agricultural applications.
            </p>

            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Our approach combines rigorous technical assessment, precision system design, quality equipment, and professional installation to develop solar solutions suited to each project’s unique requirements.
            </p>

            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              From the initial site assessment and DISCO interconnection compliance to system commissioning and long-term after-sales support, our objective is to provide customers with a complete, dependable, and durable renewable energy solution.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#111726] border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-1">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To provide professionally engineered solar energy solutions that empower Pakistani homes, enterprises, and farms to make optimal use of clean renewable power while enhancing energy security and long-term economic value.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111726] border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To become the most trusted solar engineering and EPC provider in Pakistan through uncompromising technical expertise, structural integrity, continuous innovation, and transparent client service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Identity Anchor & Engineering Credentials */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#111726] to-[#0e1422] border border-slate-800 shadow-xl overflow-hidden">
            {/* Real Project Image Header */}
            <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
              <img
                src={resVillaImage}
                alt="Engineered rooftop solar installation in Pakistan by Hashim Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-[11px] font-medium text-slate-200 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10">
                15 kW High-Efficiency Hybrid Solar &amp; LiFePO4 ESS · DHA Lahore
              </div>
            </div>

            <div className="p-6 sm:p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c51e28]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
                <HashimLogo size="lg" variant="full" theme="dark" />
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#c51e28] shrink-0 mt-0.5" />
                  <span>
                    <strong>Not simply a panel trader:</strong> We are a dedicated solar engineering consultancy &amp; EPC company that takes structural and electrical responsibility for what we install.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#c51e28] shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict 2026 Prosumer Alignment:</strong> Fully compliant with latest NEPRA rules, bi-directional meter filing, and power export protocols.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#c51e28] shrink-0 mt-0.5" />
                  <span>
                    <strong>Nationwide Agricultural Support:</strong> Specialized tube well solar pumping teams serving deep aquifer regions in Punjab and Sindh.
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuoteModal('Consultation with Engineering Team')}
                  className="w-full py-3 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Consult Our Senior Engineers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 28: Why Hashim Engineering - 6 Pillar Cards */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-display text-white">
              The Six Pillars of Hashim Engineering
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Why commercial facilities, homeowners, and progressive agriculturalists trust our installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={pil.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#c51e28]/10 text-[#c51e28] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {pil.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
