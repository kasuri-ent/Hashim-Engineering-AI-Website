import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  Search,
  HelpCircle,
  ArrowRight,
  DollarSign,
  Wrench,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Calculator,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';

interface FaqSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

interface FaqItem {
  id: string;
  category: 'costs' | 'net-metering' | 'maintenance' | 'systems';
  categoryLabel: string;
  q: string;
  summary: string;
  a: string[];
  keyTakeaway?: string;
  highlights?: { label: string; value: string }[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>('cost-5kw-10kw');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'costs', label: 'Installation Costs & ROI', icon: DollarSign },
    { id: 'net-metering', label: 'Government Net-Metering Policies', icon: FileText },
    { id: 'maintenance', label: 'Maintenance & Care', icon: Wrench },
    { id: 'systems', label: 'System Types & Tech', icon: Zap },
  ];

  const faqs: FaqItem[] = [
    // 1. Installation Costs & Pricing in Pakistan
    {
      id: 'cost-5kw-10kw',
      category: 'costs',
      categoryLabel: 'Installation Costs & ROI',
      q: 'How much does a complete solar system installation cost in Pakistan in 2025–2026?',
      summary: 'Turnkey on-grid residential systems range from ~PKR 850,000 for 5kW up to ~PKR 3.3 Million for 20kW commercial setups.',
      a: [
        'Total turnkey installation costs depend on system capacity, inverter type (On-Grid vs Hybrid), and structural elevation (standard ground/roof vs elevated terrace). Below are current realistic turnkey cost ranges in Pakistan utilizing Tier-1 N-Type TOPCon panels and European/Global Top-Tier inverters:',
        '• 5 kW On-Grid System: PKR 850,000 – PKR 950,000 (Generates ~550–650 units/month, ideal for monthly bills of PKR 30k–45k)',
        '• 10 kW On-Grid System: PKR 1,550,000 – PKR 1,750,000 (Generates ~1,200–1,400 units/month, ideal for monthly bills of PKR 70k–100k)',
        '• 15 kW On-Grid System: PKR 2,250,000 – PKR 2,550,000 (Generates ~1,850–2,100 units/month, ideal for large residences with 3–4 ACs)',
        '• 20 kW On-Grid System: PKR 2,900,000 – PKR 3,300,000 (Generates ~2,500–2,800 units/month, ideal for commercial plazas or farmhouses)',
        '• Hybrid Battery Storage Upgrade: Adding high-cycle LiFePO4 lithium batteries (e.g. Dyness, Pylontech 5kWh–10kWh) adds approximately PKR 600,000 – PKR 1,150,000 for uninterrupted 24/7 backup during loadshedding.',
      ],
      keyTakeaway:
        'All Hashim Engineering turnkey quotes include Tier-1 PV modules, inverters, customized galvanized P1-P4 mounting structures, pure copper DC/AC cables, dual earthing pits, surge protection devices (SPDs), and complete net-metering liaison.',
      highlights: [
        { label: '5kW On-Grid', value: 'PKR 850K–950K' },
        { label: '10kW On-Grid', value: 'PKR 1.55M–1.75M' },
        { label: '15kW On-Grid', value: 'PKR 2.25M–2.55M' },
        { label: '20kW On-Grid', value: 'PKR 2.9M–3.3M' },
      ],
    },
    {
      id: 'cost-roi-payback',
      category: 'costs',
      categoryLabel: 'Installation Costs & ROI',
      q: 'What is the expected payback period (ROI) on solar systems in Pakistan with current electricity tariffs?',
      summary: 'Due to elevated NEPRA tariffs and fuel cost adjustments, average payback periods are between 2.2 to 3.2 years.',
      a: [
        'With current DISCO unit tariffs (averaging PKR 55 to PKR 70+ per unit including FCA, GST, and surcharges for peak domestic slabs), solar energy in Pakistan offers one of the world’s fastest financial payback periods:',
        '• Residential Systems (5kW – 15kW): Payback period is typically 2.5 to 3.2 years. After this brief period, electricity is virtually free for the remainder of the 25–30 year panel operating life.',
        '• Commercial & Industrial (20kW – 500kW): Payback ranges between 2.2 to 2.8 years, supported by accelerated tax depreciation benefits and high commercial peak tariff avoidance.',
        '• Agricultural Tube Wells: Payback against diesel generators is under 12 to 18 months, eliminating recurrent fuel, lubricant, and generator overhaul expenses.',
      ],
      keyTakeaway:
        'A 10kW system typically saves clients PKR 80,000 to PKR 110,000 every single month during peak summer generation, generating an internal rate of return (IRR) exceeding 35%.',
    },
    {
      id: 'cost-hidden-fees',
      category: 'costs',
      categoryLabel: 'Installation Costs & ROI',
      q: 'Are there any hidden costs or DISCO utility fees that clients need to budget for?',
      summary: 'Turnkey quotes from Hashim Engineering cover hardware and engineering; DISCO meter and inspection fees are transparently outlined.',
      a: [
        'We practice strict transparent pricing with zero surprise charges. The only external fees not part of private engineering contractors are government utility statutory fees payable directly to your respective DISCO (LESCO, IESCO, FESCO, MEPCO, K-Electric, GEPCO):',
        '1. Bi-directional "Green Meter" Demand Note: Issued directly by your DISCO for purchasing and testing the 3-phase bi-directional meter (typically PKR 50,000 – PKR 90,000 depending on the division).',
        '2. Three-Phase Connection Upgrade (if applicable): If your property currently has a single-phase meter, DISCO requires upgrading to a 3-phase connection before net metering can be approved.',
        '3. Sanctioned Load Enhancement: If your requested solar capacity exceeds your current sanctioned load, a minor load extension demand note is issued by the utility.',
      ],
      keyTakeaway:
        'Hashim Engineering manages the paperwork and technical filing for all demand notes on your behalf so you do not have to deal with utility bureaucracy.',
    },

    // 2. Government Net-Metering Policies in Pakistan
    {
      id: 'net-metering-nepra-policy',
      category: 'net-metering',
      categoryLabel: 'Government Net-Metering Policies',
      q: 'What is the current Government and NEPRA net-metering policy in Pakistan for 2025–2026?',
      summary: 'Net metering is actively active under NEPRA Alternative & Renewable Energy Prosumer Regulations, allowing unit exports into utility grids.',
      a: [
        'Under NEPRA’s National Electric Power Regulatory Authority regulations, prosumers (consumers who produce solar energy) are legally permitted to export surplus electricity back into the national grid via bi-directional meters.',
        '• Approved for 3-Phase Domestic, Commercial, Industrial, and Agricultural connections.',
        '• System capacity can be installed up to your sanctioned load or as permitted under current DISCO transformer load quota (maximum 80% of distribution transformer capacity).',
        '• Bi-directional meters record units exported (sent to grid) vs units imported (consumed from grid during nights or cloudy hours). Net billing offsets imports directly on your monthly bill.',
      ],
      keyTakeaway:
        'Despite periodic regulatory debate, the Government of Pakistan and NEPRA maintain net-metering incentives to reduce national circular debt and fuel import bills.',
    },
    {
      id: 'net-metering-steps-timeline',
      category: 'net-metering',
      categoryLabel: 'Government Net-Metering Policies',
      q: 'What is the step-by-step net-metering approval process and how long does it take?',
      summary: 'The complete process takes approximately 4 to 7 weeks from initial site assessment to green meter activation.',
      a: [
        'Hashim Engineering manages the entire end-to-end net-metering application with your local DISCO. The standard workflow follows these 5 engineering stages:',
        '1. Site Inspection & Sanctioned Load Verification: Evaluating connection type, distribution transformer headroom, and single-line diagram (SLD) preparation (Week 1).',
        '2. DISCO Application Submission & File Processing: Lodging formal application with SDO/XEN and submitting electrical wiring certificates (Weeks 2–3).',
        '3. DISCO Technical Load-Flow Study & NOC: Utility engineers inspect the premises and issue the Technical Feasibility NOC (Weeks 3–4).',
        '4. Demand Note Issuance & Payment: DISCO issues demand note for the green bi-directional meter testing and programming (Week 4–5).',
        '5. Meter Testing, Commissioning & NEPRA Generation License: The bi-directional meter is calibrated at the DISCO M&T laboratory, installed at site, and the formal 3-year renewable NEPRA license is executed (Weeks 5–7).',
      ],
      keyTakeaway:
        'Our dedicated liaison department tracks your file through DISCO subdivisions, preventing unnecessary delays and ensuring smooth commissioning.',
      highlights: [
        { label: 'Avg. Timeline', value: '4 – 7 Weeks' },
        { label: 'License Term', value: '3 Years (Renewable)' },
        { label: 'DISCO Coverage', value: 'LESCO, IESCO, MEPCO, etc.' },
      ],
    },
    {
      id: 'net-metering-billing-credits',
      category: 'net-metering',
      categoryLabel: 'Government Net-Metering Policies',
      q: 'How does monthly billing credit work under net metering? What happens to excess units in winter?',
      summary: 'Surplus exported units are credited against your bill and carry forward indefinitely into subsequent months.',
      a: [
        'Your monthly utility electricity bill features two distinct meter registers: "Active Import" (units you drew from the grid) and "Active Export" (solar units you sent to the grid):',
        '• Net Consumption Calculation: If you imported 800 units and exported 1,100 units during summer, you have a net surplus of 300 units. You pay zero energy charges for that month.',
        '• Banked Credit Rollover: The surplus 300 units are converted into monetary credit or unit reserve that carries forward to offset bills in winter or foggy months when solar generation is naturally lower.',
        '• Peak vs Off-Peak Units: Peak hour units (typically 4 hours in evening) cannot be directly offset with off-peak solar exports under standard NEPRA residential tariffs; however, off-peak savings drastically reduce your total monthly expense.',
      ],
      keyTakeaway:
        'By properly sizing your system with our engineering calculator, your annual net electricity cost can be reduced by 85% to 95%.',
    },

    // 3. Maintenance & Equipment Care
    {
      id: 'maintenance-cleaning-dust',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Operational Care',
      q: 'How often should solar panels be cleaned in Pakistan’s dusty climate, and what is the best method?',
      summary: 'Wash panels every 10–14 days in early mornings or evenings with plain water to prevent up to 15% generation loss.',
      a: [
        'In Pakistan’s urban centers (Lahore, Faisalabad, Karachi, Rawalpindi) and agricultural zones, atmospheric dust, agricultural harvesting particulate, and seasonal smog (October–January) settle on panel glass:',
        '• Recommended Cleaning Interval: Once every 10 to 14 days during dry seasons. During smog or wheat harvest season, weekly washing is recommended.',
        '• Critical Timing: Always clean panels in early mornings (before 7:30 AM) or after sunset. Never pour cold water on panels during midday heat; the thermal shock can micro-crack the tempered glass and photovoltaic cells.',
        '• Cleaning Technique: Use plain running water and a soft microfiber mop or sponge squeegee. Never use harsh detergents, abrasive brushes, acid, or metal scrapers that damage the anti-reflective coating (ARC).',
      ],
      keyTakeaway:
        'Regular washing restores 8% to 15% of lost generation immediately, directly boosting your monthly savings.',
      highlights: [
        { label: 'Frequency', value: 'Every 10–14 Days' },
        { label: 'Best Time', value: 'Early Morning / Dusk' },
        { label: 'Output Gain', value: '+8% to +15% Energy' },
      ],
    },
    {
      id: 'maintenance-warranties-lifespan',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Operational Care',
      q: 'What warranties and expected lifespans do Tier-1 solar panels and inverters have?',
      summary: 'Tier-1 panels carry 25–30 year performance warranties, while inverters carry 5–10 years manufacturer warranty.',
      a: [
        'Hashim Engineering supplies only authentic equipment with verifiable manufacturer warranty certificates and serial number barcodes:',
        '• Solar Panels (LONGi, Jinko, JA Solar, Trina, Canadian): 12-Year Product Workmanship Warranty and 25 to 30-Year Linear Power Warranty (guaranteeing >84% of original rated capacity even at Year 25).',
        '• Solar Inverters (Huawei, Sungrow, GoodWe, Solis, Deye): 5 to 10-Year Comprehensive Replacement/Repair Warranty, with expected operating lifespans of 12 to 15+ years.',
        '• LiFePO4 Lithium Batteries (Dyness, Pylontech): 5 to 10-Year Warranty with 6,000+ deep cycles at 90% Depth of Discharge (DoD), lasting 10 to 14 years of daily cycling.',
        '• Structural & Mounting: 10-Year Structural Integrity Warranty on hot-dip galvanized and aluminum elevated frameworks designed for 130 km/h wind survivability.',
      ],
      keyTakeaway:
        'Because panels have no moving parts, routine care is virtually limited to surface washing and annual electrical terminal retightening.',
    },
    {
      id: 'maintenance-amc-inspection',
      category: 'maintenance',
      categoryLabel: 'Maintenance & Operational Care',
      q: 'Does Hashim Engineering offer Annual Maintenance Contracts (AMC) and technical inspections?',
      summary: 'Yes, we provide preventive maintenance contracts including infrared thermal hotspot scans and string diagnostics.',
      a: [
        'All new turnkey installations by Hashim Engineering include 1 Year of complimentary preventive maintenance and emergency breakdown support.',
        'Our Annual Maintenance Contract (AMC) covers:',
        '• Bi-annual high-precision thermographic IR drone/handheld camera inspection to detect cell micro-cracks or shading hotspots.',
        '• String open-circuit voltage (Voc) and short-circuit current (Isc) testing to confirm panel degradation matches factory tolerance curves.',
        '• Inverter internal heat-sink dust removal, fan inspection, and firmware optimization updates.',
        '• Earth resistance testing for lightning arrestors and grounding pits (ensuring resistance remains below 5 Ohms).',
      ],
      keyTakeaway:
        'Professional AMC ensures your system operates at peak 98%+ efficiency throughout its multi-decade operating life.',
    },

    // 4. System Types & Technical Specs
    {
      id: 'systems-ongrid-vs-hybrid',
      category: 'systems',
      categoryLabel: 'System Types & Technical Specs',
      q: 'What is the exact difference between On-Grid, Off-Grid, and Hybrid solar systems in Pakistan?',
      summary: 'On-Grid is cheapest and exports power; Hybrid adds lithium batteries to keep power on during loadshedding.',
      a: [
        'Choosing the right architecture depends entirely on your grid stability and power outage frequency:',
        '• On-Grid (Grid-Tied): Synchronizes with your DISCO grid to offset bills and export surplus via net metering. If the utility power fails, on-grid inverters immediately shut down for linemen safety (anti-islanding). Most cost-effective option for zero-loadshedding areas.',
        '• Hybrid Solar: Connects to both the utility grid (for net metering) and a lithium-ion / tubular battery bank. When utility power cuts out, it transfers in under 10 milliseconds to run your lights, fans, computers, and refrigerators seamlessly.',
        '• Off-Grid Solar: Completely independent of the utility grid; relies solely on solar panels and batteries or backup generators. Common for remote farmhouses, telecommunication towers, and off-grid tube wells.',
      ],
      keyTakeaway:
        'For urban residences facing occasional loadshedding, we recommend Hybrid systems or hybrid-ready inverters so batteries can be added at any time.',
    },
    {
      id: 'systems-agriculture-tubewell',
      category: 'systems',
      categoryLabel: 'System Types & Technical Specs',
      q: 'How does a dedicated solar agricultural tube well operate without batteries or grid power?',
      summary: 'Variable Frequency Drives (VFD) convert DC solar directly into variable-speed 3-phase AC power for heavy motors.',
      a: [
        'Agricultural solar tube well systems do not require expensive batteries or a grid connection to pump water for crops and orchards:',
        '• Advanced Solar VFD Technology: High-efficiency MPPT Variable Frequency Drives take raw DC voltage from solar panels and convert it into 3-phase 380V–440V AC power with soft-start capability.',
        '• Solar Array Sizing: Arrays are sized at 1.35x to 1.5x motor horsepower (HP) to provide high starting torque even during morning hours (e.g. 10 HP motor requires ~13kW solar; 15 HP requires ~20kW; 20 HP requires ~26kW).',
        '• Dual-Supply Capability: Systems can be paired with an automated changeover switch to run on a generator or grid during night irrigation if ever required.',
      ],
      keyTakeaway:
        'Solar tube wells save Pakistani farmers millions of rupees in diesel fuel, operating reliably for 25+ years with zero fuel costs.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const qLower = faq.q.toLowerCase();
      const aLower = faq.a.join(' ').toLowerCase();
      const sLower = faq.summary.toLowerCase();
      const searchLower = searchQuery.toLowerCase();

      const matchesSearch =
        qLower.includes(searchLower) ||
        aLower.includes(searchLower) ||
        sLower.includes(searchLower);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#0a0e17] border-b border-slate-800/80 relative">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c51e28]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c51e28]/10 border border-[#c51e28]/20 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Pakistan Solar Knowledge Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Clear, engineering-backed answers regarding turnkey installation costs, government NEPRA net-metering policies, maintenance schedules, and equipment warranties in Pakistan.
          </p>
        </div>

        {/* Quick Snapshot Matrix: Costs, Policies & Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#111726]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Installation Costs</span>
                  <h3 className="text-sm font-bold text-white">PKR 850K – 3.3M</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standard 5kW to 20kW on-grid systems with Tier-1 panels, galvanized P1-P4 structures & full installation. Typical ROI in <strong>2.5 to 3.2 years</strong>.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCategory('costs');
                setOpenIndex('cost-5kw-10kw');
              }}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore pricing details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#111726]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">NEPRA Net-Metering</span>
                  <h3 className="text-sm font-bold text-white">4 – 7 Weeks Commissioning</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Legally approved under NEPRA Prosumer regulations for 3-phase connections across LESCO, IESCO, FESCO, MEPCO, and all DISCOs.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCategory('net-metering');
                setOpenIndex('net-metering-nepra-policy');
              }}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View net-metering guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#111726]/90 border border-slate-800 hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Maintenance & Care</span>
                  <h3 className="text-sm font-bold text-white">Wash Every 10–14 Days</h3>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Plain water cleaning in early morning/dusk recovers 8% to 15% generation. Panels carry 25–30 year performance warranties.
              </p>
            </div>
            <button
              onClick={() => {
                setActiveCategory('maintenance');
                setOpenIndex('maintenance-cleaning-dust');
              }}
              className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>See maintenance protocols</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Search & Category Filter Navigation */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search solar questions (e.g., 10kW cost, net metering steps, panel cleaning, payback period)..."
              className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#c51e28] transition-colors shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar shrink-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#c51e28] text-white shadow-md shadow-[#c51e28]/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-[#111827] border-slate-700/90 shadow-xl'
                      : 'bg-[#101624]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#121929]'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1.5 flex-1 pr-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 uppercase">
                          {faq.categoryLabel}
                        </span>
                        {faq.highlights && (
                          <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Popular Client Query</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.q}
                      </h3>
                      {!isOpen && (
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {faq.summary}
                        </p>
                      )}
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#c51e28] text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                      <div className="space-y-3 pt-4">
                        {faq.a.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-slate-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Optional Highlight Chips */}
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="mt-4 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                          {faq.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="p-2 rounded-lg bg-slate-800/50">
                              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                                {item.label}
                              </span>
                              <span className="text-xs sm:text-sm font-bold text-white mt-0.5 block">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key Takeaway Box */}
                      {faq.keyTakeaway && (
                        <div className="mt-4 p-3.5 rounded-xl bg-[#c51e28]/10 border border-[#c51e28]/25 flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#c51e28] shrink-0 mt-0.5" />
                          <div className="text-xs text-slate-200 leading-normal">
                            <strong className="text-white font-bold">Engineering Summary: </strong>
                            {faq.keyTakeaway}
                          </div>
                        </div>
                      )}

                      {/* Action trigger for this specific topic */}
                      <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-3">
                        <span className="text-[11px] text-slate-400">
                          Need custom sizing based on your latest electricity bill?
                        </span>
                        <button
                          onClick={() => onOpenQuoteModal(`Inquiry regarding: ${faq.q}`)}
                          className="text-xs font-bold text-white bg-slate-800 hover:bg-[#c51e28] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                        >
                          <span>Get Free Technical Assessment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-[#111726] rounded-2xl border border-slate-800 text-slate-400 text-sm">
              <HelpCircle className="w-8 h-8 mx-auto text-slate-500 mb-2" />
              <p className="font-semibold text-white">No questions matched your search term "{searchQuery}".</p>
              <p className="text-xs text-slate-400 mt-1">Our engineering team is ready to provide specific answers for your property.</p>
              <button
                onClick={() => onOpenQuoteModal('Custom Technical Query')}
                className="mt-4 px-4 py-2 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Ask An Engineer Directly
              </button>
            </div>
          )}
        </div>

        {/* Bottom Comprehensive Engineering Consultation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#131b2e] via-[#101726] to-[#0d121f] border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Free Engineering Consultation &amp; Bill Audit</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Still have questions regarding your solar project in Pakistan?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Send us your latest electricity bill for a free, no-obligation engineering report detailing optimal kW sizing, structural elevation drawings, net-metering feasibility, and exact return on investment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => onOpenQuoteModal('General Technical & Cost Inquiry')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg shadow-[#c51e28]/25 flex items-center justify-center gap-2 group"
            >
              <span>Request System Sizing &amp; Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <a
              href="tel:+923344319157"
              className="w-full sm:w-auto px-5 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2 font-mono"
            >
              <span>+92 334 4319157</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
