import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Zap, Clock, 
  CheckCircle2, ArrowRight, Phone, Copy, Check, 
  Sparkles, Percent, ShieldCheck, HelpCircle, ArrowUpRight
} from 'lucide-react';

interface SavingsRoiCalculatorWidgetProps {
  onOpenQuoteModal: (topic?: string) => void;
  initialBill?: number;
}

export const SavingsRoiCalculatorWidget: React.FC<SavingsRoiCalculatorWidgetProps> = ({
  onOpenQuoteModal,
  initialBill = 65000,
}) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(initialBill);
  const [systemType, setSystemType] = useState<'ongrid' | 'hybrid'>('ongrid');
  const [copied, setCopied] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);

  // Quick preset bill amounts
  const presetBills = [
    { label: 'Rs. 30k', value: 30000 },
    { label: 'Rs. 50k', value: 50000 },
    { label: 'Rs. 75k', value: 75000 },
    { label: 'Rs. 100k', value: 100000 },
    { label: 'Rs. 150k', value: 150000 },
    { label: 'Rs. 250k', value: 250000 },
  ];

  // Engineering & Financial Models
  // Average blended DISCO tariff in Pakistan (inclusive of FC surcharges, GST & FPA)
  const averageTariffPerKWh = 68;
  const estimatedMonthlyKwh = Math.round(monthlyBill / averageTariffPerKWh);
  
  // 1 kW yields ~125 kWh/month average in Pakistan
  const rawKw = estimatedMonthlyKwh / 125;
  const recommendedKw = Math.max(3, Math.round(rawKw * 10) / 10);

  // Capex model based on current 2025/2026 Tier-1 turnkey rates in Pakistan
  // On-grid: ~PKR 125,000 / kW (Tier-1 TOPCon 585W + Inverter + HDG P2/P3 + Net Metering)
  // Hybrid: ~PKR 205,000 / kW (Tier-1 TOPCon + Hybrid Inverter + LiFePO4 Lithium Battery)
  const costPerKw = systemType === 'ongrid' ? 125000 : 205000;
  const estimatedCapex = Math.round(recommendedKw * costPerKw);

  // Net metering offset is typically 90% of electricity bill (remaining ~10% covers fixed meter fees & TV fees)
  const estimatedMonthlySavings = Math.round(monthlyBill * 0.90);
  const estimatedNewMonthlyBill = Math.max(0, monthlyBill - estimatedMonthlySavings);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // ROI Metrics
  const paybackYearsRaw = estimatedCapex / Math.max(1, estimatedAnnualSavings);
  const paybackYears = Math.max(1.2, Math.min(8.0, paybackYearsRaw));
  const paybackYearsFormatted = paybackYears.toFixed(1);
  const paybackMonths = Math.round(paybackYears * 12);
  
  // Annualized Return on Investment (ROI %)
  const annualizedRoiPercent = Math.min(100, Math.round((estimatedAnnualSavings / Math.max(1, estimatedCapex)) * 100));

  // 5-Year and 25-Year Financial Return
  const fiveYearGrossSavings = estimatedAnnualSavings * 5;
  const fiveYearNetReturn = fiveYearGrossSavings - estimatedCapex;
  
  // 25-Year cumulative savings with conservative 4% annual tariff escalation
  let twentyFiveYearGrossSavings = 0;
  let currentYearSavings = estimatedAnnualSavings;
  for (let y = 1; y <= 25; y++) {
    twentyFiveYearGrossSavings += currentYearSavings;
    currentYearSavings *= 1.04;
  }
  const twentyFiveYearNetGain = Math.round(twentyFiveYearGrossSavings - estimatedCapex);
  const lifetimeRoiMultiple = (twentyFiveYearGrossSavings / Math.max(1, estimatedCapex)).toFixed(1);

  const handleCopySummary = () => {
    const summary = 
      `☀️ Solar Savings & ROI Estimate (Hashim Engineering)\n` +
      `----------------------------------------\n` +
      `• Current Monthly Bill: PKR ${monthlyBill.toLocaleString()}\n` +
      `• Recommended System: ${recommendedKw} kW (${systemType === 'ongrid' ? 'On-Grid Net Metering' : 'Hybrid with Lithium Battery'})\n` +
      `• Estimated Turnkey Capex: PKR ${estimatedCapex.toLocaleString()}\n` +
      `• Estimated Monthly Savings: PKR ${estimatedMonthlySavings.toLocaleString()} (90% bill offset)\n` +
      `• Estimated Annual Savings: PKR ${estimatedAnnualSavings.toLocaleString()} / year\n` +
      `• Payback Period: ~${paybackYearsFormatted} Years (~${paybackMonths} months)\n` +
      `• Annualized ROI: ${annualizedRoiPercent}% per annum\n` +
      `• 5-Year Net Profit: PKR ${fiveYearNetReturn.toLocaleString()}\n` +
      `• 25-Year Net Financial Gain: PKR ${twentyFiveYearNetGain.toLocaleString()} (${lifetimeRoiMultiple}x return)\n` +
      `Generated via Hashim Engineering Solar ROI Engine`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering,\n\n` +
      `I calculated the ROI for my solar system on your website:\n` +
      `• Current Electricity Bill: PKR ${monthlyBill.toLocaleString()} / month\n` +
      `• Recommended Capacity: ${recommendedKw} kW (${systemType === 'ongrid' ? 'On-Grid' : 'Hybrid'})\n` +
      `• Estimated Turnkey Cost: PKR ${estimatedCapex.toLocaleString()}\n` +
      `• Estimated Annual Savings: PKR ${estimatedAnnualSavings.toLocaleString()}\n` +
      `• Estimated Payback: ~${paybackYearsFormatted} Years (ROI: ${annualizedRoiPercent}%/yr)\n\n` +
      `Please provide an official itemized BOQ quotation and roof survey schedule.`
    );
    window.open(`https://wa.me/923344319157?text=${text}`, '_blank');
  };

  return (
    <div className="rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl overflow-hidden">
      
      {/* Widget Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-[#111726] to-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Instant Return on Investment (ROI) Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
            Solar Savings &amp; ROI Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Enter your monthly electricity bill to calculate estimated system capacity, turnkey cost, payback period, and financial returns.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopySummary}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            title="Copy ROI Summary"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Summary</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Input Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Bill Input Box */}
          <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="monthly-bill-input" className="text-xs font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Monthly Electricity Bill (PKR)</span>
              </label>
              <span className="text-[11px] text-slate-400">
                ~{estimatedMonthlyKwh.toLocaleString()} units/mo
              </span>
            </div>

            {/* Direct Number Input */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-mono font-bold text-sm">
                PKR
              </span>
              <input
                id="monthly-bill-input"
                type="number"
                min={10000}
                max={1500000}
                step={1000}
                value={monthlyBill || ''}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setMonthlyBill(val < 0 ? 0 : val);
                }}
                className="w-full pl-14 pr-4 py-3 bg-[#0b0f17] border border-slate-700 rounded-xl text-xl sm:text-2xl font-bold font-mono text-white focus:outline-none focus:border-[#c51e28] focus:ring-1 focus:ring-[#c51e28] transition-all"
                placeholder="65000"
              />
            </div>

            {/* Range Slider */}
            <div className="space-y-2 pt-1">
              <input
                type="range"
                min={15000}
                max={500000}
                step={5000}
                value={Math.min(500000, Math.max(15000, monthlyBill))}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-[#c51e28] h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>PKR 15,000</span>
                <span>PKR 250,000</span>
                <span>PKR 500,000+</span>
              </div>
            </div>

            {/* Quick Bill Preset Chips */}
            <div className="pt-2">
              <span className="text-[11px] text-slate-400 block mb-2 font-medium">Quick Select Bill:</span>
              <div className="grid grid-cols-3 gap-1.5">
                {presetBills.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setMonthlyBill(preset.value)}
                    className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                      monthlyBill === preset.value
                        ? 'bg-[#c51e28] border-[#c51e28] text-white shadow-sm'
                        : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* System Type Selection */}
          <div className="space-y-2.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Solar System Configuration:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSystemType('ongrid')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  systemType === 'ongrid'
                    ? 'bg-slate-900 border-[#c51e28] text-white ring-1 ring-[#c51e28]/50 shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white">On-Grid Net Metering</div>
                  {systemType === 'ongrid' && <CheckCircle2 className="w-3.5 h-3.5 text-[#c51e28]" />}
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                  Highest ROI (~{systemType === 'ongrid' ? paybackYearsFormatted : '2.5'} yrs)
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Export solar units to DISCO grid without costly batteries.
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSystemType('hybrid')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  systemType === 'hybrid'
                    ? 'bg-slate-900 border-[#c51e28] text-white ring-1 ring-[#c51e28]/50 shadow-md'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-white">Hybrid + Lithium ESS</div>
                  {systemType === 'hybrid' && <CheckCircle2 className="w-3.5 h-3.5 text-[#c51e28]" />}
                </div>
                <div className="text-[11px] text-amber-400 font-semibold mt-1">
                  Backup + Net Metering
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Includes LiFePO4 battery for zero load-shedding interruption.
                </div>
              </button>
            </div>
          </div>

          {/* Quick Technical Sizing Preview */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/90 text-xs space-y-2">
            <div className="flex items-center justify-between text-slate-300 font-medium">
              <span>Required System Capacity:</span>
              <span className="font-mono font-bold text-white text-sm">{recommendedKw} kW</span>
            </div>
            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span>Tier-1 585W TOPCon Modules:</span>
              <span className="font-mono font-semibold text-slate-200">~{Math.ceil((recommendedKw * 1000) / 585)} Panels</span>
            </div>
            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span>Required Roof Area:</span>
              <span className="font-mono font-semibold text-slate-200">~{Math.round(Math.ceil((recommendedKw * 1000) / 585) * 28)} sq. ft.</span>
            </div>
          </div>

          {/* Collapsible Engineering Assumptions */}
          <div>
            <button
              type="button"
              onClick={() => setShowAssumptions(!showAssumptions)}
              className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showAssumptions ? 'Hide calculation basis & assumptions' : 'View calculation basis & NEPRA assumptions'}</span>
            </button>
            
            {showAssumptions && (
              <div className="mt-2.5 p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1.5">
                <div>• <strong>Electricity Tariff Basis:</strong> Modeled at ~Rs. {averageTariffPerKWh}/unit (average peak/off-peak slab with DISCO taxes & fuel adjustment).</div>
                <div>• <strong>Bill Offset:</strong> Modeled at 90% net-metering offset; 10% covers fixed charges and service fees.</div>
                <div>• <strong>Turnkey Rates:</strong> Based on current Tier-1 components: 585W TOPCon bifacial modules, certified on-grid/hybrid inverters, hot-dip galvanized mounting structures, and NEPRA green meter licensing.</div>
              </div>
            )}
          </div>

        </div>

        {/* Right Output Column: ROI & Financial Breakdown (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Primary ROI Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            
            {/* Payback Period */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-1">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Payback Period</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1">
                ~{paybackYearsFormatted} <span className="text-sm font-normal text-emerald-400">Years</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Breakeven in ~{paybackMonths} months
              </div>
            </div>

            {/* Annualized ROI % */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#c51e28]/30 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#c51e28]/10 rounded-bl-full pointer-events-none" />
              <div className="flex items-center gap-1.5 text-xs text-rose-400 font-semibold mb-1">
                <Percent className="w-4 h-4 text-rose-400" />
                <span>Annualized ROI</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mt-1">
                {annualizedRoiPercent}% <span className="text-sm font-normal text-slate-400">/ yr</span>
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                vs 12-15% bank deposits
              </div>
            </div>

            {/* Estimated Capex */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-lg">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Turnkey Capex</span>
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-mono text-white mt-1 truncate">
                Rs. {estimatedCapex >= 1000000 ? `${(estimatedCapex / 1000000).toFixed(2)}M` : `${Math.round(estimatedCapex / 1000)}k`}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 font-mono">
                PKR {estimatedCapex.toLocaleString()}
              </div>
            </div>

          </div>

          {/* Monthly Bill Comparison Card */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                Monthly Electricity Bill Impact
              </span>
              <span className="text-xs font-extrabold text-emerald-400 font-mono">
                90% Bill Reduction
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-[#0b0f17] border border-rose-900/30">
                <div className="text-[11px] text-slate-400">Current Monthly Bill (Without Solar):</div>
                <div className="text-xl font-bold font-mono text-rose-400 mt-1">
                  PKR {monthlyBill.toLocaleString()}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Paid directly to DISCO / Grid</div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0b0f17] border border-emerald-900/30">
                <div className="text-[11px] text-slate-400">Estimated Bill (With Solar Net Metering):</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                  PKR {estimatedNewMonthlyBill.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-500/80 mt-0.5">Saves PKR {estimatedMonthlySavings.toLocaleString()} every month</div>
              </div>
            </div>

            {/* Visual Bill Comparison Bar */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-[11px] text-slate-400">
                <span>Electricity Bill Offset Progress</span>
                <span className="text-emerald-400 font-bold">90% Saved / 10% Residual</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: '90%' }} title="Savings (90%)" />
                <div className="bg-rose-600/80 h-full transition-all duration-500" style={{ width: '10%' }} title="Residual Bill (10%)" />
              </div>
            </div>
          </div>

          {/* Cumulative Financial Gains Timeline */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Cumulative Net Wealth Preserved</span>
              </span>
              <span className="text-[11px] text-slate-400">
                25-Yr Linear Warranty
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-[#0b0f17] border border-slate-800">
                <div className="text-[11px] text-slate-400">Year 1 Annual Savings</div>
                <div className="text-base font-extrabold font-mono text-white mt-1">
                  PKR {estimatedAnnualSavings.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">Direct cashflow retained</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0f17] border border-slate-800">
                <div className="text-[11px] text-slate-400">5-Year Net Profit</div>
                <div className="text-base font-extrabold font-mono text-emerald-400 mt-1">
                  +PKR {fiveYearNetReturn > 0 ? fiveYearNetReturn.toLocaleString() : '0'}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">Net after paying full capex</div>
              </div>

              <div className="p-3 rounded-lg bg-[#0b0f17] border border-slate-800">
                <div className="text-[11px] text-slate-400">25-Year Lifetime Gain</div>
                <div className="text-base font-extrabold font-mono text-emerald-400 mt-1">
                  +PKR {(twentyFiveYearNetGain / 1000000).toFixed(1)}M
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">{lifetimeRoiMultiple}x Total Capital Return</div>
              </div>
            </div>

            {/* Breakeven Milestones */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Breakeven Milestones:</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Your investment is completely paid off by <strong>Year {paybackYearsFormatted}</strong>. For the remaining <strong>{(25 - paybackYears).toFixed(1)} years</strong> of solar panel service life, all electricity generated is <strong>100% free</strong>, shielding your home or business against recurring DISCO tariff hikes.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenQuoteModal(`ROI Sizing: ${recommendedKw} kW (${systemType.toUpperCase()}) - Bill PKR ${monthlyBill.toLocaleString()}`)}
              className="flex-1 py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Itemized Quotation for {recommendedKw} kW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppShare}
              className="py-3 px-4 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-700/60 text-emerald-400 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp ROI Sizing</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
