import React, { useEffect, useState } from 'react';
import { 
  Tractor, Waves, Droplets, Sprout, Building, Phone, 
  ArrowRight, ShieldCheck, SunMedium, ChevronRight, CheckCircle2, 
  MapPin, Gauge, Download
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { BrandBadge } from '../components/BrandLogos';

import tubewellImg from '../assets/images/agriculture_solar_tubewell_1790159399906.jpg';
import citrusImg from '../assets/images/citrus_orchard_solar_drip_1790164269171.jpg';
import structureImg from '../assets/images/mounting_structure_hdg_1790160992174.jpg';

interface AgricultureSolarPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const AgricultureSolarPage: React.FC<AgricultureSolarPageProps> = ({ 
  onOpenQuoteModal, 
  onNavigate 
}) => {
  const [selectedHp, setSelectedHp] = useState<number>(15);

  useEffect(() => {
    updatePageSeo({
      title: 'Agriculture Solar & Tube Wells Pakistan | Solar Drip Irrigation',
      description: 'Hashim Engineering provides engineered solar tube wells, 15 HP citrus orchard solar drip irrigation, and high-discharge solar water pumping systems across Punjab and Sindh.',
      canonicalPath: '/agriculture-solar',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Agriculture Solar', path: '/agriculture-solar' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const hpMatrix: Record<number, { panels: string; discharge: string; structure: string; depth: string; vfd: string }> = {
    7.5: { panels: '16–18 Modules (585W TOPCon)', discharge: '400–550 GPM', structure: 'Single-Pole Ground Structure', depth: 'Up to 120 ft', vfd: '7.5 kW Solar VFD' },
    10: { panels: '22–24 Modules (585W TOPCon)', discharge: '600–750 GPM', structure: 'Heavy P2 Dual-String Mount', depth: 'Up to 180 ft', vfd: '11 kW Solar VFD' },
    15: { panels: '32–36 Modules (585W TOPCon)', discharge: '750–950 GPM', structure: 'Heavy P4 Concrete Foundation', depth: 'Up to 240 ft', vfd: '15 kW Solar VFD' },
    20: { panels: '44–48 Modules (585W TOPCon)', discharge: '1,000–1,250 GPM', structure: 'Multi-String High-Clearance Mount', depth: 'Up to 320 ft', vfd: '18.5–22 kW Solar VFD' },
    30: { panels: '66–72 Modules (585W TOPCon)', discharge: '1,400–1,900 GPM', structure: 'Industrial Farm PV Field Substation', depth: 'Deep Aquifer (>350 ft)', vfd: '30 kW Solar VFD' },
  };

  const currentConfig = hpMatrix[selectedHp];

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100">
      
      {/* Top Hero Banner */}
      <div className="relative border-b border-slate-800/80 bg-[#0e1422] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">Agriculture Solar Solutions</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
                <Tractor className="w-4 h-4" />
                <span>Specialized Agro-Photovoltaic Division</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Solar Tube Wells &amp; Precision Irrigation Pumping in Pakistan
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                Zero diesel expenses, zero DISCO peak bills, and uninterrupted water supply. From 7.5 HP borehole tube wells to 15 HP citrus orchard drip systems and 30 HP river pumps.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => onOpenQuoteModal('Agriculture Solar Tube Well')}
                  className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Book Borehole Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20need%20a%20site%20assessment%20for%20a%20solar%20tube%20well."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Agro Desk (+92 334 4319157)</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group">
                <img
                  src={citrusImg}
                  alt="15 HP Citrus Orchard Solar Drip Irrigation by Hashim Engineering in Pakistan"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/30 to-transparent" />
                
                <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#0b0f17]/90 backdrop-blur-md border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <SunMedium className="w-3.5 h-3.5" />
                  <span>15 HP Citrus Orchard Drip System</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0b0f17]/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
                  <div className="text-white font-semibold flex items-center justify-between">
                    <span>Precision Drip Irrigation · Multan</span>
                    <span className="text-emerald-400 font-mono">100% Daylight Pumping</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Solar VFD pump controller running constant-pressure drip lines across 40 acres of kinnow and citrus orchard.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Sizing Calculator for Tube Wells */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c51e28]">
              Interactive Engineering Calculator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
              Select Your Tube Well Horsepower (HP)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Every solar tube well is sized using hydraulic flow calculations, total dynamic head (TDH), static water depth, and pump motor operating parameters.
            </p>
          </div>

          {/* HP Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {[7.5, 10, 15, 20, 30].map((hp) => (
              <button
                key={hp}
                onClick={() => setSelectedHp(hp)}
                className={`py-3 px-4 rounded-xl text-center font-mono font-bold transition-all ${
                  selectedHp === hp
                    ? 'bg-[#c51e28] text-white shadow-lg scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-850'
                }`}
              >
                <div className="text-base">{hp} HP</div>
                <div className="text-[10px] opacity-80 font-sans font-normal mt-0.5">
                  {hp === 15 ? 'Citrus & Drip' : hp >= 20 ? 'High Discharge' : 'Smallholding'}
                </div>
              </button>
            ))}
          </div>

          {/* Sizing Details Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-medium">Required Solar PV Array</div>
              <div className="text-sm sm:text-base font-bold text-white font-mono mt-1">
                {currentConfig.panels}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">Tier-1 N-Type Bifacial Modules</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-medium">Estimated Water Flow Discharge</div>
              <div className="text-sm sm:text-base font-bold text-emerald-400 font-mono mt-1">
                {currentConfig.discharge}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">Constant continuous head flow</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-medium">Maximum Aquifer Bore Depth</div>
              <div className="text-sm sm:text-base font-bold text-white font-mono mt-1">
                {currentConfig.depth}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">Dynamic head capability</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="text-[11px] text-slate-400 font-medium">Solar VFD Pump Drive</div>
              <div className="text-sm sm:text-base font-bold text-amber-400 font-mono mt-1">
                {currentConfig.vfd}
              </div>
              <div className="text-[10px] text-slate-500 mt-1">With dynamic MPPT tracking</div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Structures are hot-dip galvanized with 25-year anti-rust guarantee, tested against 140 km/h wind shear.
            </div>
            <button
              onClick={() => onOpenQuoteModal(`Agriculture Solar (${selectedHp} HP Tube Well)`)}
              className="py-2.5 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Get Detailed Bill of Quantities (BOQ) for {selectedHp} HP</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Specialized Agriculture Applications */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Specialized Agricultural Solar Engineering
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Tailored engineering packages designed around Pakistani soil conditions, borehole water chemistry, and farming equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#c51e28]/20 text-[#c51e28] flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Solar Tube Wells</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Submersible and surface pumps connected to MPPT variable frequency drives. Runs direct sun-to-pump without costly battery wear.
            </p>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Soft-start prevents motor burn</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dry run low-water sensors</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Compatible with Grundfos &amp; KSB</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">15 HP Citrus Orchard Drip</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Constant-pressure irrigation systems for kinnow, orange, mango orchards and vegetable tunnel farms in Punjab and Sindh.
            </p>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Automated pressure regulation</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 8–10 hours daylight running</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 40% higher crop yields</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Dairy &amp; Poultry Sheds</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Continuous solar power for heavy tunnel ventilation fans, evaporative cooling pads, milking equipment, and chiller cold rooms.
            </p>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High inrush motor handling</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Hybrid battery integration</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Generator auto-start backup</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Farmland Electrification</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Independent off-grid and hybrid electrification for rural farmhouses, security gates, CCTV cameras, and staff living quarters.
            </p>
            <ul className="text-xs space-y-1.5 text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 100% utility independent</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> LiFePO4 battery storage</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 4G remote app telemetry</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Agriculture Engineering Steps */}
      <div className="border-t border-slate-800 bg-[#0e1422] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c51e28]">
              Engineering Discipline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
              How We Engineer Your Solar Pumping System
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              We never guess tube well capacity. Every system is engineered following on-site borehole yield testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Borehole & Aquifer Logging', desc: 'Measurement of static water table depth, dynamic drawdown during pumping, and casing diameter.' },
              { num: '02', title: 'Hydraulic Flow Sizing', desc: 'Calculation of friction losses across delivery pipes, required velocity, and total dynamic head.' },
              { num: '03', title: 'Motor & Drive Matching', desc: 'Configuring VFD parameters to match motor inductance, RPM rating, and maximum start torque.' },
              { num: '04', title: 'Heavy Galvanized Piling', desc: 'Elevated hot-dip galvanized mounting structures anchored with concrete piles to clear crops and tractors.' },
              { num: '05', title: 'DC Surge & Grounding', desc: 'Class-leading lightning arrestors, surge protection devices (SPDs), and deep copper chemical earthing.' },
              { num: '06', title: 'Discharge Handover & Training', desc: 'Flow meter discharge verification, automated timer setup, and hands-on maintenance training for farm staff.' },
            ].map((step) => (
              <div key={step.num} className="p-5 rounded-xl bg-[#111726] border border-slate-800">
                <div className="text-xl font-bold font-mono text-[#c51e28] mb-2">{step.num}</div>
                <h4 className="text-sm font-semibold text-white mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Pump & Drive Brands Deployed */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-300 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c51e28]" />
              <span>Certified Agricultural Equipment Deployed:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <BrandBadge brandId="grundfos" />
              <BrandBadge brandId="huawei" />
              <BrandBadge brandId="sungrow" />
              <BrandBadge brandId="deye" />
              <BrandBadge brandId="pakcables" />
              <BrandBadge brandId="fastcables" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
