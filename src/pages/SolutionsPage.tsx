import React, { useEffect, useState } from 'react';
import { 
  Home, Building2, Factory, Tractor, Zap, BatteryCharging, 
  SunSnow, ArrowRight, CheckCircle2, ShieldCheck, Download, 
  ChevronRight, Phone, Clock, FileText, ArrowUpRight
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { BrandMarqueeRow } from '../components/BrandLogos';

import resImg from '../assets/images/residential_solar_hero_1790164280099.jpg';
import comImg from '../assets/images/commercial_solar_solutions_1790164238480.jpg';
import indImg from '../assets/images/commercial_industrial_solar_1790159416013.jpg';
import onGridImg from '../assets/images/ongrid_solar_systems_1790164256316.jpg';
import hybridImg from '../assets/images/solar_inverter_setup_1790160978723.jpg';
import offGridImg from '../assets/images/solar_storage_protection_1790159434922.jpg';
import agriImg from '../assets/images/citrus_orchard_solar_drip_1790164269171.jpg';

interface SolutionsPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sector' | 'system'>('all');

  useEffect(() => {
    updatePageSeo({
      title: 'Solar Solutions Pakistan | Residential, Commercial & Industrial EPC',
      description: 'Explore turnkey solar solutions in Pakistan by Hashim Engineering: residential rooftop, commercial plazas, industrial plants, on-grid prosumer net metering & hybrid systems.',
      canonicalPath: '/solutions',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Solar Solutions', path: '/solutions' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const solutions = [
    {
      id: 'residential',
      category: 'sector',
      icon: Home,
      image: resImg,
      title: 'Residential Solar Solutions',
      capacity: '3 kW to 20 kW',
      tagline: 'Eliminate peak daytime electricity bills with rooftop solar',
      description: 'Engineered specifically around residential load curves, heavy summer air conditioning loads, and DISCO bi-directional net metering.',
      applications: ['Houses & Townhomes', 'Luxury Villas (DHA, Bahria, Gulberg)', 'Farmhouses', 'Residential Apartments'],
      specs: [
        { label: 'Recommended Inverter', value: 'Hybrid 5kW - 15kW' },
        { label: 'Module Tech', value: 'N-Type TOPCon 585W+' },
        { label: 'Battery Option', value: 'LiFePO4 5.12kWh - 15kWh' },
        { label: 'Typical Payback', value: '2.5 to 3.2 Years' },
      ],
      highlights: ['Bi-directional net metering', 'LiFePO4 battery backup', 'Zero daytime grid bills', '25-yr linear panel warranty'],
    },
    {
      id: 'commercial',
      category: 'sector',
      icon: Building2,
      image: comImg,
      title: 'Commercial Solar Solutions',
      capacity: '20 kW to 100 kW',
      tagline: 'Hedge operating electricity costs against escalating tariffs',
      description: 'Engineered multi-string solar systems for offices, commercial plazas, private schools, and health facilities operating during daylight hours.',
      applications: ['Corporate Offices', 'Retail Plazas & Shopping Centers', 'Private Schools & Colleges', 'Hospitals & Diagnostic Centers'],
      specs: [
        { label: 'Recommended Inverter', value: '3-Phase On-Grid Multi-MPPT' },
        { label: 'Module Tech', value: 'Bifacial Glass-Glass 600W+' },
        { label: 'Grid Interconnection', value: 'LT 400V 3-Phase' },
        { label: 'Typical Payback', value: '2.2 to 2.8 Years' },
      ],
      highlights: ['Peak tariff shaving', 'Three-phase active synchronization', 'Cloud energy analytics', 'Zero daytime fuel generator burn'],
    },
    {
      id: 'industrial',
      category: 'sector',
      icon: Factory,
      image: indImg,
      title: 'Industrial Solar Solutions',
      capacity: '100 kW to 2 MW+',
      tagline: 'High-capacity megawatt EPC for energy-intensive manufacturing',
      description: 'Turnkey photovoltaic infrastructure built for continuous industrial plants, textile mills, metal fabrication units, and cold storages.',
      applications: ['Textile & Garment Mills', 'Steel & Metal Fabrication', 'Cold Storage Facilities', 'Warehouses & Logistics Hubs'],
      specs: [
        { label: 'Recommended Inverter', value: '100kW - 330kW String Inverters' },
        { label: 'Module Tech', value: 'Tier-1 Bifacial Dual-Glass' },
        { label: 'Interconnection', value: 'LT / 11kV HT Substation' },
        { label: 'Typical Payback', value: '1.8 to 2.4 Years' },
      ],
      highlights: ['HT / LT grid interconnection', 'Harmonic mitigation', 'Elevated shed structures', 'Zero export reverse power protection'],
    },
    {
      id: 'on-grid',
      category: 'system',
      icon: Zap,
      image: onGridImg,
      title: 'On-Grid Solar Systems',
      capacity: '5 kW to 500 kW+',
      tagline: 'Maximum ROI with grid synchronization and DISCO net metering',
      description: 'Directly synchronized with the utility grid to power your facility while exporting surplus electricity to the DISCO under current NEPRA prosumer framework.',
      applications: ['Urban Residences', 'Commercial Plazas', 'Manufacturing Feeders', 'Educational Campuses'],
      specs: [
        { label: 'Efficiency', value: '>98.6% Euro-Efficiency' },
        { label: 'Storage Required', value: 'None (Grid acts as battery)' },
        { label: 'Capital Cost', value: 'Lowest cost per kW' },
        { label: 'Compliance', value: 'NEPRA 2026 Prosumer Rules' },
      ],
      highlights: ['Highest electrical conversion efficiency', 'Lowest initial investment', 'Zero battery replacement expenses', 'Prosumer green meter integration'],
    },
    {
      id: 'hybrid',
      category: 'system',
      icon: BatteryCharging,
      image: hybridImg,
      title: 'Hybrid Solar Systems',
      capacity: '5 kW to 50 kW',
      tagline: '24/7 load shedding protection with intelligent lithium storage',
      description: 'Combines daytime solar generation, intelligent lithium-ion battery storage, and utility grid power for uninterrupted power quality.',
      applications: ['Residences with vital medical/AC loads', 'Clinics & Surgery Centers', 'IT Server Rooms', 'Corporate Executive Suites'],
      specs: [
        { label: 'Switchover Speed', value: '< 10ms UPS-Grade Transfer' },
        { label: 'Battery Chemistry', value: 'LiFePO4 (6000+ Cycles)' },
        { label: 'Surge Capability', value: '200% for 10 seconds' },
        { label: 'Generator Control', value: 'Dry-contact auto-start' },
      ],
      highlights: ['Solar → Load priority matching', 'Intelligent battery reserve dispatch', 'Nighttime blackout resilience', 'Parallel stacking up to 16 units'],
    },
    {
      id: 'off-grid',
      category: 'system',
      icon: SunSnow,
      image: offGridImg,
      title: 'Off-Grid Standalone Systems',
      capacity: '3 kW to 50 kW',
      tagline: 'Reliable standalone power where no utility grid exists',
      description: 'Autonomous solar generation coupled with heavy-duty LiFePO4 battery banks and integrated backup generator support for remote terrain.',
      applications: ['Remote Farmland & Farmhouses', 'Rural Agro Pumping', 'Telecom Towers', 'Border & Wildlife Stations'],
      specs: [
        { label: 'Autonomy', value: '1 to 3 Days of Battery Storage' },
        { label: 'Grid Dependency', value: '0% (100% Autonomous)' },
        { label: 'Inverter Type', value: 'Pure Sine Wave Low-Frequency' },
        { label: 'Monitoring', value: '4G LTE Remote Telemetry' },
      ],
      highlights: ['100% utility independent', 'Automated generator start relay', 'High-discharge LiFePO4 banks', 'Surge-proof inverter architecture'],
    },
  ];

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeCategory);

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100">
      
      {/* Breadcrumbs & Header Hero */}
      <div className="relative border-b border-slate-800/80 bg-[#0e1422] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">Solar Solutions</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Turnkey Photovoltaic Engineering · Pakistan</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Engineered Solar Solutions for Homes, Plazas &amp; Industrial Complexes
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Hashim Engineering delivers precision solar systems configured to eliminate high DISCO tariff slabs, provide seamless blackout protection, and withstand harsh local weather conditions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('General Solar Solutions')}
                  className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Request Engineering Sizing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/calculator')}
                  className="py-3 px-5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium rounded-lg transition-colors"
                >
                  Calculate System Size &amp; ROI
                </button>
              </div>
            </div>

            {/* Key Engineering Indicators */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                System Engineering Standards
              </div>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Cell Technology:</span>
                  <span className="text-white font-mono font-semibold">Tier-1 N-Type TOPCon</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Mounting Hardware:</span>
                  <span className="text-white font-mono font-semibold">Hot-Dip Galvanized (85µm)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">DC Protection:</span>
                  <span className="text-white font-mono font-semibold">1000V/1500V Type II SPD</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Net Metering:</span>
                  <span className="text-emerald-400 font-mono font-semibold">NEPRA 2026 Ready</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-slate-800 bg-[#0e1422]/60 sticky top-20 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`py-1.5 px-4 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[#c51e28] text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setActiveCategory('sector')}
              className={`py-1.5 px-4 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === 'sector'
                  ? 'bg-[#c51e28] text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              By Sector (Residential / Commercial / Industrial)
            </button>
            <button
              onClick={() => setActiveCategory('system')}
              className={`py-1.5 px-4 text-xs font-semibold rounded-lg transition-colors ${
                activeCategory === 'system'
                  ? 'bg-[#c51e28] text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              By Topology (On-Grid / Hybrid / Off-Grid)
            </button>
          </div>

          <div className="hidden sm:block text-xs text-slate-400 font-mono">
            Showing {filteredSolutions.length} Solutions
          </div>
        </div>
      </div>

      {/* Solutions Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {filteredSolutions.map((solution, index) => {
          const IconComponent = solution.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={solution.id}
              id={solution.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <img
                    src={solution.image}
                    alt={`${solution.title} in Pakistan by Hashim Engineering`}
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-[#0b0f17]/85 backdrop-blur-md border border-slate-700 text-xs font-mono text-white flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5 text-[#c51e28]" />
                    <span>{solution.capacity}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0b0f17]/90 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
                    <span className="font-semibold text-white">{solution.tagline}</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-1.5">
                    <IconComponent className="w-4 h-4" />
                    <span>{solution.capacity}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {solution.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {solution.specs.map((sp) => (
                    <div key={sp.label} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs">
                      <div className="text-[10px] text-slate-400 font-medium">{sp.label}</div>
                      <div className="text-white font-semibold font-mono mt-0.5">{sp.value}</div>
                    </div>
                  ))}
                </div>

                {/* Application areas */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2">Ideal Applications:</div>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app) => (
                      <span key={app} className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 text-xs border border-slate-700/60">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenQuoteModal(solution.title)}
                    className="py-2.5 px-5 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20am%20interested%20in%20${encodeURIComponent(solution.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Systems Comparison Table */}
      <div className="border-t border-slate-800 py-16 bg-[#0e1422]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Solar Topology Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Choosing the right solar system architecture depends on your load shedding profile, utility tariffs, and backup power priorities.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#111726]">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/90 text-slate-300 font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">System Type</th>
                  <th className="py-3.5 px-4">Grid Dependency</th>
                  <th className="py-3.5 px-4">Battery Storage</th>
                  <th className="py-3.5 px-4">Load Shedding Protection</th>
                  <th className="py-3.5 px-4">NEPRA Net Metering</th>
                  <th className="py-3.5 px-4">Payback Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">On-Grid Solar</td>
                  <td className="py-3.5 px-4 text-emerald-400">Utility Synchronized</td>
                  <td className="py-3.5 px-4 text-slate-400">Not Required</td>
                  <td className="py-3.5 px-4 text-amber-400">Shuts down during outage (Anti-Islanding)</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">100% Eligible (Export Credits)</td>
                  <td className="py-3.5 px-4 font-mono text-white">2.2 – 2.8 Years</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Hybrid Solar</td>
                  <td className="py-3.5 px-4 text-emerald-400">Utility + Battery Reserve</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">LiFePO4 Lithium ESS</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">&lt; 10ms Instant Backup</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">100% Eligible</td>
                  <td className="py-3.5 px-4 font-mono text-white">3.0 – 3.8 Years</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-white">Off-Grid Solar</td>
                  <td className="py-3.5 px-4 text-slate-400">Zero Grid Connection</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">Full Heavy Storage Bank</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold">Continuous 24/7 Autonomy</td>
                  <td className="py-3.5 px-4 text-slate-500">Not Applicable</td>
                  <td className="py-3.5 px-4 font-mono text-white">3.5 – 4.5 Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Brand Partners Marquee */}
      <div className="py-12 border-t border-slate-800/80 bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-slate-400 mb-4 uppercase tracking-widest font-semibold">
            Certified Equipment Deployed Across All Solutions
          </p>
          <BrandMarqueeRow />
        </div>
      </div>

    </div>
  );
};
