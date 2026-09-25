import React, { useState } from 'react';
import { 
  Sun, Cpu, Battery, Layers, ShieldCheck, Activity, 
  ArrowRight, Check, Cable, Zap, Anchor, Award, Sparkles 
} from 'lucide-react';
import { BrandBadge, BrandGridShowcase, BatteryBrandsShowcase, SolarBrandId, SOLAR_BRANDS } from './BrandLogos';

// High-resolution realistic engineering images for each equipment category
import panelsImage from '../assets/images/solar_panels_topcon_1790160964091.jpg';
import invertersImage from '../assets/images/solar_inverter_setup_1790160978723.jpg';
import storageImage from '../assets/images/solar_storage_protection_1790159434922.jpg';
import structuresImage from '../assets/images/mounting_structure_hdg_1790160992174.jpg';
import telemetryImage from '../assets/images/solar_iot_telemetry_1790161020401.jpg';

interface ProductsSectionProps {
  onInquireProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onInquireProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('panels');

  const categories = [
    { id: 'panels', label: 'Solar Panels', icon: Sun },
    { id: 'inverters', label: 'Solar Inverters', icon: Cpu },
    { id: 'batteries', label: 'Batteries & Storage', icon: Battery },
    { id: 'structures', label: 'Mounting Structures', icon: Layers },
    { id: 'protection', label: 'Protection & Cables', icon: ShieldCheck },
    { id: 'monitoring', label: 'IoT Monitoring', icon: Activity },
  ];

  const productData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageCaption: string;
    specs: string[];
    brandIds: SolarBrandId[];
    brandHeader: string;
    details: { label: string; val: string }[];
  }> = {
    panels: {
      title: 'High-Efficiency Photovoltaic Modules',
      subtitle: 'Tier-1 N-Type TOPCon & Bifacial Glass-Glass Solar Panels',
      description: 'We supply and integrate industry-certified photovoltaic panels designed for maximum energy yield under high ambient temperatures and dusty conditions across Pakistan.',
      image: panelsImage,
      imageCaption: 'Tier-1 N-Type TOPCon 585W–710W Multi-Busbar Bifacial Glass-Glass Modules',
      specs: [
        'N-Type TOPCon & Heterojunction (HJT) cell architectures with zero LID',
        'Module efficiencies exceeding 22.5% to 23.2%',
        'Bifacial power gain of 10%–25% on reflective rooftop / ground surfaces',
        'Lower temperature coefficient (-0.30%/°C) for extreme Pakistani summer heat',
        '12–15 year product warranty & 25–30 year linear output warranty'
      ],
      brandHeader: 'Certified Tier-1 Solar Panel Brands',
      brandIds: ['longi', 'jinko', 'jasolar', 'trina', 'canadian'],
      details: [
        { label: 'Power Range', val: '585W – 710W+' },
        { label: 'Cell Type', val: 'Monocrystalline N-Type' },
        { label: 'Surface Glass', val: 'Anti-reflective 3.2mm tempered' },
        { label: 'Wind Load Cert.', val: 'Up to 2400 Pa / 5400 Pa' }
      ]
    },
    inverters: {
      title: 'Grid-Tie, Hybrid & Solar Pump Inverters',
      subtitle: 'Three-Phase & Single-Phase Advanced Power Conversion',
      description: 'The core brain of your solar installation. We deploy high-efficiency European and Tier-1 Asian inverters with dual/quad MPPT trackers, rapid grid-reconnection, and heavy surge tolerance.',
      image: invertersImage,
      imageCaption: 'Precision Grid-Tie & Three-Phase Hybrid Inverter Plant Room Installation',
      specs: [
        'On-Grid inverters with 98.6% peak European efficiency rating',
        'Hybrid inverters with built-in instant UPS switchover (<10ms)',
        'Agriculture VFD pump inverters with auto-boost & dry-run protection',
        'Dual/Quad independent MPPT channels for mixed roof orientations',
        '5–10 Year manufacturer warranties with direct local engineering support'
      ],
      brandHeader: 'World-Leading Inverter Brands We Install',
      brandIds: ['huawei', 'sungrow', 'deye', 'goodwe', 'solis', 'growatt'],
      details: [
        { label: 'Capacity Range', val: '3 kW to 110 kW Units' },
        { label: 'MPPT Efficiency', val: '> 99.9%' },
        { label: 'Grid Standard', val: 'NEPRA / IEEE 1547 compliant' },
        { label: 'Protection', val: 'Integrated DC switch & Type II SPD' }
      ]
    },
    batteries: {
      title: 'LiFePO4 Lithium & Deep-Cycle Storage',
      subtitle: 'Safe, Long-Life Energy Storage for Homes, Businesses & Off-Grid Sites',
      description: 'Modern lithium iron phosphate (LiFePO4) energy storage systems delivering 6,000+ deep cycles, active cell balancing, and rapid recharge speeds during peak solar hours.',
      image: storageImage,
      imageCaption: 'Modular High-Safety LiFePO4 Lithium Battery Storage & Intelligent BMS',
      specs: [
        'Lithium Iron Phosphate (LiFePO4) chemistry for maximum thermal and fire safety',
        '6,000 to 8,000 cycles at 90% Depth of Discharge (DoD)',
        'Integrated Smart Battery Management System (BMS) with cell-level balancing',
        'Modular rack and wall-mountable scale from 5.12 kWh to 100 kWh+',
        '10-Year design life with zero water topping or maintenance'
      ],
      brandHeader: 'Top Lithium & Tubular Battery Partners',
      brandIds: ['byd', 'pylontech', 'dyness', 'hithium', 'foxess', 'soluna', 'narada', 'inverex', 'solarmax', 'knox', 'huawei', 'deye', 'osaka', 'phoenix', 'exide'],
      details: [
        { label: 'Voltage Options', val: '48V Low Voltage / High Voltage' },
        { label: 'Depth of Discharge', val: '90% – 95% DoD' },
        { label: 'Cycle Life', val: '6,000+ Cycles @ 25°C' },
        { label: 'Communication', val: 'CANbus / RS485 Dual Bus' }
      ]
    },
    structures: {
      title: 'Solar Mounting Structures & Framing',
      subtitle: 'Hot-Dip Galvanized & Elevated Structures for Pakistan Terrain',
      description: 'Precision-fabricated mounting systems engineered to withstand 140 km/h wind shear, torrential monsoon downpours, and rooftop thermal expansion without roof penetration leaks.',
      image: structuresImage,
      imageCaption: 'Heavy Duty Hot-Dip Galvanized P2/P3 Elevated Steel Structure',
      specs: [
        'P1 to P4 customizable elevated structures for rooftop usable recreational space',
        'Hot-Dip Galvanized (HDG) steel with minimum 80-micron zinc coating',
        'Anodized aluminum rail systems for lightweight residential concrete slabs',
        'Ground-mount piled ramming and concrete ballast options for farms & tube wells',
        'Stainless steel grade 304 / 316 fastening hardware and anti-vibration clamps'
      ],
      brandHeader: 'Structural Fabrication Standards',
      brandIds: ['schneider', 'abb', 'fastcables'],
      details: [
        { label: 'Corrosion Prot.', val: 'Hot-Dip Galvanized 80μm+' },
        { label: 'Tilt Angle', val: '15° to 28° optimized for Pakistan' },
        { label: 'Wind Resistance', val: 'Engineered for 130–150 km/h' },
        { label: 'Hardware', val: 'SS-304 Non-corrosive Bolts' }
      ]
    },
    protection: {
      title: 'DC/AC Protection & Pure Copper Cabling',
      subtitle: 'Industrial-Grade Electrical Safety, SPDs & Earthing Systems',
      description: 'A solar system is only as durable as its electrical switchgear. We never compromise on DC breakers, surge arresters, copper-bonded earthing pits, and certified double-insulated cables.',
      image: storageImage,
      imageCaption: 'Class-1 Lightning SPDs, DC Isolators & Pure Copper Interconnections',
      specs: [
        'Dedicated 1000V/1500V DC miniature circuit breakers (DC MCB) and isolators',
        'Type II DC and AC Surge Protective Devices (SPD) guarding against lightning',
        'Pure tinned copper 4mm² and 6mm² cross-linked polyethylene (XLPE) PV cables',
        'Chemical earthing pits achieving measured resistance strictly below 5 Ohms',
        'IP65 UV-resistant combiner boxes and sealed waterproof glands'
      ],
      brandHeader: 'Switchgear & Cable Brands We Install',
      brandIds: ['schneider', 'abb', 'chint', 'pakcables', 'fastcables'],
      details: [
        { label: 'DC Voltage Rating', val: '1000V / 1500V DC Rated' },
        { label: 'Cable Specs', val: 'TUV / EN50618 Certified' },
        { label: 'Earthing Target', val: '< 5.0 Ohms Earth Pit' },
        { label: 'Surge Rating', val: 'In 20kA / Imax 40kA' }
      ]
    },
    monitoring: {
      title: 'Smart IoT Solar Telemetry & Monitoring',
      subtitle: 'Real-Time Yield Tracking, Fault Alerts & Lifetime Generation Analytics',
      description: 'Access complete visibility into your solar performance from any smartphone or computer. Monitor real-time solar generation, grid consumption, battery state, and inverter health 24/7.',
      image: telemetryImage,
      imageCaption: 'Real-Time Cloud Telemetry & Smartphone Diagnostic Application',
      specs: [
        'Real-time generation dashboard with 5-minute telemetry data updates',
        'Historical daily, monthly, and annual generation comparisons with weather overlay',
        'Instant mobile push alerts for grid outage, ground fault, or panel shading',
        'String-level current and voltage diagnostics for proactive maintenance',
        'Cloud-synchronized data logging accessible via iOS, Android & Web Portal'
      ],
      brandHeader: 'Supported Telemetry Platforms',
      brandIds: ['huawei', 'sungrow', 'goodwe', 'deye', 'solis'],
      details: [
        { label: 'Data Protocol', val: 'Wi-Fi / 4G LTE / RS485' },
        { label: 'Platform Access', val: 'Android / iOS / Web Portal' },
        { label: 'Reporting', val: 'Automated Monthly PDF Reports' },
        { label: 'Firmware Upgrades', val: 'Over-the-air (OTA) updates' }
      ]
    },
  };

  const current = productData[selectedCategory];

  return (
    <section id="products" className="py-20 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
            <Award className="w-4 h-4" />
            <span>Tier-1 Hardware Standards</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Genuine Global Manufacturer Logos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Certified Solar Products &amp; Equipment
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Hashim Engineering deploys certified Tier-1 equipment from the world's most trusted solar technology innovators. We guarantee 100% genuine laser-etched serial numbers and manufacturer warranties.
          </p>
        </div>

        {/* Global Brand Strip */}
        <div className="mb-10 p-4 rounded-2xl bg-[#111726]/60 border border-slate-800">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 text-center flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#c51e28]" />
            <span>Authorized Global Technology Partners</span>
          </div>
          <BrandGridShowcase />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#c51e28] text-white shadow-lg shadow-[#c51e28]/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Feature Card */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Technical Specifications & Brand Logos */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-mono font-medium text-[#c51e28]">
                {current.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Engineering Specs */}
              <div className="space-y-2.5 mb-6">
                {current.specs.map((spec) => (
                  <div key={spec} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Brand Logos with Genuine Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-300 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c51e28]" />
                  <span>{current.brandHeader}:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {current.brandIds.map((bId) => (
                    <BrandBadge key={bId} brandId={bId} showCategory={false} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Realistic High-Resolution Image Preview & Technical Specs */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 group shadow-lg">
                <img
                  src={current.image}
                  alt={current.imageCaption}
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] font-medium text-slate-200 bg-black/60 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/10">
                  {current.imageCaption}
                </div>
              </div>

              {/* Technical Parameter Grid */}
              <div className="grid grid-cols-2 gap-3">
                {current.details.map((d) => (
                  <div key={d.label} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
                    <span className="text-slate-400 block text-[11px]">{d.label}</span>
                    <span className="text-white font-semibold font-mono mt-0.5 block">{d.val}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onInquireProduct(current.title)}
                className="w-full py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-rose-900/30"
              >
                <span>Inquire About {current.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dedicated Battery Brands Dual Showcase (Lithium & Lead-Acid Tubular) */}
        {selectedCategory === 'batteries' && (
          <BatteryBrandsShowcase />
        )}
      </div>
    </section>
  );
};
