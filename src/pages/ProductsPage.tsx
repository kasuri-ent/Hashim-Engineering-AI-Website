import React, { useEffect, useState } from 'react';
import { 
  Cpu, Zap, BatteryCharging, Shield, Cable, ChevronRight, 
  ArrowRight, Phone, Download, CheckCircle2, Star, Award
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { SOLAR_BRANDS, BrandBadge, BatteryBrandsShowcase, SolarBrandId } from '../components/BrandLogos';

import panelsImg from '../assets/images/solar_panels_topcon_1790160964091.jpg';
import inverterImg from '../assets/images/solar_inverter_setup_1790160978723.jpg';
import structureImg from '../assets/images/mounting_structure_hdg_1790160992174.jpg';
import batteryImg from '../assets/images/solar_storage_protection_1790159434922.jpg';

interface ProductsPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    updatePageSeo({
      title: 'Tier-1 Solar Products & Equipment Pakistan | Hashim Engineering',
      description: 'Official Tier-1 solar panels, hybrid inverters, LiFePO4 lithium batteries, and hot-dip galvanized mounting structures supplied and installed across Pakistan.',
      canonicalPath: '/products',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Products & Equipment', path: '/products' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const productCatalog = [
    {
      category: 'panels',
      brandId: 'longi' as SolarBrandId,
      name: 'LONGi Hi-MO 6 / Hi-MO X6 Series',
      type: 'N-Type TOPCon & HPBC Bifacial Modules',
      powerRange: '580W – 610W',
      efficiency: '22.8% Module Efficiency',
      warranty: '12-Yr Product / 25-Yr Linear Yield',
      image: panelsImg,
      highlights: ['Anti-reflective tempered glass', 'Lower temperature coefficient (-0.29%/°C)', 'Excellent low-light morning/evening generation', 'BNEF Tier-1 bankability'],
    },
    {
      category: 'panels',
      brandId: 'jinko' as SolarBrandId,
      name: 'JinkoSolar Tiger Neo N-Type',
      type: '16BB Multi-Busbar TOPCon Technology',
      powerRange: '585W – 625W',
      efficiency: '23.1% Module Efficiency',
      warranty: '12-Yr Product / 30-Yr Linear Yield',
      image: panelsImg,
      highlights: ['Zero light-induced degradation (LID)', 'Dual-glass bifacial gain up to 25%', 'Robust 5400 Pa mechanical load rating', 'World No. 1 global module shipments'],
    },
    {
      category: 'panels',
      brandId: 'jasolar' as SolarBrandId,
      name: 'JA Solar DeepBlue 4.0 Pro',
      type: 'High-Efficiency N-Type Bycium+ Cells',
      powerRange: '580W – 605W',
      efficiency: '22.6% Module Efficiency',
      warranty: '12-Yr Product / 30-Yr Performance',
      image: panelsImg,
      highlights: ['Optimized rectangular silicon wafers', 'High resistance to micro-cracking', 'TUV SUD certified quality assurance', 'Hot-spot temperature reduction'],
    },
    {
      category: 'panels',
      brandId: 'trina' as SolarBrandId,
      name: 'Trina Solar Vertex 600W+ Series',
      type: '210mm Large Silicon Wafer Bifacial',
      powerRange: '600W – 690W',
      efficiency: '22.2% Module Efficiency',
      warranty: '12-Yr Product / 25-Yr Performance',
      image: panelsImg,
      highlights: ['Ultra-high power for commercial and industrial roofs', 'Non-destructive wafer cutting', 'Lower balance-of-system (BOS) installation costs', 'Extreme hail and wind load resistance'],
    },
    {
      category: 'panels',
      brandId: 'canadian' as SolarBrandId,
      name: 'Canadian Solar HiKu7 Dual-Cell',
      type: 'Bifacial Double-Glass Photovoltaic Module',
      powerRange: '600W – 670W',
      efficiency: '22.4% Module Efficiency',
      warranty: '12-Yr Product / 30-Yr Linear Output',
      image: panelsImg,
      highlights: ['Up to 85% bifaciality factor', 'Optimized shading tolerance', 'Engineered in Canada for demanding climates', 'Comprehensive quality testing'],
    },
    {
      category: 'inverters',
      brandId: 'huawei' as SolarBrandId,
      name: 'Huawei FusionSolar Smart String Inverters',
      type: 'On-Grid & Commercial Inverters (SUN2000 Series)',
      powerRange: '5 kW to 330 kW Multi-MPPT',
      efficiency: '98.8% Max Efficiency',
      warranty: '5-Yr to 10-Yr Standard Warranty',
      image: inverterImg,
      highlights: ['AI-powered active arc-fault protection (AFCI)', 'Fuse-free design with built-in PID recovery', 'Smart IV curve diagnosis in under 15 minutes', 'Integrated 4G / WLAN smart dongle telemetry'],
    },
    {
      category: 'inverters',
      brandId: 'sungrow' as SolarBrandId,
      name: 'Sungrow Commercial & Utility Inverters',
      type: 'Multi-MPPT String Inverters (SG Series)',
      powerRange: '10 kW to 250 kW',
      efficiency: '98.6% Euro Efficiency',
      warranty: '5-Yr Standard Manufacturer Warranty',
      image: inverterImg,
      highlights: ['IP66 protection and C5 anti-corrosion rating', 'Compatible with 500W+ bifacial modules', 'Built-in DC isolator switch and Type II SPD', 'Zero export power limiter integration'],
    },
    {
      category: 'inverters',
      brandId: 'deye' as SolarBrandId,
      name: 'Deye Hybrid & Low/High-Voltage Inverters',
      type: 'Hybrid Inverters with Battery Integration (SUN Series)',
      powerRange: '5 kW to 50 kW 3-Phase',
      efficiency: '97.6% Inverter / 99.9% MPPT',
      warranty: '5-Yr Standard Warranty',
      image: inverterImg,
      highlights: ['Unmatched parallel stacking up to 16 units', 'Generator input with dry contact auto-start', 'Touchscreen LCD interface and WiFi app', 'Seamless 10ms UPS switchover'],
    },
    {
      category: 'inverters',
      brandId: 'goodwe' as SolarBrandId,
      name: 'GoodWe Smart DT & ET Hybrid Series',
      type: '3-Phase Residential & Commercial Inverters',
      powerRange: '5 kW to 80 kW',
      efficiency: '98.4% Max Efficiency',
      warranty: '5-Yr Standard Expandable Warranty',
      image: inverterImg,
      highlights: ['Compact lightweight design', 'Quiet natural convection cooling', 'High DC input oversizing up to 150%', 'SEMS smart energy management app'],
    },
    {
      category: 'batteries',
      brandId: 'byd' as SolarBrandId,
      name: 'BYD Battery-Box Premium HVS/HVM',
      type: 'High-Voltage LiFePO4 Modular Energy Storage',
      powerRange: '5.1 kWh to 66.2 kWh Scalable',
      efficiency: '96% Round-Trip Efficiency',
      warranty: '10-Yr Manufacturer Warranty / 6,000+ Cycles',
      image: batteryImg,
      highlights: ['Cobalt-free lithium iron phosphate (LFP)', 'Direct high-voltage DC coupling with hybrid inverters', 'Patented modular plug design without internal cables', 'Certified for maximum fire and electrical safety'],
    },
    {
      category: 'batteries',
      brandId: 'dyness' as SolarBrandId,
      name: 'Dyness LiFePO4 Energy Storage Systems',
      type: 'Lithium Iron Phosphate Battery Modules',
      powerRange: '5.12 kWh to 100+ kWh Scalable',
      efficiency: '95% Round-Trip Efficiency',
      warranty: '10-Yr Warranty / 6,000+ Cycles',
      image: batteryImg,
      highlights: ['Intelligent battery management system (BMS)', 'Compatible with Deye, GoodWe, Solis, Victron', 'Modular rack-mounted and wall-mounted formats', 'Thermal runaway auto-protection'],
    },
    {
      category: 'batteries',
      brandId: 'pylontech' as SolarBrandId,
      name: 'Pylontech US3000C / US5000 LiFePO4',
      type: 'Telecom & Home ESS Battery Storage',
      powerRange: '3.55 kWh & 4.8 kWh Base Units',
      efficiency: '95% DoD Capability',
      warranty: '10-Yr Extended Warranty / 6,000 Cycles',
      image: batteryImg,
      highlights: ['Tier-1 lithium cell chemistry', 'Standard 19-inch server rack format', 'Proven longevity across 100,000+ global installs', 'CAN / RS485 communication protocols'],
    },
    {
      category: 'batteries',
      brandId: 'foxess' as SolarBrandId,
      name: 'FoxESS High-Voltage Energy Cube',
      type: 'Lithium LiFePO4 High-Voltage Stack System',
      powerRange: '8.6 kWh to 33.2 kWh',
      efficiency: '97% Round-Trip Efficiency',
      warranty: '10-Yr Warranty / 6,000 Cycles',
      image: batteryImg,
      highlights: ['High-voltage system for optimal efficiency', 'Wide temperature operating range (-10°C to +55°C)', 'Stackable plug-and-play installation', 'Real-time BMS cloud telemetry'],
    },
    {
      category: 'batteries',
      brandId: 'osaka' as SolarBrandId,
      name: 'Osaka Solar Tubular Deep-Cycle Batteries',
      type: 'Tall Tubular Heavy-Duty Lead-Acid Storage',
      powerRange: '180Ah to 250Ah (TX Series)',
      efficiency: 'Engineered for Frequent Load-Shedding',
      warranty: '1-Yr Replacement Guarantee',
      image: batteryImg,
      highlights: ['High-porosity tubular gauntlets for cyclic life', 'Heavy-duty spine grids resisting corrosion', 'Ceramic vent plugs with electrolyte indicators', 'Cost-effective storage for home UPS & solar setups'],
    },
    {
      category: 'batteries',
      brandId: 'phoenix' as SolarBrandId,
      name: 'Phoenix Deep-Cycle Solar Tubular',
      type: 'Tall Tubular Solar Inverter Battery (UTL / TX)',
      powerRange: '185Ah to 260Ah Units',
      efficiency: 'High Cyclic Life for Extreme Climates',
      warranty: '1-Yr Warranty / Heavy-Duty Plates',
      image: batteryImg,
      highlights: ['Specially formulated active material', 'Superior charge acceptance during short daylight', 'Low self-discharge rate', 'Designed specifically for Pakistan climatic conditions'],
    },
    {
      category: 'batteries',
      brandId: 'exide' as SolarBrandId,
      name: 'Exide Solar Tubular Inverter Battery',
      type: 'Industrial Deep-Cycle Tubular Storage',
      powerRange: '150Ah to 230Ah (TR Series)',
      efficiency: 'Long Life Cyclic Performance',
      warranty: '1-Yr Standard Manufacturer Warranty',
      image: batteryImg,
      highlights: ['Rugged antimony-lead alloy plates', 'Deep discharge recovery capability', 'Microporous ceramic float level indicators', 'Proven reliability in commercial & residential backups'],
    },
    {
      category: 'switchgear',
      brandId: 'schneider' as SolarBrandId,
      name: 'Schneider Electric Acti9 DC/AC Protection',
      type: 'Miniature Circuit Breakers & SPDs',
      powerRange: '1000V DC / 400V AC',
      efficiency: 'IEC 60947-2 Certified',
      warranty: 'Industrial Grade Reliability',
      image: structureImg,
      highlights: ['Dedicated DC breaking capacity', 'Type 1+2 surge protection devices', 'UV-resistant weatherproof DB enclosures', 'Clear trip-indicator visual flags'],
    },
    {
      category: 'switchgear',
      brandId: 'pakcables' as SolarBrandId,
      name: 'Pakistan Cables 1500V Pure Copper DC Cable',
      type: 'Cross-Linked Polyolefin (XLPO) Solar Cable',
      powerRange: '4mm², 6mm², 10mm², 16mm²',
      efficiency: '99.99% ETP Copper Conductors',
      warranty: 'PSQCA & TUV Rheinland Certified',
      image: structureImg,
      highlights: ['Halogen-free, flame retardant sheath', 'UV and ozone radiation resistant', '25-year designed operational life', 'Low voltage drop calculation guarantees'],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'panels', label: 'Tier-1 Solar Panels' },
    { id: 'inverters', label: 'Inverters & VFDs' },
    { id: 'batteries', label: 'LiFePO4 Batteries' },
    { id: 'switchgear', label: 'Switchgear & Cables' },
  ];

  const filteredCatalog = selectedCategory === 'all'
    ? productCatalog
    : productCatalog.filter(p => p.category === selectedCategory);

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
            <span className="text-white font-medium">Products &amp; Equipment</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
              <Award className="w-4 h-4" />
              <span>Direct Authorized Supply Chains</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Tier-1 Solar Panels, Inverters, Batteries &amp; Protection Hardware
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We never cut corners on balance-of-system quality. Every project installed by Hashim Engineering uses authentic, verifiable Tier-1 components backed by manufacturer warranties and rigorous testing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenQuoteModal('Equipment Inquiries')}
                className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all flex items-center gap-2"
              >
                <span>Request Equipment Pricing &amp; Stock</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering,%20I%20would%20like%20to%20inquire%20about%20equipment%20stock%20and%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs sm:text-sm font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Equipment Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-slate-800 bg-[#0e1422]/70 sticky top-20 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`py-1.5 px-3.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === c.id
                    ? 'bg-[#c51e28] text-white'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="hidden sm:block text-xs text-slate-400 font-mono">
            {filteredCatalog.length} Items Listed
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCatalog.map((item, index) => {
            const brand = SOLAR_BRANDS[item.brandId];

            return (
              <div
                key={`${item.name}-${index}`}
                className="rounded-2xl bg-[#111726] border border-slate-800 overflow-hidden shadow-xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                {/* Image and Brand Header */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/30 to-transparent" />
                    
                    {/* Authentic Brand Logo Badge */}
                    <div className="absolute top-3 left-3 h-12 w-32 sm:w-36 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 shadow-xl flex items-center justify-center">
                      {brand ? (
                        <img
                          src={brand.logoUrl}
                          alt={brand.name}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="h-full w-full max-h-9 object-contain transform scale-105"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-slate-900 font-bold text-xs">{item.name}</span>
                      )}
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 text-[11px] text-slate-300 font-mono">
                      {item.powerRange}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[11px] text-[#c51e28] font-bold uppercase tracking-wider">
                        {item.type}
                      </div>
                      <h3 className="text-lg font-bold font-display text-white mt-1">
                        {item.name}
                      </h3>
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                        <div className="text-[10px] text-slate-400">Rating / Power</div>
                        <div className="font-semibold text-white font-mono mt-0.5">{item.powerRange}</div>
                      </div>
                      <div className="p-2 rounded bg-slate-900 border border-slate-800/80">
                        <div className="text-[10px] text-slate-400">Efficiency / Spec</div>
                        <div className="font-semibold text-emerald-400 font-mono mt-0.5">{item.efficiency}</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {item.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-[11px] text-slate-300">{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Warranty:</span>
                      <span className="text-white font-semibold">{item.warranty}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onOpenQuoteModal(`Product: ${item.name}`)}
                    className="w-full py-2 px-3 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inquire Equipment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dedicated Battery Brands Dual Showcase (Lithium LiFePO4 & Lead-Acid Tubular) */}
        {(selectedCategory === 'all' || selectedCategory === 'batteries') && (
          <BatteryBrandsShowcase />
        )}
      </div>

    </div>
  );
};
