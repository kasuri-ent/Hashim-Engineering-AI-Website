import React, { useState } from 'react';
import { X, Upload, CheckCircle2, FileText, ArrowRight, ShieldCheck, Zap, Phone } from 'lucide-react';
import { HashimLogo } from './HashimLogo';

interface BillUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialUnits?: string;
}

export const BillUploadModal: React.FC<BillUploadModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Residential Solar',
  initialUnits = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [propertyType, setPropertyType] = useState(initialType);
  const [monthlyBill, setMonthlyBill] = useState('');
  const [monthlyUnits, setMonthlyUnits] = useState(initialUnits);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering Team,\n\nI would like a free solar engineering assessment.\n\n` +
      `• Name: ${name || 'Prospective Client'}\n` +
      `• Phone: ${phone || 'Not provided'}\n` +
      `• City: ${city}\n` +
      `• Property Type: ${propertyType}\n` +
      `• Monthly Bill / Units: ${monthlyBill ? 'PKR ' + monthlyBill : ''} ${monthlyUnits ? '(' + monthlyUnits + ' kWh)' : ''}\n` +
      `• Bill Attached: ${fileName ? 'Yes (' + fileName + ')' : 'Will send on chat'}\n\n` +
      `Please provide estimated system size (kW/HP) and equipment options.`
    );
    return `https://wa.me/923344319157?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#111726] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header decoration */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#c51e28] via-rose-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <HashimLogo size="sm" variant="full" theme="dark" />
                  <span className="text-[10px] uppercase tracking-wider text-[#c51e28] font-bold px-2 py-0.5 rounded bg-[#c51e28]/10 border border-[#c51e28]/20">
                    Direct Engineering Audit
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  Upload Electricity Bill for Free Audit
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                  Avoid guesswork in kW sizing. Send us your latest electricity bill, and our engineers will calculate your true base load, seasonal peak units, and optimum PV array design.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Tariq Hashmi"
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0300 1234567"
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      City / Region *
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    >
                      <option value="Lahore">Lahore (LESCO)</option>
                      <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi (IESCO)</option>
                      <option value="Faisalabad">Faisalabad (FESCO)</option>
                      <option value="Multan">Multan (MEPCO)</option>
                      <option value="Gujranwala / Sialkot">Gujranwala / Sialkot (GEPCO)</option>
                      <option value="Sheikhupura">Sheikhupura</option>
                      <option value="Bahawalpur">Bahawalpur (MEPCO)</option>
                      <option value="Karachi">Karachi (K-Electric)</option>
                      <option value="Peshawar">Peshawar (PESCO)</option>
                      <option value="Other">Other Region in Pakistan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Application Sector
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    >
                      <option value="Residential Solar">Residential (Home / Villa)</option>
                      <option value="Commercial Solar">Commercial (Office / Plaza / Hospital)</option>
                      <option value="Industrial Solar">Industrial (Factory / Warehouse)</option>
                      <option value="Agriculture Solar Tube Well">Agriculture Solar (Tube Well / Farm)</option>
                      <option value="Hybrid Battery Storage">Hybrid Battery Backup System</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Monthly Bill Approx. (PKR)
                    </label>
                    <input
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      placeholder="e.g. 65,000"
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Or Monthly Units (kWh)
                    </label>
                    <input
                      type="number"
                      value={monthlyUnits}
                      onChange={(e) => setMonthlyUnits(e.target.value)}
                      placeholder="e.g. 950 units"
                      className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                </div>

                {/* Upload Area */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Upload Electricity Bill Photo or PDF (Optional)
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleFileDrop}
                    className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                      isDragging
                        ? 'border-[#c51e28] bg-[#c51e28]/10'
                        : fileName
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-slate-700 hover:border-slate-500 bg-slate-900/60'
                    }`}
                  >
                    <input
                      type="file"
                      id="bill-file"
                      accept="image/*,.pdf"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <label htmlFor="bill-file" className="cursor-pointer block">
                      {fileName ? (
                        <div className="flex items-center justify-center gap-2 text-emerald-400">
                          <FileText className="w-5 h-5 shrink-0" />
                          <span className="text-sm font-medium truncate max-w-xs">{fileName}</span>
                          <span className="text-xs text-emerald-500 font-semibold">(Attached)</span>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-2">
                          <Upload className="w-6 h-6 text-slate-400 mb-2" />
                          <span className="text-sm text-slate-300">
                            Drop bill image / PDF here, or <span className="text-[#c51e28] font-semibold underline">browse</span>
                          </span>
                          <span className="text-xs text-slate-500 mt-1">
                            Clear photo of bill consumption table & reference number
                          </span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-sm font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4 fill-white" />
                    Submit for Engineering Review
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Send via WhatsApp
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Confidential assessment. No marketing spam. Direct engineer response.</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="flex justify-center mb-4">
                <HashimLogo size="md" variant="full" theme="dark" />
              </div>
              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Assessment Request Received
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{name}</strong>. A Hashim Engineering technical consultant is reviewing your electricity consumption pattern for <strong className="text-white">{city}</strong>.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-2 text-slate-400">
                <div className="flex justify-between">
                  <span>Application:</span>
                  <span className="text-white font-medium">{propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Assigned Desk:</span>
                  <span className="text-white font-medium">Lahore EPC Center</span>
                </div>
                <div className="flex justify-between">
                  <span>Expected Response:</span>
                  <span className="text-emerald-400 font-medium">Within 2 to 4 working hours</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Continue on WhatsApp Now
                </a>
                <button
                  onClick={onClose}
                  className="py-2.5 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
