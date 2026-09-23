import React, { useEffect, useState } from 'react';
import { 
  Building2, Home, Factory, Tractor, MapPin, 
  Zap, Calendar, ArrowRight, CheckCircle2, Award, ChevronRight, Phone
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';

import industrialImg from '../assets/images/commercial_industrial_solar_1790159416013.jpg';
import resVillaImg from '../assets/images/residential_solar_hero_1790164280099.jpg';
import tubewellImg from '../assets/images/agriculture_solar_tubewell_1790159399906.jpg';
import citrusImg from '../assets/images/citrus_orchard_solar_drip_1790164269171.jpg';
import commercialImg from '../assets/images/commercial_solar_solutions_1790164238480.jpg';
import ongridImg from '../assets/images/ongrid_solar_systems_1790164256316.jpg';

interface ProjectsPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    updatePageSeo({
      title: 'Solar Projects & Case Studies Pakistan | Hashim Engineering Portfolio',
      description: 'Review commissioned solar projects across Pakistan: 15 HP citrus orchard solar drip, 75 kW commercial plazas, 250 kW industrial plants, and residential rooftop net metering.',
      canonicalPath: '/projects',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Projects & Case Studies', path: '/projects' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projects = [
    {
      id: 'agri-multan',
      category: 'agriculture',
      name: '15 HP Citrus Orchard Solar Drip Irrigation',
      location: 'Multan Region, Punjab',
      capacity: '18 kW DC PV Array',
      type: 'Solar Agriculture Water Pumping',
      image: citrusImg,
      application: '40-Acre Kinnow & Mango Orchard',
      panelBrand: 'Trina Solar Vertex 600W',
      inverterBrand: 'Grundfos / High-Torque Solar VFD Controller',
      completed: '2024',
      results: 'Continuous constant-pressure drip irrigation during daylight hours. Zero diesel expenses, 40% higher crop yield.',
      highlights: ['Automated pressure stabilization valve', 'Anti-theft tamper hardware', 'Hot-dip galvanized piles'],
    },
    {
      id: 'com-islamabad',
      category: 'commercial',
      name: '75 kW Commercial Plaza Solar Plant',
      location: 'Blue Area, Islamabad',
      capacity: '75 kW On-Grid Prosumer',
      type: 'On-Grid Grid Synchronization',
      image: commercialImg,
      application: 'Commercial Corporate Complex',
      panelBrand: 'Canadian Solar HiKu7 665W',
      inverterBrand: 'Sungrow SG75CX Multi-MPPT',
      completed: '2025',
      results: 'Supplies 9,400 kWh/month across 6 office floors; estimated 2.4-year payback period.',
      highlights: ['IESCO prosumer approval', 'String level arc-fault detection', 'Rapid shutdown safety switch'],
    },
    {
      id: 'res-dha-lahore',
      category: 'residential',
      name: '15 kW Luxury Villa Hybrid Solar System',
      location: 'DHA Phase 6, Lahore',
      capacity: '15 kW Hybrid + 15 kWh Lithium ESS',
      type: 'Hybrid Energy Storage',
      image: resVillaImg,
      application: '1-Kanal Luxury Villa',
      panelBrand: 'JinkoSolar Tiger Neo TOPCon 585W',
      inverterBrand: 'Deye 15kW 3-Phase Hybrid Inverter',
      completed: '2025',
      results: 'Eliminated peak tier-4 DISCO tariff bills and provides zero-interruption UPS power during local outages.',
      highlights: ['Custom elevated rooftop pergola', 'LiFePO4 battery cabinet', 'LESCO bi-directional net meter'],
    },
    {
      id: 'ind-textile-faisalabad',
      category: 'industrial',
      name: '250 kW Textile Spinning Mill Rooftop Solar',
      location: 'Khurrianwala Industrial Estate, Faisalabad',
      capacity: '250 kW High-Voltage Grid-Tied',
      type: 'Industrial LT Substation Integration',
      image: industrialImg,
      application: 'Textile Manufacturing Plant',
      panelBrand: 'LONGi Hi-MO 6 Explorer 580W',
      inverterBrand: 'Huawei FusionSolar SUN2000-100KTL (x3)',
      completed: '2024',
      results: 'Generates ~32,000 kWh/month; significantly offsets heavy industrial power bills and peak fuel surcharges.',
      highlights: ['Zero export reverse power limiter', 'HT transformer integration', 'Cloud generation dashboard'],
    },
    {
      id: 'res-bahria-lahore',
      category: 'residential',
      name: '10 kW On-Grid Residential Rooftop System',
      location: 'Bahria Town, Lahore',
      capacity: '10 kW Single-String On-Grid',
      type: 'On-Grid Net Metering',
      image: ongridImg,
      application: '10-Marla Modern Residence',
      panelBrand: 'LONGi Hi-MO 6 Explorer 580W',
      inverterBrand: 'GoodWe Smart DT Series 10kW',
      completed: '2024',
      results: 'Eliminated domestic tier-4 tariff bills; net positive export credits in spring/autumn.',
      highlights: ['Hot-dip galvanized P2 structure', 'Type II SPD protection', 'Smartphone app monitoring'],
    },
    {
      id: 'agri-sheikhupura',
      category: 'agriculture',
      name: '20 HP High-Head Solar Tube Well System',
      location: 'Sheikhupura District, Punjab',
      capacity: '25 kW Ground Array (48 Modules)',
      type: 'Agricultural Solar Water Pumping',
      image: tubewellImg,
      application: '60-Acre Rice & Wheat Farmland',
      panelBrand: 'JA Solar DeepBlue 4.0 Pro 580W',
      inverterBrand: 'High-Torque Solar VFD Pump Controller',
      completed: '2024',
      results: 'Pumping 1,150 Gallons/Min from 260ft bore; completely eliminated diesel generator fuel burn of PKR 180,000/month.',
      highlights: ['Automated water level sensors', 'Heavy P4 galvanized mounting', 'Lightning protection rod'],
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#0b0f17] min-h-screen text-slate-100">
      
      {/* Header */}
      <div className="relative border-b border-slate-800/80 bg-[#0e1422] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">Projects &amp; Case Studies</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
              <Award className="w-4 h-4" />
              <span>Proven Operational Track Record</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Commissioned Solar Projects Across Pakistan
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Every solar installation in our portfolio is engineered for maximum kilowatt-hour yield, verified under strict testing standards, and producing verified financial savings.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal('Project Inquiry')}
                className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <span>Plan a Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20would%20like%20to%20review%20case%20studies%20for%20my%20sector."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Solar Team</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-slate-800 bg-[#0e1422]/70 sticky top-20 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential Rooftops' },
              { id: 'commercial', label: 'Commercial Plazas' },
              { id: 'industrial', label: 'Industrial Plants' },
              { id: 'agriculture', label: 'Agriculture & Tube Wells' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`py-1.5 px-3.5 text-xs font-semibold rounded-lg transition-colors ${
                  filter === tab.id
                    ? 'bg-[#c51e28] text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="hidden sm:block text-xs text-slate-400 font-mono">
            {filteredProjects.length} Case Studies
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-[#111726] border border-slate-800 overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0b0f17]/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#c51e28]" />
                    <span>{proj.location}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-emerald-400 font-bold">
                    {proj.capacity}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c51e28]">
                      {proj.type}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white mt-1">
                      {proj.name}
                    </h3>
                  </div>

                  {/* Tech Specs */}
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Panels:</span>
                      <span className="text-white font-medium">{proj.panelBrand}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Inverter/VFD:</span>
                      <span className="text-white font-medium">{proj.inverterBrand}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Application:</span>
                      <span className="text-white font-medium">{proj.application}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs">
                    <div className="text-[10px] text-slate-400 font-semibold mb-1">Results &amp; Impact:</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {proj.results}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenQuoteModal(`Similar to project: ${proj.name}`)}
                  className="w-full py-2 px-3 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inquire Similar System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
