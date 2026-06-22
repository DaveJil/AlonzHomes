import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import AdminPage from './components/AdminPage';
import { WhatsAppIcon } from './components/IconComponents';
import { useActiveText } from './textStore';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'about' | 'pricing' | 'contact' | 'admin'>('home');
  const [scrollToId, setScrollToId] = useState<string | null>(null);
  const whatsappNum = useActiveText('hero_whatsapp_num');
  const cleanWhatsApp = whatsappNum.replace(/[^\d+]/g, '');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#gallery' || hash === '#projects-page') {
        setCurrentView('gallery');
        window.scrollTo(0, 0);
      } else if (hash === '#about' || hash === '#about-page') {
        setCurrentView('about');
        window.scrollTo(0, 0);
      } else if (hash === '#pricing' || hash === '#pricing-page') {
        setCurrentView('pricing');
        window.scrollTo(0, 0);
      } else if (hash === '#contact' || hash === '#contact-page') {
        setCurrentView('contact');
        window.scrollTo(0, 0);
      } else if (hash === '#admin' || hash === '#admin-panel') {
        setCurrentView('admin');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
        if (hash && hash !== '#' && hash !== '#/') {
          setScrollToId(hash.slice(1));
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (currentView === 'home' && scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        // Delay slightly for React to render and mount home sections fully
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setScrollToId(null);
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [currentView, scrollToId]);

  const handleNavigateHomeAndScroll = (sectionId: string) => {
    setCurrentView('home');
    if (sectionId) {
      setScrollToId(sectionId);
      window.location.hash = `#${sectionId}`;
    } else {
      window.location.hash = '#';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    window.location.hash = '#contact';
  };

  return (
    <div className="bg-white">
      {currentView !== 'admin' && (
        <Header 
          currentView={currentView} 
          onNavigateHomeAndScroll={handleNavigateHomeAndScroll} 
        />
      )}
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Services />
            <About />
            <Projects />
            <Packages />
            <Testimonials />
            <Contact />
          </>
        )}
        {currentView === 'gallery' && (
          <ProjectsPage 
            onOpenConsultation={handleOpenConsultation} 
          />
        )}
        {currentView === 'about' && (
          <AboutPage 
            onNavigateHome={() => handleNavigateHomeAndScroll('')}
            onNavigateContact={() => { window.location.hash = '#contact'; }}
          />
        )}
        {currentView === 'pricing' && (
          <PricingPage 
            onNavigateContact={() => { window.location.hash = '#contact'; }}
          />
        )}
        {currentView === 'contact' && (
          <ContactPage 
            onNavigateHome={() => handleNavigateHomeAndScroll('')}
          />
        )}
        {currentView === 'admin' && (
          <AdminPage 
            onNavigateHome={() => handleNavigateHomeAndScroll('')}
          />
        )}
      </main>
      {currentView !== 'admin' && <Footer />}
      <a
        href={`https://wa.me/${cleanWhatsApp.replace('+', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-transform duration-300 ease-in-out hover:scale-110"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
};

export default App;
