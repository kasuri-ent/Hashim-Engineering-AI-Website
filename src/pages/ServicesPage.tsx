import React, { useEffect } from 'react';
import { 
  FileCheck, Compass, Wrench, ShieldAlert, Activity, CheckCircle2, 
  ArrowRight, Phone, ChevronRight, FileText, Settings, Award 
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';

import structureImg from '../assets/images/mounting_structure_hdg_1790160992174.jpg';
import inverterImg from '../assets/images/solar_inverter_setup_1790160978723.jpg';

interface ServicesPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Solar Engineering Services Pakistan | Net Metering & EPC | Hashim Engineering',
      description: 'End-to-end solar EPC services in Pakistan: site survey, structural load design, NEPRA net metering filing, turnkey installation, and thermographic O&M.',
      canonicalPath: '/services',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Engineering Services', path: '/services' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const services = [
    {
      step: '01',
      icon: Compass,
      title: 'Technical Feasibility & Load Profiling',
      tagline: 'Precision measurement before any capital is committed',
      desc: 'We analyze your 12-month utility billing history, peak kilowatt demand curves, and roof/ground topography using satellite irradiance modeling and solar sun-path software.',
      deliverables: [
        'Detailed kWh generation yield report (P50/P90 exceedance probabilities)',
        '3D shadow simulation identifying seasonal tree & parapet obstructions',
        'Optimal azimuth angle and tilt degree calculations',
        'Economic payback and internal rate of return (IRR) projection',
      ],
    },
    {
      step: '02',
      icon: FileCheck,
      title: 'NEPRA Net Metering & DISCO Permitting',
      tagline: '100% turnkey handling of regulatory approvals',
      desc: 'Our electrical engineers handle the complete prosumer application process across LESCO, IESCO, FESCO, MEPCO, GEPCO, PESCO, and K-Electric.',
      deliverables: [
        'Single-line diagram (SLD) prepared and stamped by certified engineers',
        'Distribution transformer (DT) load sanity & reverse capacity validation',
        'DISCO inspection and green bi-directional meter requisitioning',
        'Official Generation License issuance from NEPRA',
      ],
    },
    {
      step: '03',
      icon: Settings,
      title: 'Structural & Electrical Engineering Design',
      tagline: 'Engineered to withstand 140 km/h wind gusts and seismic forces',
      desc: 'Structural calculations and electrical sizing developed in-house to protect your building infrastructure and maximize power output.',
      deliverables: [
        'Hot-dip galvanized mounting structures (85+ microns zinc coating)',
        'Rooftop anchor pull-out testing and waterproofing membranes',
        'DC cable voltage drop limited to strictly below 1.5%',
        'Surge protection devices (SPDs Type II) and copper chemical earth pits',
      ],
    },
    {
      step: '04',
      icon: Wrench,
      title: 'Turnkey Procurement, Installation & Commissioning',
      tagline: 'Execution following international IEC and IEEE standards',
      desc: 'Our technicians execute civil foundations, mechanical racking, string wiring, and inverter commissioning with surgical precision.',
      deliverables: [
        'Strict adherence to torque specifications on module clamps',
        'Pre-commissioning Megger 1000V DC insulation resistance testing',
        'Earthing resistance verification (< 5 Ohms earth loop)',
        'Inverter grid-synchronization and smart mobile app onboarding',
      ],
    },
    {
      step: '05',
      icon: Activity,
      title: 'Operations, Monitoring & Preventive O&M',
      tagline: 'Safeguarding your solar harvest for 25+ years',
      desc: 'Scheduled thermographic inspections, string IV-curve diagnostics, and automated alerts to detect degradation or micro-cracks before output drops.',
      deliverables: [
        'Thermal infrared drone scanning to identify hot-spots',
        'Quarterly electrical health audits and terminal retorquing',
        'Automated cloud monitoring with email/SMS outage alerts',
        'De-ionized water panel cleaning schedules',
      ],
    },
  ];

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100">
      
      {/* Top Banner */}
      <div className="relative border-b border-slate-800/80 bg-[#0e1422] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">Engineering Services</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
              <Award className="w-4 h-4" />
              <span>Full-Lifecycle Solar EPC</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Turnkey Solar Engineering, Permitting &amp; EPC Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We bridge the gap between complex electrical engineering and long-term renewable savings. From the first site visit and NEPRA net metering filing to 25-year performance monitoring.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal('Turnkey EPC Services')}
                className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <span>Book a Technical Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20need%20assistance%20with%20NEPRA%20net%20metering%20and%20solar%20EPC."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Talk to a Certified Engineer</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Services Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {services.map((srv, index) => {
          const Icon = srv.icon;

          return (
            <div
              key={srv.step}
              className="p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c51e28]/20 text-[#c51e28] flex items-center justify-center font-bold text-lg">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#c51e28]">PHASE {srv.step}</div>
                    <div className="text-xs text-slate-400 font-medium">{srv.tagline}</div>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-2">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {srv.desc}
                </p>
              </div>

              <div className="lg:col-span-8 p-6 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#c51e28]" />
                  <span>Key Deliverables &amp; Engineering Artifacts</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {srv.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#111726] border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-relaxed">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
