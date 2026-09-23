/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BillUploadModal } from './components/BillUploadModal';

import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AgricultureSolarPage } from './pages/AgricultureSolarPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { ContactPage } from './pages/ContactPage';

import { Phone, ArrowUp, Zap } from 'lucide-react';

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
        return <HomePage onOpenQuoteModal={handleOpenQuoteModal} onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-[#c51e28] selection:text-white relative">
      
      {/* 1. Header with Active Navigation State */}
      <Header 
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenQuoteModal={handleOpenQuoteModal} 
      />

      {/* 2. Active Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* 3. Footer */}
      <Footer 
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigate={navigate}
      />

      {/* 4. Instant Solar Quote Modal */}
      <BillUploadModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialType={modalTopic}
      />

      {/* 5. Persistent Floating WhatsApp Helpline Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href="https://wa.me/923344319157?text=Assalam-o-Alaikum%20Hashim%20Engineering%20team,%20I%20would%20like%20to%20consult%20regarding%20a%20solar%20system."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-2xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
          aria-label="Chat on WhatsApp with Hashim Engineering (+92 334 4319157)"
        >
          <div className="relative">
            <Phone className="w-4 h-4 fill-current animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-300 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline font-mono">WhatsApp Solar Engineer</span>
        </a>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 backdrop-blur-md transition-all shadow-md"
          title="Scroll back to top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
