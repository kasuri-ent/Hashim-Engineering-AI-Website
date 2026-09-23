import React, { useEffect, useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, Send, 
  ChevronRight, CheckCircle2, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { updatePageSeo } from '../utils/seo';

interface ContactPageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Lahore');
  const [interest, setInterest] = useState('Residential Solar (5kW - 20kW)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    updatePageSeo({
      title: 'Contact Hashim Engineering | Solar Engineering Desks Pakistan',
      description: 'Contact Hashim Engineering for solar consultations, site surveys, and quotations across Lahore, Islamabad, Multan, and Faisalabad. Call +92 334 4319157.',
      canonicalPath: '/contact',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
      ],
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Assalam-o-Alaikum Hashim Engineering Team,\n` +
      `New Website Contact Form Submission:\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• City: ${city}\n` +
      `• Solution Interest: ${interest}\n` +
      `• Details: ${message || 'Please contact me to schedule a technical site assessment.'}`
    );
    window.open(`https://wa.me/923344319157?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const regionalDesks = [
    {
      city: 'Lahore (Headquarters & EPC Center)',
      coverage: 'Central Punjab (Lahore, Sheikhupura, Kasur, Okara, Gujranwala)',
      phone: '+92 334 4319157',
      address: 'Main Commercial Hub, Lahore, Punjab',
    },
    {
      city: 'Islamabad & Rawalpindi Desk',
      coverage: 'Federal Capital, Rawalpindi, Chakwal, Attock & KPK',
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
      city: 'Faisalabad & Sialkot Industrial Desk',
      coverage: 'Textile Mills, Engineering, Logistics & Industrial EPC',
      phone: '+92 334 4319157',
      address: 'Industrial Solar Coordination Desk, Faisalabad',
    },
  ];

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
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#c51e28] mb-3">
              <Phone className="w-4 h-4" />
              <span>Direct Engineering Engagement</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Get in Touch with Hashim Engineering
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach out directly to consult with our solar engineers, request an on-site feasibility survey, or obtain an official itemized quotation for your property anywhere in Pakistan.
            </p>
          </div>

        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Channels & Regional Desks */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Channels Box */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl space-y-4">
              <h2 className="text-lg font-bold font-display text-white">
                Primary Contact Channels
              </h2>

              <div className="space-y-3.5 text-xs">
                <a
                  href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20inquire%20about%20solar."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/80 hover:border-emerald-500 text-emerald-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-400 font-medium">Instant WhatsApp Chat</div>
                    <div className="text-sm font-bold text-white font-mono">+92 334 4319157</div>
                  </div>
                </a>

                <a
                  href="tel:+923344319157"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#c51e28] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Engineering Helpline</div>
                    <div className="text-sm font-bold text-white font-mono">+92 334 4319157</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Official Inquiries &amp; Tenders</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      <a href="mailto:info@hashim-engineering.com" className="hover:text-[#c51e28] transition-colors">
                        info@hashim-engineering.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Technical Working Hours</div>
                    <div className="text-xs font-medium text-slate-200">Monday – Saturday: 9:00 AM – 6:00 PM PKT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Desks */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Regional Engineering Desks
              </h3>

              <div className="space-y-3 text-xs">
                {regionalDesks.map((rd) => (
                  <div key={rd.city} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                    <div className="font-bold text-white">{rd.city}</div>
                    <div className="text-slate-400 text-[11px]">{rd.coverage}</div>
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="text-slate-400">{rd.address}</span>
                      <a href={`tel:${rd.phone.replace(/\s+/g, '')}`} className="font-mono text-[#c51e28] font-semibold">
                        {rd.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Technical Consultation Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#111726] border border-slate-800 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold font-display text-white">
                Request Engineering Consultation
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below to receive customized load profiling and quotation options directly on your phone or email.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Forwarded Successfully</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your details have been pre-filled into WhatsApp and dispatched to our engineering team. An engineer will follow up shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Muhammad Ahmad"
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c51e28]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0334 4319157"
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c51e28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">City / Region *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Lahore, Multan, Islamabad"
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c51e28]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Solar Interest *</label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c51e28]"
                    >
                      <option>Residential Solar (5kW - 20kW)</option>
                      <option>Commercial Plaza Solar (20kW - 100kW)</option>
                      <option>Industrial Solar (100kW - 1MW+)</option>
                      <option>Agriculture Solar Tube Well (7.5HP - 30HP)</option>
                      <option>Citrus Orchard Solar Drip Irrigation</option>
                      <option>NEPRA Net Metering Consultancy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Project Details or Current Monthly Electricity Bill</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide your average monthly bill in PKR, bore depth if agriculture, or roof type..."
                    className="w-full py-2.5 px-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-[#c51e28]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Solar Engineering Team</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
};
