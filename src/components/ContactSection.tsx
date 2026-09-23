import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, CheckCircle2, ShieldCheck, ArrowRight 
} from 'lucide-react';

interface ContactSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [interest, setInterest] = useState('Residential Solar');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering Team,\n\nI would like to inquire about a solar installation.\n\n` +
      `• Name: ${name || 'Customer'}\n` +
      `• Phone: ${phone || 'Not specified'}\n` +
      `• City: ${city}\n` +
      `• Project Interest: ${interest}\n` +
      `• Details: ${message || 'Please contact me with equipment options and system sizing.'}`
    );
    return `https://wa.me/923344319157?text=${text}`;
  };

  const regionalOffices = [
    {
      city: 'Lahore (Headquarters & EPC Center)',
      coverage: 'Central Punjab (Lahore, Sheikhupura, Kasur, Okara)',
      phone: '+92 334 4319157',
      address: 'Main Commercial Hub, Lahore, Punjab',
    },
    {
      city: 'Islamabad & Rawalpindi',
      coverage: 'Federal Capital, Rawalpindi, Chakwal, Attock',
      phone: '+92 334 4319157',
      address: 'Corporate Services Desk, Blue Area, Islamabad',
    },
    {
      city: 'Multan & South Punjab Hub',
      coverage: 'Agricultural Solar Tube Wells & Farmland Pumping',
      phone: '+92 334 4319157',
      address: 'Agricultural Solar Support Center, Multan',
    },
    {
      city: 'Faisalabad, Sialkot & Gujranwala',
      coverage: 'Textile Mills, Engineering & Industrial EPC',
      phone: '+92 334 4319157',
      address: 'Industrial Solar Coordination Desk',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0e1422] border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-2">
            <span>Direct Engineering Engagement</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Nationwide Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Consult With Our Solar Engineering Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Ready to transition to reliable, engineered solar power? Reach out directly via WhatsApp, phone, email, or request an on-site survey anywhere in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Regional Hubs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Box */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold font-display text-white mb-4">
                Primary Contact Channels
              </h3>

              <div className="space-y-4 text-xs">
                <a
                  href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20inquire%20about%20solar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-500 text-emerald-300 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-medium">Instant WhatsApp Chat</div>
                    <div className="text-sm font-bold text-white font-mono">+92 334 4319157</div>
                  </div>
                </a>

                <a
                  href="tel:+923344319157"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#c51e28] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Engineering Helpline</div>
                    <div className="text-sm font-bold text-white font-mono">+92 334 4319157</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Official Inquiries &amp; Tenders</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      <a href="mailto:info@hashim-engineering.com" className="hover:text-[#c51e28] transition-colors">info@hashim-engineering.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Technical Working Hours</div>
                    <div className="text-xs font-medium text-slate-200">Monday – Saturday: 9:00 AM – 6:00 PM PKT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Presence Accordion / List */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-3">
                Regional Service Coverage
              </h4>
              <div className="space-y-3">
                {regionalOffices.map((reg) => (
                  <div key={reg.city} className="p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs">
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#c51e28]" />
                      <span>{reg.city}</span>
                    </div>
                    <div className="text-slate-400 text-[11px] mt-1">
                      {reg.coverage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Bill Intake Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl">
            <span className="text-xs uppercase font-mono font-medium text-[#c51e28]">
              Direct Inbound Form
            </span>
            <h3 className="text-2xl font-bold font-display text-white mt-1 mb-2">
              Request System Quotation &amp; Feasibility
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Fill in your details below. You can submit directly for an email/phone callback, or trigger an instant pre-filled WhatsApp conversation with our engineers.
            </p>

            {!isSubmitted ? (
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
                      placeholder="e.g. Mian Ahmad"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0300 1234567"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      City / Location in Pakistan *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Lahore, Faisalabad, Multan"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Interested Solar Solution
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                    >
                      <option value="Residential Solar (5kW - 20kW)">Residential Solar (5kW - 20kW)</option>
                      <option value="Commercial Solar (20kW - 100kW)">Commercial Solar (20kW - 100kW)</option>
                      <option value="Industrial Solar (100kW - 1MW+)">Industrial Solar (100kW - 1MW+)</option>
                      <option value="Agriculture Solar Tube Well">Agriculture Solar Tube Well</option>
                      <option value="Hybrid Lithium Battery Backup">Hybrid Lithium Battery Backup</option>
                      <option value="Equipment Supply (Panels/Inverters)">Equipment Supply Only</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Monthly Bill / Load Details / Remarks
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide your approximate monthly bill amount, sanctioned load in kW, or tube well motor HP (e.g. 15 HP tube well in Sheikhupura, 180 ft bore depth)..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-[#c51e28] transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Engineering Inquiry</span>
                  </button>

                  <a
                    href={generateWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Strict confidentiality. Your electricity details are only used for solar engineering calculations.</span>
                </div>
              </form>
            ) : (
              <div className="p-6 rounded-xl bg-slate-900 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Successfully Dispatched</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{name}</strong>. Our technical engineering division has recorded your requirements for <strong className="text-white">{city}</strong> ({interest}).
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={generateWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Continue on WhatsApp with Engineer</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="py-2.5 px-4 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
