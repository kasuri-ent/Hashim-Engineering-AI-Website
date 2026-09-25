/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BillUploadModal } from './components/BillUploadModal';
import { GeminiSolarAssistant } from './components/GeminiSolarAssistant';

import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AgricultureSolarPage } from './pages/AgricultureSolarPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';

import { Phone, ArrowUp, Zap, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p === '' ? '/' : p;
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('Residential Solar');

  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [aiAssistantMode, setAiAssistantMode] = useState<'chat' | 'voice'>('chat');
  const [isVoiceActivationEnabled, setIsVoiceActivationEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        return localStorage.getItem('hashim_ai_voice_activation') === 'true';
      } catch {
        return false;
      }
    }
    return false;
  });

  const handleToggleVoiceActivation = (enabled?: boolean) => {
    setIsVoiceActivationEnabled((prev) => {
      const next = typeof enabled === 'boolean' ? enabled : !prev;
      try {
        localStorage.setItem('hashim_ai_voice_activation', String(next));
      } catch {}
      return next;
    });
  };

  const handleOpenAiAssistant = (mode?: 'chat' | 'voice') => {
    const targetMode = mode || (isVoiceActivationEnabled ? 'voice' : 'chat');
    setAiAssistantMode(targetMode);
    setIsAiAssistantOpen(true);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenQuoteModal = (topic?: string) => {
    if (topic) {
      setModalTopic(topic);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select page content based on currentPath
  const renderCurrentPage = () => {
    const normalizedPath = currentPath.replace(/\/$/, '') || '/';

    switch (normalizedPath) {
      case '/solutions':
        return <SolutionsPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/agriculture-solar':
        return <AgricultureSolarPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/products':
        return <ProductsPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/services':
        return <ServicesPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/projects':
        return <ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/calculator':
        return <CalculatorPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/contact':
        return <ContactPage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
      case '/':
      default:
        return <HomePage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} onOpenAiAssistant={handleOpenAiAssistant} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-[#c51e28] selection:text-white relative">
      
      {/* 1. Header with Active Navigation State & AI Assistant Launcher */}
      <Header 
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenAiAssistant={handleOpenAiAssistant}
        isVoiceActivationEnabled={isVoiceActivationEnabled}
        onToggleVoiceActivation={handleToggleVoiceActivation}
      />

      {/* 2. Active Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 3. Footer */}
      <Footer 
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigate={navigate}
        onOpenAiAssistant={handleOpenAiAssistant}
      />

      {/* 4. Instant Solar Quote Modal */}
      <BillUploadModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialType={modalTopic}
      />

      {/* 5. Prominent Gemini AI Solar Chatbot & Live Voice Conversations (Visible Everywhere) */}
      <GeminiSolarAssistant
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
        initialMode={aiAssistantMode}
        isVoiceActivationEnabled={isVoiceActivationEnabled}
        onToggleVoiceActivation={handleToggleVoiceActivation}
      />

      {/* 6. Persistent Floating WhatsApp & Utility Stack */}
      <div className="fixed bottom-24 sm:bottom-6 left-auto right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
        {/* Floating AI Assistant Trigger */}
        <button
          onClick={() => handleOpenAiAssistant()}
          className="group flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-[11px] font-bold rounded-full shadow-xl border border-cyan-400/40 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 backdrop-blur-md"
          title="Open Solar AI Advisor"
          aria-label="Solar AI Advisor"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping" />
          </div>
          <span className="font-semibold tracking-wide">Solar AI</span>
          <span className="hidden sm:inline text-[9px] px-1.5 py-0.5 rounded-full bg-black/30 text-cyan-200 border border-cyan-300/30 font-mono">
            3.8
          </span>
        </button>

        <a
          href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20consult%20regarding%20a%20solar%20system."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
          aria-label="Chat on WhatsApp with Hashim Engineering (+92 334 4319157)"
        >
          <div className="relative">
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" />
          </div>
          <span className="hidden md:inline font-mono">WhatsApp Helpline</span>
        </a>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md"
          title="Scroll back to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
