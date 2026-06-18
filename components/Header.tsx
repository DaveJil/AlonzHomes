import React, { useState, useEffect } from 'react';
import { LogoIcon, ChevronDownIcon, MenuIcon, CloseIcon } from './IconComponents';

interface HeaderProps {
  currentView?: 'home' | 'gallery';
  onNavigateHomeAndScroll?: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView = 'home', onNavigateHomeAndScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    if (link.href.startsWith('#') && link.href !== '#gallery') {
      const sectionId = link.href.slice(1);
      if (currentView === 'gallery') {
        e.preventDefault();
        if (onNavigateHomeAndScroll) {
          onNavigateHomeAndScroll(sectionId);
        } else {
          window.location.hash = link.href;
        }
      }
    }
  };

  const NavMenu = ({ isMobile }: { isMobile: boolean }) => (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      {navLinks.map((link) => {
        const isCurrentViewGallery = currentView === 'gallery';
        const isGalleryLink = link.name === 'Gallery';
        const isHomeLink = link.name === 'Home';
        const isActive = (isGalleryLink && isCurrentViewGallery) || 
                         (isHomeLink && !isCurrentViewGallery && (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/'));

        return (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => handleLinkClick(e, link)}
            className={`flex items-center text-sm transition-all duration-300 font-semibold ${
              isActive 
                ? 'text-[#E2B344] font-bold border-b-2 border-[#E2B344] pb-1' 
                : 'text-white hover:text-[#E2B344]'
            }`}
          >
            {link.name}
            {link.hasDropdown && <ChevronDownIcon className="h-4 w-4 ml-1" />}
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen || currentView === 'gallery' ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="cursor-pointer" aria-label="Alonz Home Page" onClick={() => { if (onNavigateHomeAndScroll) onNavigateHomeAndScroll(''); }}>
            <LogoIcon className="h-6" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavMenu isMobile={false} />
          </div>

          <div className="flex items-center">
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, { name: 'Contact us', href: '#contact' })}
              className="hidden md:block bg-[#E2B344] text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Request Consultation
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-4 p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pt-2 pb-4 space-y-2">
          <NavMenu isMobile={true} />
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, { name: 'Contact us', href: '#contact' })}
            className="block w-full text-center bg-[#E2B344] text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors mt-4"
          >
            Request Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;