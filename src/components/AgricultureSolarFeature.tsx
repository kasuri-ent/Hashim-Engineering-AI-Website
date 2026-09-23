import React, { useState } from 'react';
import { 
  Droplets, Waves, Sprout, Building, CheckCircle2, 
  ArrowRight, ShieldCheck, SunMedium, Gauge, Phone 
} from 'lucide-react';
import { BrandBadge } from './BrandLogos';
import agriImage from '../assets/images/agriculture_solar_tubewell_1790159399906.jpg';

interface AgricultureSolarFeatureProps {
  onOpenQuoteModal: (type?: string) => void;
}

export const AgricultureSolarFeature: React.FC<AgricultureSolarFeatureProps> = ({ onOpenQuoteModal }) => {
  const [selectedHp, setSelectedHp] = useState<number>(15);

  const hpEstimates: Record<number, { panels: string; discharge: string; structure: string; depth: string }> = {
    7.5: { panels: '16–18 Panels (585W TOPCon)', discharge: '250–350 Gallons/Min', structure: 'Elevated HDG Galvanized', depth: 'Up to 120 ft head' },
    10: { panels: '22–24 Panels (585W TOPCon)', discharge: '400–550 Gallons/Min', structure: 'Heavy P1 Galvanized Array', depth: 'Up to 180 ft head' },
    15: { panels: '32–36 Panels (585W TOPCon)', discharge: '600–850 Gallons/Min', structure: 'Custom Heavy Duty HDG Frame', depth: 'Up to 240 ft head' },
    20: { panels: '42–46 Panels (585W TOPCon)', discharge: '900–1200 Gallons/Min', structure: 'Engineered Multi-String Mount', depth: 'Up to 300 ft head' },
    30: { panels: '64–70 Panels (585W TOPCon)', discharge: '1400–1800 Gallons/Min', structure: 'Heavy Industrial Ground Mount', depth: 'Deep Bore Aquifers' },
  };

  const currentHp = hpEstimates[selectedHp];

  const agriServices = [
    {
      icon: Waves,
      title: 'Solar Tube Wells in Pakistan',
      desc: 'Complete solar-powered tube-well systems designed around pump capacity (7.5 HP to 40 HP), bore depth, static water table, and running hours.',
      features: ['High-torque MPPT solar pump inverters', 'Soft start prevents motor burnout', 'Dry run & low water sensors'],
    },
    {
      icon: Droplets,
      title: 'Solar Water Pumping Systems',
      desc: 'Submersible borehole pumps and surface suction pumps engineered for high discharge flow rates to canals, ponds, and reservoirs.',
      features: ['Compatible with Grundfos, Lorentz, KSB', 'Pure sine wave variable frequency drive', 'Zero monthly electricity or diesel fuel bills'],
    },
    {
      icon: Sprout,
      title: 'Solar Irrigation & Precision Farming',
      desc: 'Constant-pressure solar power for high-efficiency drip irrigation, pivot sprinklers, and orchard watering throughout sunny daylight hours.',
      features: ['Automated pressure stabilization', 'Eliminates peak-hour DISCO load-shedding', 'Ideal for citrus, cotton, wheat & sugarcane'],
    },
    {
      icon: Building,
      title: 'Farm Solar Systems & Electrification',
      desc: 'Engineered hybrid and off-grid power solutions for modern dairy farms, poultry sheds with tunnel ventilation fans, and farmhouses.',
      features: ['Heavy inductive fan & motor support', 'Battery backup for night cooling', 'Automated generator changeover integration'],
    },
  ];

  const engineeringSteps = [
    { num: '01', title: 'Site Assessment', desc: 'We evaluate the agricultural site, ground topography, water source, and available solar installation footprint.' },
    { num: '02', title: 'Water Requirement Analysis', desc: 'We calculate required cubic meters per hour, daily irrigation demand, and peak water flow cycles.' },
    { num: '03', title: 'Pump & Bore Assessment', desc: 'We assess the existing pump motor parameters, dynamic head, pipe friction losses, or specify a new high-efficiency submersible pump.' },
    { num: '04', title: 'Solar System Design', desc: 'Precision engineering of solar PV array string voltages, MPPT VFD pump inverter, and lightning/surge protection.' },
    { num: '05', title: 'Galvanized Installation', desc: 'Rigid hot-dip galvanized steel mounting structures anchored into concrete foundations to withstand high agricultural wind shear.' },
    { num: '06', title: 'Testing & Commissioning', desc: 'Pre-handover discharge measurement, insulation testing, motor current logging, and farmer training.' },
  ];

  return (
    <section id="agriculture-solar" className="py-20 bg-[#0d1320] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flagship Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
              <span>Flagship Engineering Division</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Agriculture Solar Pakistan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Agriculture Solar Solutions in Pakistan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Dependable water and power are the lifeblood of agricultural productivity. Hashim Engineering designs high-efficiency solar tube well and pumping systems tailored to your aquifer depth, crop water cycles, and regional solar irradiance.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal('Agriculture Solar Tube Well')}
              className="py-3 px-5 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Request Agriculture Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Visual Showcase + Quick HP Sizing Interactive Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
              <img
                src={agriImage}
                alt="Solar tube well and agricultural irrigation pumping in Pakistan by Hashim Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0f17]/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between text-xs text-white font-semibold mb-1">
                  <span>Solar Tube Well Pumping Plant</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <SunMedium className="w-3.5 h-3.5" /> 8–10 Hours Daily Pumping
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Direct solar-driven VFD technology extracts water at peak efficiency from sunrise to sunset, completely bypassing load-shedding and high diesel generator running costs.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Tube Well Sizing Preview */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#111726] border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-display text-white">
                Tube Well Sizing Matrix
              </h3>
              <span className="text-xs text-[#c51e28] font-semibold">Select Motor HP</span>
            </div>

            {/* HP Selection Pills */}
            <div className="grid grid-cols-5 gap-2 mb-6">
              {[7.5, 10, 15, 20, 30].map((hp) => (
                <button
                  key={hp}
                  onClick={() => setSelectedHp(hp)}
                  className={`py-2 text-center rounded-lg text-xs font-bold font-mono transition-all ${
                    selectedHp === hp
                      ? 'bg-[#c51e28] text-white shadow'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {hp} HP
                </button>
              ))}
            </div>

            {/* Sizing Details */}
            <div className="space-y-3.5 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Solar Array Sizing:</span>
                <span className="text-white font-semibold font-mono">{currentHp.panels}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Typical Water Discharge:</span>
                <span className="text-emerald-400 font-semibold font-mono">{currentHp.discharge}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Head / Depth Capability:</span>
                <span className="text-white font-semibold font-mono">{currentHp.depth}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex justify-between items-center">
                <span className="text-slate-400">Mounting Structure:</span>
                <span className="text-slate-300 font-medium">{currentHp.structure}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <div className="text-[11px] text-slate-400">
                Customized for your exact borehole depth and pump brand.
              </div>
              <button
                onClick={() => onOpenQuoteModal(`Agriculture Solar (${selectedHp} HP Tube Well)`)}
                className="py-2 px-3.5 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
              >
                Inquire {selectedHp} HP
              </button>
            </div>
          </div>
        </div>

        {/* 4 Agriculture Solar Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {agriServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#c51e28]/10 text-[#c51e28] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-xs text-[#c51e28] hover:text-rose-400 font-semibold flex items-center gap-1"
                  >
                    <span>Inquire for Farmland</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 7 from blueprint: Agriculture Solar Engineering Process */}
        <div className="p-8 rounded-2xl bg-[#111726] border border-slate-800">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#c51e28] uppercase tracking-wider">
              Technical Credibility &amp; Rigor
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              How We Design Your Agriculture Solar System
            </h3>
            <p className="text-xs text-slate-400 mt-1.5">
              Agricultural solar requires strict hydraulic and mechanical engineering. We never guess pump sizing from a catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringSteps.map((step) => (
              <div key={step.num} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-lg font-bold font-mono text-[#c51e28] mb-1">
                  {step.num}.
                </div>
                <h4 className="text-sm font-semibold text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Compatible Equipment Brands */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c51e28]" />
              <span>Certified Agricultural Pumps, VFDs & Switchgear Deployed:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2.5">
              <BrandBadge brandId="grundfos" />
              <BrandBadge brandId="huawei" />
              <BrandBadge brandId="sungrow" />
              <BrandBadge brandId="deye" />
              <BrandBadge brandId="fastcables" />
              <BrandBadge brandId="pakcables" />
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need on-site bore assessment in Punjab, Sindh or KPK?
            </div>
            <a
              href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20need%20a%20site%20assessment%20for%20a%20solar%20tube%20well."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book Tube Well Site Survey</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
