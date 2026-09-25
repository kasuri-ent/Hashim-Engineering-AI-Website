import React, { useState } from 'react';
import { HashimLogo } from './HashimLogo';
import { Menu, X, Phone, FileUp, ChevronRight, Home, Zap, Tractor, Cpu, Wrench, FolderGit2, Calculator, Mail, Sparkles, Mic, MessageSquare } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenQuoteModal: (type?: string) => void;
  onOpenAiAssistant?: (mode?: 'chat' | 'voice') => void;
  isVoiceActivationEnabled?: boolean;
  onToggleVoiceActivation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPath, 
  onNavigate, 
  onOpenQuoteModal, 
  onOpenAiAssistant,
  isVoiceActivationEnabled = false,
  onToggleVoiceActivation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', path: '/solutions', icon: Zap },
    { label: 'Agriculture Solar', path: '/agriculture-solar', icon: Tractor },
    { label: 'Products', path: '/products', icon: Cpu },
    { label: 'Services', path: '/services', icon: Wrench },
    { label: 'Projects', path: '/projects', icon: FolderGit2 },
    { label: 'Calculator', path: '/calculator', icon: Calculator },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo - Returns to Home */}
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c51e28] rounded"
          >
            <HashimLogo size="md" variant="full" theme="dark" />
          </a>

          {/* Clean Text Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`whitespace-nowrap transition-colors relative py-1 hover:text-white ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c51e28] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Primary Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20system."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#c51e28] hover:bg-[#a81922] rounded-lg shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <FileUp className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Mobile AI Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenAiAssistant && onOpenAiAssistant('voice')}
              className="px-2 py-1 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 border border-cyan-400/40 rounded-md flex items-center gap-1 shadow-sm"
              title="Start Voice Call"
            >
              <Mic className="w-3 h-3 text-cyan-300" />
              <span>AI Voice</span>
            </button>
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-white bg-[#c51e28] rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-[#0b0f17]/98 backdrop-blur-lg border-b border-slate-800 xl:hidden p-6 overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-800">
            <HashimLogo size="sm" variant="full" theme="dark" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#c51e28] font-bold">
              Engineering Menu
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm font-medium text-slate-200">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                currentPath === '/' ? 'bg-[#c51e28] text-white' : 'hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>

            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    isActive ? 'bg-[#c51e28] text-white' : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAiAssistant) onOpenAiAssistant('voice');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 border border-cyan-400/40 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Mic className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
                <span>Start AI Voice Consultation</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAiAssistant) onOpenAiAssistant('chat');
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-indigo-900/60 text-slate-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Chat with Gemini Solar Advisor</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-xs font-semibold text-white bg-[#c51e28] rounded-lg"
              >
                Request Custom Solar Quote
              </button>

              <a
                href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20inquire%20about%20a%20solar%20system."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp (+92 334 4319157)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
