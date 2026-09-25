import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { AboutSection } from '../components/AboutSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { AgricultureSolarFeature } from '../components/AgricultureSolarFeature';
import { ProductsSection } from '../components/ProductsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SolarCalculator } from '../components/SolarCalculator';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { BlogGuidesSection } from '../components/BlogGuidesSection';
import { ContactSection } from '../components/ContactSection';
import { updatePageSeo } from '../utils/seo';

interface HomePageProps {
  onOpenQuoteModal: (type?: string) => void;
  onNavigate: (path: string) => void;
  onOpenAiAssistant?: (mode?: 'chat' | 'voice') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal, onNavigate, onOpenAiAssistant }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Solar Company in Pakistan | Solar Installation | Hashim Engineering',
      description: 'Hashim Engineering provides residential, commercial, industrial and agriculture solar solutions in Pakistan, including solar installation, Tier-1 panels, inverters, batteries and solar water pumping systems.',
      canonicalPath: '/',
      breadcrumbs: [
        { name: 'Home', path: '/' }
      ],
    });
  }, []);

  return (
    <>
      {/* 1. Hero Section */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenAiAssistant={onOpenAiAssistant} />

      {/* 2. Homepage Trust Bar */}
      <TrustBar />

      {/* 3. About Hashim Engineering */}
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 4. Solar Solutions for Every Application */}
      <SolutionsSection onSelectSolution={onOpenQuoteModal} />

      {/* 5. Agriculture Solar Flagship Showcase & Tube Wells */}
      <AgricultureSolarFeature onOpenQuoteModal={onOpenQuoteModal} />

      {/* 6. Products & Equipment */}
      <ProductsSection onInquireProduct={onOpenQuoteModal} />

      {/* 7. Solar Installation & Engineering Services */}
      <ServicesSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 8. Completed Projects & Case Studies */}
      <ProjectsSection onPlanSimilarProject={onOpenQuoteModal} />

      {/* 9. Interactive Solar Requirements Calculator */}
      <SolarCalculator onOpenQuoteModal={onOpenQuoteModal} />

      {/* 10. Customer Proof & Testimonials */}
      <TestimonialsSection />

      {/* 11. Technical FAQ Library */}
      <FaqSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 12. Solar Guides & Blog Knowledge Base */}
      <BlogGuidesSection />

      {/* 13. Contact & Regional Engineering Hubs */}
      <ContactSection onOpenQuoteModal={onOpenQuoteModal} />
    </>
  );
};
