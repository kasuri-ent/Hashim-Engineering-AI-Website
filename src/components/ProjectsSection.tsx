import React, { useState } from 'react';
import { 
  Building2, Home, Factory, Tractor, MapPin, 
  Zap, Calendar, ArrowRight, CheckCircle2, Award 
} from 'lucide-react';

import industrialSolarImage from '../assets/images/commercial_industrial_solar_1790159416013.jpg';
import resVillaImage from '../assets/images/residential_solar_villa_1790161006493.jpg';
import agriTubewellImage from '../assets/images/agriculture_solar_tubewell_1790159399906.jpg';
import citrusOrchardImage from '../assets/images/citrus_orchard_solar_drip_1790164269171.jpg';
import commercialSolarImage from '../assets/images/commercial_solar_solutions_1790164238480.jpg';
import ongridSolarImage from '../assets/images/ongrid_solar_systems_1790164256316.jpg';
import panelsCloseImage from '../assets/images/solar_panels_topcon_1790160964091.jpg';
import mountingStructureImage from '../assets/images/mounting_structure_hdg_1790160992174.jpg';
import inverterSetupImage from '../assets/images/solar_inverter_setup_1790160978723.jpg';

interface ProjectsSectionProps {
  onPlanSimilarProject: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onPlanSimilarProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 'agri-sheikhupura',
      category: 'agriculture',
      name: '20 HP High-Head Solar Tube Well System',
      location: 'Sheikhupura, Punjab',
      capacity: '22.8 kW Solar PV Array',
      type: 'Solar VFD Agriculture Pumping',
      image: agriTubewellImage,
      application: 'Wheat & Rice Paddy Irrigation',
      panelBrand: 'LONGi N-Type 585W TOPCon',
      inverterBrand: 'Solar VFD Pump Drive 18.5 kW',
      completed: '2025',
      results: '1,100 Gallons/Min continuous discharge; eliminated 350L monthly diesel consumption.',
      highlights: ['Custom elevated structure', 'Bore depth: 220 ft', 'Dry run sensor auto-shutoff'],
    },
    {
      id: 'ind-faisalabad',
      category: 'industrial',
      name: '500 kW Grid-Tied Industrial Rooftop Plant',
      location: 'Faisalabad Industrial Estate',
      capacity: '500 kW Three-Phase EPC',
      type: 'On-Grid Industrial Net Metering',
      image: industrialSolarImage,
      application: 'Textile Weaving & Dyeing Facility',
      panelBrand: 'JinkoSolar Tiger Neo 620W Bifacial',
      inverterBrand: 'Huawei SUN2000-100KTL (5 Units)',
      completed: '2025',
      results: 'Generates ~62,500 kWh monthly; reduces factory peak tariff surcharge by 68%.',
      highlights: ['Elevated shed clamping', 'Zero export fail-safe switch', 'Remote SCADA telemetry'],
    },
    {
      id: 'res-lahore-dha',
      category: 'residential',
      name: '15 kW Hybrid Smart Home Solar Installation',
      location: 'DHA Phase 6, Lahore',
      capacity: '15 kW Three-Phase Hybrid',
      type: 'Hybrid with LiFePO4 Energy Storage',
      image: resVillaImage,
      application: '1-Kanal Luxury Residential Villa',
      panelBrand: 'JA Solar DeepBlue 4.0 Pro 585W',
      inverterBrand: 'Deye 15kW Three-Phase Hybrid + Dyness LiFePO4',
      completed: '2025',
      results: 'Zero daytime electricity bill + 14.3 kWh lithium storage powering full night AC load.',
      highlights: ['10ms UPS switchover', 'Dual LESCO bi-directional meter', 'Custom roof pergola design'],
    },
    {
      id: 'com-islamabad',
      category: 'commercial',
      name: '75 kW Commercial Plaza Solar Plant',
      location: 'Blue Area, Islamabad',
      capacity: '75 kW On-Grid Prosumer',
      type: 'On-Grid Grid Synchronization',
      image: commercialSolarImage,
      application: 'Commercial Corporate Complex',
      panelBrand: 'Canadian Solar HiKu7 665W',
      inverterBrand: 'Sungrow SG75CX Multi-MPPT',
      completed: '2025',
      results: 'Supplies 9,400 kWh/month across 6 office floors; 2.4-year payback projection.',
      highlights: ['IESCO prosumer approval', 'String level arc-fault detection', 'Firefighter safety switch'],
    },
    {
      id: 'agri-multan',
      category: 'agriculture',
      name: '15 HP Citrus Orchard Solar Drip Irrigation',
      location: 'Multan Region, Punjab',
      capacity: '18 kW DC PV Array',
      type: 'Solar Agriculture Water Pumping',
      image: citrusOrchardImage,
      application: '40-Acre Kinnow & Mango Orchard',
      panelBrand: 'Trina Solar Vertex 600W',
      inverterBrand: 'Grundfos / High-Torque Solar Controller',
      completed: '2024',
      results: 'Continuous constant-pressure drip irrigation during peak sunshine hours.',
      highlights: ['Automated pressure valve', 'Anti-theft tamper hardware', 'Hot-dip galvanized piles'],
    },
    {
      id: 'res-bahria-lahore',
      category: 'residential',
      name: '10 kW On-Grid Residential Rooftop System',
      location: 'Bahria Town, Lahore',
      capacity: '10 kW Single-String On-Grid',
      type: 'On-Grid Net Metering',
      image: ongridSolarImage,
      application: '10-Marla Modern Residence',
      panelBrand: 'LONGi Hi-MO 6 Explorer 580W',
      inverterBrand: 'GoodWe Smart DT Series 10kW',
      completed: '2024',
      results: 'Eliminated domestic tier-4 tariff bills; net positive export credits in spring/autumn.',
      highlights: ['Hot-dip galvanized P2 structure', 'Type II SPD protection', 'Smartphone app monitoring'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0d1320] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
              <Award className="w-4 h-4" />
              <span>Commissioned Deployments</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Photographed Site Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Real-world engineering installations across Punjab and Islamabad. Every system is custom-designed, structurally certified, and fully documented before commissioning.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-end">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'industrial', label: 'Industrial' },
              { id: 'agriculture', label: 'Agriculture' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-[#c51e28] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Hero Banner */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-[#111726] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 h-72 sm:h-80 lg:h-96 relative overflow-hidden bg-slate-900">
              <img
                src={industrialSolarImage}
                alt="500 kW Industrial rooftop solar plant installed by Hashim Engineering"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0b0f17]/30 to-[#0b0f17]" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10">
              <span className="text-xs uppercase tracking-wider text-[#c51e28] font-bold">
                Industrial EPC Benchmark
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-1">
                Megawatt-Scale Rooftop Solar Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                We design and erect high-tension industrial solar power plants that sync with factory transformers and automated diesel synchronization generators.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">HT / LT Synchronization</span>
                  <span className="text-white font-medium">11kV Substation Ready</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Harmonic Distortion (THD)</span>
                  <span className="text-emerald-400 font-medium">&lt; 3% IEEE Standard</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => onPlanSimilarProject('Industrial Rooftop Solar EPC')}
                  className="py-2.5 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 shadow-md"
                >
                  <span>Plan Industrial EPC Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filtered Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl bg-[#111726] border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              {/* Card Photo Preview */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="flex items-center gap-1 text-[11px] font-medium text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    <MapPin className="w-3 h-3 text-[#c51e28]" />
                    <span>{p.location}</span>
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[10px] text-slate-300 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
                    {p.completed}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-white mb-1 group-hover:text-rose-100 transition-colors">
                    {p.name}
                  </h3>

                  <div className="text-xs text-[#c51e28] font-semibold mb-3">
                    {p.capacity} · {p.type}
                  </div>

                  <div className="space-y-2 py-2.5 border-y border-slate-800/80 text-xs">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-slate-400 shrink-0">PV Panels:</span>
                      <span className="text-slate-200 font-medium text-right text-[11px]">{p.panelBrand}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-slate-400 shrink-0">Inverter:</span>
                      <span className="text-slate-200 font-medium text-right text-[11px]">{p.inverterBrand}</span>
                    </div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-slate-400 shrink-0">Site Load:</span>
                      <span className="text-slate-200 font-medium text-right text-[11px]">{p.application}</span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                      Operating Outcome:
                    </span>
                    <p className="text-xs text-emerald-400/90 leading-relaxed">
                      {p.results}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => onPlanSimilarProject(p.name)}
                    className="w-full py-2 px-3 bg-slate-900 hover:bg-[#c51e28] text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Plan a Similar Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
