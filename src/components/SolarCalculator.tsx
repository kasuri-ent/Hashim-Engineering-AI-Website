import React, { useState } from 'react';
import { 
  Calculator, Zap, Sun, DollarSign, Layers, 
  ArrowRight, Phone, CheckCircle2, RotateCcw 
} from 'lucide-react';

interface SolarCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [calcMode, setCalcMode] = useState<'bill' | 'units' | 'agri'>('bill');
  const [billAmount, setBillAmount] = useState<number>(65000);
  const [monthlyUnits, setMonthlyUnits] = useState<number>(900);
  const [tubeWellHp, setTubeWellHp] = useState<number>(15);
  const [systemType, setSystemType] = useState<string>('On-Grid / Prosumer');
  const [city, setCity] = useState<string>('Lahore');

  // Realistic calculation models based on Pakistan tariff and solar irradiation averages:
  // Average solar generation in Pakistan: ~120 - 130 units (kWh) per kW per month
  // Average blended grid tariff: ~60-70 PKR per unit for residential/commercial peak/off-peak slabs
  let calculatedKw = 0;
  let estimatedMonthlyUnits = 0;
  let estimatedMonthlySavings = 0;
  let panelCount = 0;
  let areaRequiredSqFt = 0;
  let systemSummaryTitle = '';

  if (calcMode === 'bill') {
    // Approx bill / 65 PKR per unit = units, then units / 125 = kW
    const estimatedUnits = Math.round(billAmount / 65);
    calculatedKw = Math.max(3, Math.round((estimatedUnits / 120) * 10) / 10);
    // Standard commercial sizes: 3, 5, 7, 10, 15, 20, 25, 30, 50, etc.
    estimatedMonthlyUnits = Math.round(calculatedKw * 125);
    estimatedMonthlySavings = Math.round(estimatedMonthlyUnits * 62);
    panelCount = Math.ceil((calculatedKw * 1000) / 585);
    areaRequiredSqFt = Math.round(panelCount * 28);
    systemSummaryTitle = `${calculatedKw} kW System`;
  } else if (calcMode === 'units') {
    calculatedKw = Math.max(3, Math.round((monthlyUnits / 125) * 10) / 10);
    estimatedMonthlyUnits = Math.round(calculatedKw * 125);
    estimatedMonthlySavings = Math.round(estimatedMonthlyUnits * 62);
    panelCount = Math.ceil((calculatedKw * 1000) / 585);
    areaRequiredSqFt = Math.round(panelCount * 28);
    systemSummaryTitle = `${calculatedKw} kW System`;
  } else {
    // Agri Tube Well HP: Motor kW = HP * 0.746. Solar sizing multiplier is typically 1.35x - 1.5x of motor rating
    calculatedKw = Math.round(tubeWellHp * 0.746 * 1.4 * 10) / 10;
    panelCount = Math.ceil((calculatedKw * 1000) / 585);
    areaRequiredSqFt = Math.round(panelCount * 30);
    estimatedMonthlyUnits = Math.round(calculatedKw * 135);
    // Diesel savings equivalent in PKR (typical diesel consumption is ~3-4 liters/hr @ ~280 PKR/L for 8 hrs/day)
    estimatedMonthlySavings = Math.round(tubeWellHp * 12500);
    systemSummaryTitle = `${tubeWellHp} HP Tube Well Solar System (${calculatedKw} kW Array)`;
  }

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering,\n\nI used your Solar Calculator:\n` +
      `• City: ${city}\n` +
      `• Mode: ${calcMode.toUpperCase()}\n` +
      `• Input: ${calcMode === 'bill' ? 'PKR ' + billAmount : calcMode === 'units' ? monthlyUnits + ' kWh' : tubeWellHp + ' HP Tube Well'}\n` +
      `• Recommended: ${systemSummaryTitle}\n` +
      `• Estimated Panels: ~${panelCount} panels (585W TOPCon)\n` +
      `• Preferred System Type: ${systemType}\n\n` +
      `Please provide an official quotation and equipment breakdown.`
    );
    window.open(`https://wa.me/923344319157?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#0b0f17] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
            <span>Online Sizing Engine</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Accurate Engineering Sizer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Calculate Your Solar Requirements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Estimate your required photovoltaic capacity (kW), panel quantities, and monthly utility hedge based on Pakistan’s regional solar insolation and current DISCO tariff metrics.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl">
          
          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 p-1.5 bg-slate-900/90 rounded-xl max-w-md mx-auto border border-slate-800">
            <button
              onClick={() => setCalcMode('bill')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                calcMode === 'bill' ? 'bg-[#c51e28] text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              By Monthly Bill (Rs.)
            </button>
            <button
              onClick={() => setCalcMode('units')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                calcMode === 'units' ? 'bg-[#c51e28] text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              By Monthly Units (kWh)
            </button>
            <button
              onClick={() => setCalcMode('agri')}
              className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                calcMode === 'agri' ? 'bg-[#c51e28] text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Agriculture (Tube Well HP)
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {calcMode === 'bill' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Average Monthly Electricity Bill (PKR)
                    </label>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      Rs. {billAmount.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="500000"
                    step="5000"
                    value={billAmount}
                    onChange={(e) => setBillAmount(Number(e.target.value))}
                    className="w-full accent-[#c51e28] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>Rs. 15,000</span>
                    <span>Rs. 250,000</span>
                    <span>Rs. 500,000+</span>
                  </div>
                </div>
              )}

              {calcMode === 'units' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Monthly Units Consumed (kWh)
                    </label>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      {monthlyUnits.toLocaleString()} kWh
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="8000"
                    step="50"
                    value={monthlyUnits}
                    onChange={(e) => setMonthlyUnits(Number(e.target.value))}
                    className="w-full accent-[#c51e28] h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>200 Units</span>
                    <span>4,000 Units</span>
                    <span>8,000+ Units</span>
                  </div>
                </div>
              )}

              {calcMode === 'agri' && (
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Tube Well Motor Power (Horsepower)
                    </label>
                    <span className="text-base font-bold font-mono text-emerald-400">
                      {tubeWellHp} HP Motor
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {[5, 7.5, 10, 15, 20, 30].map((hp) => (
                      <button
                        key={hp}
                        onClick={() => setTubeWellHp(hp)}
                        className={`py-2 text-center rounded-lg text-xs font-bold font-mono transition-all ${
                          tubeWellHp === hp
                            ? 'bg-[#c51e28] text-white'
                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                        }`}
                      >
                        {hp} HP
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* City and System Type Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Installation City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28]"
                  >
                    <option value="Lahore">Lahore (Central Punjab)</option>
                    <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad (FESCO)</option>
                    <option value="Multan">Multan (South Punjab)</option>
                    <option value="Gujranwala">Gujranwala (GEPCO)</option>
                    <option value="Sialkot">Sialkot</option>
                    <option value="Karachi">Karachi (Sindh)</option>
                    <option value="Other">Other Region in Pakistan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    System Architecture
                  </label>
                  <select
                    value={systemType}
                    onChange={(e) => setSystemType(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28]"
                  >
                    <option value="On-Grid / Prosumer">On-Grid (Net Metering)</option>
                    <option value="Hybrid (Solar + Battery)">Hybrid (Solar + LiFePO4 Storage)</option>
                    <option value="Off-Grid Independent">Off-Grid (Independent Microgrid)</option>
                    <option value="Agriculture Solar VFD">Agriculture Solar VFD (Pumping)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-300">Engineering Sizing Basis:</div>
                <div>• Calculated with 585W Tier-1 N-Type TOPCon bifacial modules.</div>
                <div>• Assumes average 4.8 to 5.2 peak sun hours daily across Pakistan.</div>
                <div>• Sizing includes safety derating factors for temperature and dust.</div>
              </div>

            </div>

            {/* Results Output Column */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Recommended Sizing
                  </span>
                  <span className="text-xs text-[#c51e28] font-bold font-mono">
                    IEEE &amp; NEPRA SIZED
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-white tabular-nums">
                    {calculatedKw} <span className="text-xl font-normal text-rose-300">kW Capacity</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {systemSummaryTitle} · {city}
                  </div>
                </div>

                {/* Metrics Matrix */}
                <div className="mt-6 grid grid-cols-2 gap-3.5">
                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Est. Solar Panels</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">
                      ~{panelCount} <span className="text-xs font-normal text-slate-400">Panels (585W)</span>
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Est. Monthly Generation</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">
                      ~{estimatedMonthlyUnits.toLocaleString()} <span className="text-xs font-normal text-slate-400">kWh</span>
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Approx. Roof / Land Area</span>
                    <span className="text-lg font-bold font-mono text-white mt-0.5 block">
                      ~{areaRequiredSqFt.toLocaleString()} <span className="text-xs font-normal text-slate-400">sq ft</span>
                    </span>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#111726] border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Est. Monthly Value</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">
                      ~Rs. {estimatedMonthlySavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <button
                  onClick={() => onOpenQuoteModal(`Calculated ${calculatedKw} kW (${calcMode})`)}
                  className="w-full py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Request Official Engineering Quotation</span>
                </button>

                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-2.5 px-4 bg-emerald-700/30 hover:bg-emerald-700/50 text-emerald-300 border border-emerald-600/50 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Send This Sizing to WhatsApp for Immediate Price</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
