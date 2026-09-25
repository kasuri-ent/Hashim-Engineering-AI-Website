import React, { useEffect, useState } from 'react';
import { 
  Calculator, ArrowRight, Zap, SunMedium, DollarSign, 
  HelpCircle, Phone, FileText, ChevronRight, CheckCircle2,
  TrendingUp, Sparkles, ShieldCheck
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';
import { SavingsRoiCalculatorWidget } from '../components/SavingsRoiCalculatorWidget';

interface CalculatorPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'roi' | 'technical'>('roi');
  const [calcMode, setCalcMode] = useState<'bill' | 'units'>('bill');
  const [monthlyBill, setMonthlyBill] = useState<number>(65000);
  const [monthlyUnits, setMonthlyUnits] = useState<number>(950);
  const [systemType, setSystemType] = useState<'ongrid' | 'hybrid'>('ongrid');

  useEffect(() => {
    updatePageSeo({
      title: 'Solar ROI & Sizing Calculator Pakistan | Hashim Engineering',
      description: 'Calculate your solar electricity bill savings, estimated return on investment (ROI), payback period, and required solar kW system size in Pakistan.',
      canonicalPath: '/calculator',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Solar Calculator', path: '/calculator' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const averageTariffPerKWh = 68;
  const effectiveUnits = calcMode === 'bill' ? monthlyBill / averageTariffPerKWh : monthlyUnits;
  const dailyKWhNeeded = effectiveUnits / 30;
  const peakSunHours = 4.8;
  const calculatedKW = Math.max(3, Math.ceil((dailyKWhNeeded / peakSunHours) * 1.15));
  
  const panelWattage = 585;
  const numberOfPanels = Math.ceil((calculatedKW * 1000) / panelWattage);
  const roofAreaSqFt = Math.round(numberOfPanels * 28);
  const estimatedMonthlyGenKWh = Math.round(calculatedKW * peakSunHours * 30);
  const estimatedMonthlySavingsPKR = Math.round(estimatedMonthlyGenKWh * averageTariffPerKWh);
  const estimatedAnnualSavingsPKR = estimatedMonthlySavingsPKR * 12;
  const estimatedPaybackYears = systemType === 'ongrid' ? '2.4 – 2.8' : '3.2 – 3.7';

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering Team,\n` +
      `I calculated my solar requirement on your website:\n` +
      `• System Size: ${calculatedKW} kW (${systemType === 'ongrid' ? 'On-Grid Net Metering' : 'Hybrid with Battery'})\n` +
      `• Current Monthly Bill: PKR ${monthlyBill.toLocaleString()}\n` +
      `• Estimated Monthly Units: ${Math.round(effectiveUnits)} kWh\n` +
      `• Number of Panels: ${numberOfPanels} (585W TOPCon)\n` +
      `Please provide an official itemized BOQ quotation.`
    );
    window.open(`https://wa.me/923344319157?text=${text}`, '_blank');
  };

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
            <span className="text-white font-medium">Solar Calculator &amp; ROI Engine</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
              <Calculator className="w-4 h-4" />
              <span>Instant Solar Financial &amp; Technical Estimation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Solar Savings, ROI &amp; Sizing Calculator
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Calculate your projected Return on Investment (ROI), payback period, monthly electricity bill reduction, and recommended kW system size for homes and businesses in Pakistan.
            </p>
          </div>

          {/* Calculator View Selector Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('roi')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                activeTab === 'roi'
                  ? 'bg-[#c51e28] text-white shadow-lg shadow-[#c51e28]/20 ring-1 ring-white/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Simple Savings &amp; ROI Calculator</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/30 font-mono">Popular</span>
            </button>

            <button
              onClick={() => setActiveTab('technical')}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                activeTab === 'technical'
                  ? 'bg-[#c51e28] text-white shadow-lg shadow-[#c51e28]/20 ring-1 ring-white/20'
                  : 'bg-slate-900/90 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Technical Sizing &amp; BOQ Engine</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* VIEW 1: Simple Savings & ROI Calculator Widget */}
        {activeTab === 'roi' && (
          <div className="space-y-12">
            {/* The Simple Savings Calculator Widget */}
            <SavingsRoiCalculatorWidget 
              onOpenQuoteModal={onOpenQuoteModal} 
              initialBill={monthlyBill} 
            />

            {/* Explanatory ROI Benchmark Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">35% – 45% Annualized ROI</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  With Pakistan’s current utility slab tariffs exceeding Rs. 65–70/kWh, on-grid solar delivers higher inflation-hedged yields than commercial bank deposits, real estate, or stock indices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-[#c51e28]/10 border border-[#c51e28]/30 flex items-center justify-center text-[#c51e28] mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">2.4 – 3.0 Year Payback</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  High solar irradiance in Punjab and Sindh (4.8 to 5.2 peak sun hours/day) ensures your capital expenditure is completely recouped in under 3 years with NEPRA net metering.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">25-Year Long-Term Asset</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tier-1 N-Type TOPCon panels feature guaranteed 30-year linear performance warranties (87.4% retained output at Year 30), generating free electricity for decades.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: Detailed Technical Sizing & BOQ Engine */}
        {activeTab === 'technical' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Input Controls */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl space-y-8">
              <div>
                <h2 className="text-xl font-bold font-display text-white mb-2">
                  1. Provide Your Current Electricity Consumption
                </h2>
                <p className="text-xs text-slate-400">
                  Choose whether to size your system by your average monthly bill in PKR or monthly kilowatt-hour (kWh) units.
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800">
                <button
                  onClick={() => setCalcMode('bill')}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                    calcMode === 'bill' ? 'bg-[#c51e28] text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly Bill (PKR)
                </button>
                <button
                  onClick={() => setCalcMode('units')}
                  className={`flex-1 py-2.5 text-xs font-semibold rounded-lg transition-colors ${
                    calcMode === 'units' ? 'bg-[#c51e28] text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Monthly Units (kWh)
                </button>
              </div>

              {/* Slider / Value Input */}
              {calcMode === 'bill' ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Average Monthly Electricity Bill:</span>
                    <span className="text-xl font-extrabold text-white font-mono">
                      PKR {monthlyBill.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={15000}
                    max={600000}
                    step={5000}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full accent-[#c51e28] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>PKR 15,000</span>
                    <span>PKR 300,000</span>
                    <span>PKR 600,000+</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Average Monthly Units:</span>
                    <span className="text-xl font-extrabold text-white font-mono">
                      {monthlyUnits.toLocaleString()} kWh
                    </span>
                  </div>
                  <input
                    type="range"
                    min={250}
                    max={10000}
                    step={50}
                    value={monthlyUnits}
                    onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                    className="w-full accent-[#c51e28] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>250 kWh</span>
                    <span>5,000 kWh</span>
                    <span>10,000+ kWh</span>
                  </div>
                </div>
              )}

              {/* System Type Selector */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  2. Select Preferred Solar Topology:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSystemType('ongrid')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      systemType === 'ongrid'
                        ? 'bg-slate-900 border-[#c51e28] text-white shadow-md'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">On-Grid Net Metering</div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Lowest cost, grid-export credits, no batteries needed.
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSystemType('hybrid')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      systemType === 'hybrid'
                        ? 'bg-slate-900 border-[#c51e28] text-white shadow-md'
                        : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">Hybrid + Lithium ESS</div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Net metering + 24/7 load shedding blackout protection.
                    </div>
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                <span>Want to see financial ROI &amp; breakeven?</span>
                <button
                  onClick={() => setActiveTab('roi')}
                  className="text-xs font-bold text-[#c51e28] hover:underline flex items-center gap-1"
                >
                  <span>Switch to ROI Widget</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right: Sizing Results Panel */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-[#c51e28] uppercase tracking-wider">
                    Engineered Sizing Recommendation
                  </span>
                  <h3 className="text-2xl font-extrabold font-display text-white mt-0.5">
                    {calculatedKW} kW {systemType === 'ongrid' ? 'On-Grid System' : 'Hybrid System'}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Payback Period</div>
                  <div className="text-sm font-extrabold text-emerald-400 font-mono mt-0.5">
                    {estimatedPaybackYears} Years
                  </div>
                </div>
              </div>

              {/* Metrics Breakdown Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Monthly Gen.</div>
                  <div className="text-base font-bold text-white font-mono mt-1">
                    ~{estimatedMonthlyGenKWh.toLocaleString()} kWh
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Tier-1 Panels</div>
                  <div className="text-base font-bold text-white font-mono mt-1">
                    {numberOfPanels} Panels
                  </div>
                  <div className="text-[9px] text-slate-500">585W TOPCon</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Roof Area</div>
                  <div className="text-base font-bold text-white font-mono mt-1">
                    ~{roofAreaSqFt} sq ft
                  </div>
                  <div className="text-[9px] text-slate-500">Clear shadow-free</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-[11px] text-slate-400">Est. Monthly Savings</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-1">
                    PKR {estimatedMonthlySavingsPKR.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2">
                  <div className="text-[11px] text-slate-400">Estimated Annual Bill Reduction</div>
                  <div className="text-base font-bold text-emerald-400 font-mono mt-1">
                    PKR {estimatedAnnualSavingsPKR.toLocaleString()} / year
                  </div>
                </div>
              </div>

              {/* Technical Inclusions */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs">
                <div className="font-semibold text-white">Engineering Scope Included in Hashim BOQ:</div>
                <ul className="space-y-1 text-slate-400">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Hot-dip galvanized P2/P3 elevated mounting structure</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Pure copper 1500V DC solar cabling + AC breakers</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full NEPRA net metering and green meter prosumer documentation</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Chemical copper grounding pit (&lt; 5 Ohms) with surge protection</li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteModal(`${calculatedKW} kW ${systemType.toUpperCase()} Solar System`)}
                  className="flex-1 py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Get Detailed {calculatedKW} kW Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="py-3 px-4 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/80 text-emerald-400 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Sizing Summary</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};
