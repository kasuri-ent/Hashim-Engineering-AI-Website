import React, { useState } from 'react';
import { 
  Home, Building2, Factory, Tractor, Zap, BatteryCharging, 
  SunSnow, Droplet, ArrowRight, CheckCircle2 
} from 'lucide-react';

import resImg from '../assets/images/residential_solar_villa_1790161006493.jpg';
import comImg from '../assets/images/commercial_solar_solutions_1790164238480.jpg';
import indImg from '../assets/images/commercial_industrial_solar_1790159416013.jpg';
import agriImg from '../assets/images/agriculture_solar_tubewell_1790159399906.jpg';
import onGridImg from '../assets/images/ongrid_solar_systems_1790164256316.jpg';
import hybridImg from '../assets/images/solar_inverter_setup_1790160978723.jpg';
import offGridImg from '../assets/images/solar_storage_protection_1790159434922.jpg';

interface SolutionsSectionProps {
  onSelectSolution: (solutionName: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectSolution }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const solutions = [
    {
      id: 'residential',
      category: 'sector',
      icon: Home,
      image: resImg,
      title: 'Residential Solar Solutions',
      capacity: '3 kW to 20 kW',
      tagline: 'Eliminate peak daytime electricity bills',
      description: "Designed specifically around your home's daily load curve, heavy summer air conditioning, and net-metering objectives.",
      applications: ['Houses & Townhomes', 'Luxury Villas', 'Farmhouses', 'Residential Apartments'],
      highlights: ['Bi-directional net metering', 'LiFePO4 battery options', 'Zero daytime grid bills', '25-yr panel warranty'],
      cta: 'Explore Residential Solar',
    },
    {
      id: 'commercial',
      category: 'sector',
      icon: Building2,
      image: comImg,
      title: 'Commercial Solar Solutions',
      capacity: '20 kW to 100 kW',
      tagline: 'Cut operating electricity overheads',
      description: 'Professionally engineered solar systems that hedge commercial enterprises against rising tariff slabs and fuel surcharges.',
      applications: ['Corporate Offices', 'Retail Plazas & Shops', 'Private Schools & Colleges', 'Hospitals & Clinics'],
      highlights: ['Peak tariff shaving', 'Three-phase synchronization', 'Fast capital payback', 'Cloud energy analytics'],
      cta: 'Explore Commercial Solar',
    },
    {
      id: 'industrial',
      category: 'sector',
      icon: Factory,
      image: indImg,
      title: 'Industrial Solar Solutions',
      capacity: '100 kW to 2 MW+',
      tagline: 'High-capacity EPC for heavy operations',
      description: 'Turnkey photovoltaic infrastructure built for continuous industrial plants, textile mills, cold storages, and manufacturing complexes.',
      applications: ['Textile & Garment Mills', 'Steel & Metal Fabrication', 'Cold Storage Facilities', 'Warehouses & Logistics Hubs'],
      highlights: ['HT / LT grid interconnection', 'Harmonic mitigation', 'Elevated shed structures', 'Zero export controllers'],
      cta: 'Explore Industrial Solar',
    },
    {
      id: 'agriculture',
      category: 'sector',
      icon: Tractor,
      image: agriImg,
      title: 'Agriculture Solar & Tube Wells',
      capacity: '10 HP to 50+ HP',
      tagline: 'Dependable solar pumping & farm energy',
      description: 'Engineered tube-well pumping systems and microgrids designed for high discharge, deep aquifers, and continuous crop irrigation.',
      applications: ['Agricultural Tube Wells', 'Submersible Borehole Pumps', 'Drip & Sprinkler Systems', 'Dairy & Poultry Farms'],
      highlights: ['MPPT Solar VFD pump drives', 'Direct sun-to-water delivery', 'Zero diesel/fuel expense', 'Custom heavy steel structures'],
      cta: 'Explore Agriculture Solar',
    },
    {
      id: 'on-grid',
      category: 'system',
      icon: Zap,
      image: onGridImg,
      title: 'On-Grid Solar Systems',
      capacity: '5 kW to 500 kW+',
      tagline: 'Grid-synchronized with prosumer net metering',
      description: 'Connects directly with the utility grid to power your premises while feeding surplus electricity to the DISCO under current NEPRA regulations.',
      applications: ['Urban Homes', 'Commercial Buildings', 'Industrial Feeders', 'Institutions'],
      highlights: ['Highest electrical efficiency', 'Lowest initial investment', 'No battery replacement cost', '2026 Prosumer ready'],
      cta: 'Explore On-Grid Systems',
    },
    {
      id: 'hybrid',
      category: 'system',
      icon: BatteryCharging,
      image: hybridImg,
      title: 'Hybrid Solar Systems',
      capacity: '5 kW to 50 kW',
      tagline: 'Complete load shedding protection with storage',
      description: 'Combines solar generation, intelligent lithium-ion battery storage, and utility grid electricity for total power independence 24/7.',
      applications: ['Homes with critical loads', 'Medical Clinics & Labs', 'Executive Offices', 'Security Stations'],
      highlights: ['Solar → Load priority', 'Solar → Battery storage', 'Battery → Night backup', 'Seamless 10ms UPS switchover'],
      cta: 'Explore Hybrid Systems',
    },
    {
      id: 'off-grid',
      category: 'system',
      icon: SunSnow,
      image: offGridImg,
      title: 'Off-Grid Solar Systems',
      capacity: '3 kW to 50 kW',
      tagline: 'Stand-alone power where no grid exists',
      description: 'Independent self-contained solar generation and battery bank designed for remote areas, border sites, and farms without utility access.',
      applications: ['Remote Farmland', 'Rural Farmhouses', 'Telecom Towers', 'Remote Wildlife Reserves'],
      highlights: ['100% utility independent', 'Integrated generator start relay', 'Robust LiFePO4 battery banks', 'Surge-proof inverter tech'],
      cta: 'Explore Off-Grid Systems',
    },
    {
      id: 'pumping',
      category: 'system',
      icon: Droplet,
      image: agriImg,
      title: 'Solar Water Pumping',
      capacity: '3 HP to 40 HP Pumps',
      tagline: 'Dedicated solar drives for water extraction',
      description: 'High-torque Variable Frequency Drives (VFD) and solar arrays designed to operate submersible and surface pumps without grid reliance.',
      applications: ['Deep Bore Wells', 'Canal Lift Pumping', 'Livestock Watering', 'Drip Orchards'],
      highlights: ['Automatic dry-run protection', 'Water level sensors', 'Soft-start pump protection', 'Hybrid solar-AC grid backup'],
      cta: 'Explore Solar Pumping',
    },
  ];

  const filtered = activeTab === 'all' 
    ? solutions 
    : activeTab === 'sectors' 
    ? solutions.filter(s => s.category === 'sector')
    : solutions.filter(s => s.category === 'system');

  return (
    <section id="solutions" className="py-20 bg-[#0b0f17] relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c51e28] mb-2">
            <span>Engineered Portfolio</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Residential · Commercial · Industrial · Agriculture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Solar Solutions for Every Application
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you need solar power for your home, commercial plaza, industrial plant, or agricultural tube well, Hashim Engineering provides customized solutions designed around your electrical load, physical space, and project requirements.
          </p>

          {/* Filter Controls */}
          <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#c51e28] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Solutions (8)
            </button>
            <button
              onClick={() => setActiveTab('sectors')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'sectors'
                  ? 'bg-[#c51e28] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              By Sector (Home / Biz / Industry / Agri)
            </button>
            <button
              onClick={() => setActiveTab('systems')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'systems'
                  ? 'bg-[#c51e28] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              By Technology (On-Grid / Hybrid / Off-Grid)
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 hover:shadow-2xl transition-all group"
              >
                {/* Real Site Image Preview */}
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img 
                    src={sol.image} 
                    alt={sol.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/40 to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-[#c51e28] border border-white/10 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-mono font-medium text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      {sol.capacity}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-rose-100 transition-colors">
                      {sol.title}
                    </h3>

                    <div className="text-xs font-medium text-[#c51e28] mt-0.5 mb-2">
                      {sol.tagline}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {sol.description}
                    </p>

                    {/* Applications */}
                    <div className="mb-4 pt-3 border-t border-slate-800/80">
                      <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2">
                        Key Applications:
                      </div>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300">
                        {sol.applications.map((app) => (
                          <span key={app} className="flex items-center gap-1 text-[11px]">
                            <span className="w-1 h-1 rounded-full bg-rose-500" />
                            <span>{app}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Engineering Highlights */}
                    <div className="mb-6 pt-3 border-t border-slate-800/80 space-y-1.5">
                      {sol.highlights.map((hl) => (
                        <div key={hl} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => onSelectSolution(sol.title)}
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-[#c51e28] border border-slate-800 hover:border-[#c51e28] text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{sol.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory Advisory Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 mt-1 shrink-0" />
            <div>
              <strong className="text-white">2026 Pakistan Prosumer &amp; Regulatory Note:</strong> Net metering and grid-interconnection procedures are handled in strict compliance with current NEPRA Prosumer Regulations 2026. We advise customers on the most up-to-date feed-in parameters and DISCO paperwork.
            </div>
          </div>
          <button
            onClick={() => onSelectSolution('Net Metering Assistance')}
            className="text-[#c51e28] hover:underline font-semibold whitespace-nowrap shrink-0"
          >
            Review Regulatory Process →
          </button>
        </div>

      </div>
    </section>
  );
};
