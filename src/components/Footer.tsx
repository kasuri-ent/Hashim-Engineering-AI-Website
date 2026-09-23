import React from 'react';
import { HashimLogo } from './HashimLogo';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (topic?: string) => void;
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal, onNavigate }) => {
  const handleNav = (e: React.MouseEvent, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-[#070a10] border-t border-slate-800 text-slate-400 text-xs">
      
      {/* Top Banner Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-800/80">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-gradient-to-r from-[#111726] to-[#0e1422] border border-slate-800 shadow-xl">
          <div className="text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c51e28]">
              Ready for Clean Energy Independence?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Power Your Home, Business or Agriculture with Solar
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-xl">
              Get an engineering-backed solar assessment tailored to your actual consumption, available space, and budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal('Turnkey Solar System')}
              className="py-3 px-6 bg-[#c51e28] hover:bg-[#a81922] text-white text-xs font-semibold rounded-lg shadow-md transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span>Get a Free Solar Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20a%20solar%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/80 text-emerald-300 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Our Solar Team</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="/" onClick={(e) => handleNav(e, '/')}>
              <HashimLogo size="lg" variant="full" theme="dark" />
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mt-2">
              <strong className="text-white">Hashim Engineering</strong> is an engineering-led solar energy solutions provider in Pakistan. Delivering precision-designed turnkey systems for residential, commercial, industrial, and agricultural pumping applications.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#c51e28]" />
                <a href="tel:+923344319157" className="font-mono text-white hover:text-[#c51e28] transition-colors">+92 334 4319157</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#c51e28]" />
                <a href="mailto:info@hashim-engineering.com" className="text-white hover:text-[#c51e28] transition-colors font-medium">info@hashim-engineering.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#c51e28] shrink-0 mt-0.5" />
                <span>Lahore EPC Headquarters &amp; Regional Project Support Centers across Punjab &amp; Sindh</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solar Solutions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Solar Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">Industrial Solar</a></li>
              <li><a href="/agriculture-solar" onClick={(e) => handleNav(e, '/agriculture-solar')} className="hover:text-white transition-colors text-rose-300 font-medium">Agriculture Solar &amp; Tube Wells</a></li>
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">On-Grid Solar Systems</a></li>
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">Hybrid Solar Systems</a></li>
              <li><a href="/solutions" onClick={(e) => handleNav(e, '/solutions')} className="hover:text-white transition-colors">Off-Grid Solar Systems</a></li>
              <li><a href="/agriculture-solar" onClick={(e) => handleNav(e, '/agriculture-solar')} className="hover:text-white transition-colors">Solar Water Pumping</a></li>
            </ul>
          </div>

          {/* Col 3: Products & Equipment */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Products &amp; Equipment
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">N-Type TOPCon Panels</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">Solar Inverters &amp; VFDs</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">LiFePO4 Lithium Batteries</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">HDG Mounting Structures</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">Pure Copper Solar Cables</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">DC/AC Protection &amp; SPDs</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">Lightning &amp; Earthing Pits</a></li>
              <li><a href="/products" onClick={(e) => handleNav(e, '/products')} className="hover:text-white transition-colors">Smart Telemetry Monitoring</a></li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company &amp; Engineering
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/" onClick={(e) => handleNav(e, '/')} className="hover:text-white transition-colors">About Hashim Engineering</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')} className="hover:text-white transition-colors">Engineering &amp; EPC Services</a></li>
              <li><a href="/calculator" onClick={(e) => handleNav(e, '/calculator')} className="hover:text-white transition-colors text-emerald-400 font-semibold">Solar Sizing Calculator</a></li>
              <li><a href="/#faq" onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'faq';
                const el = document.getElementById('faq');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else handleNav(e, '/');
              }} className="hover:text-white transition-colors">Frequently Asked Questions (FAQ)</a></li>
              <li><a href="/projects" onClick={(e) => handleNav(e, '/projects')} className="hover:text-white transition-colors">Completed Projects</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')} className="hover:text-white transition-colors">Contact Regional Desks</a></li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosure & Legal */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Regulatory Framework Notice:</strong> Hashim Engineering executes grid-tied distributed generation under the provisions of the National Electric Power Regulatory Authority (NEPRA) Prosumer Regulations 2026 and current utility DISCO interconnection codes. Export parameters and net billing credits are subject to prevailing utility DISCO policies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 text-slate-500">
            <div>
              © {new Date().getFullYear()} Hashim Engineering. All rights reserved. Powering Pakistan with Renewable Engineering.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>PEC &amp; Certified Solar Engineers</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
