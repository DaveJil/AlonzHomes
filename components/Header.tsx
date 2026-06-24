import React, { useState, useEffect } from 'react';
import { LogoIcon, ChevronDownIcon, MenuIcon, CloseIcon } from './IconComponents';

interface HeaderProps {
  currentView?: string;
  onNavigateHomeAndScroll?: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView = 'home', onNavigateHomeAndScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

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

  const serviceDropdownItems = [
    { name: 'Chauffeuring', href: '#services/chauffeuring' },
    { name: 'Interior Design', href: '#services/interior-design' },
    { name: 'Property Management', href: '#services/property-management' },
    { name: 'Cleaning Services', href: '#services/cleaning-services' },
    { name: 'Construction', href: '#services/construction' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsDropdownOpen(false);

    const homeSections = ['testimonials']; // Services is now direct route pages or home sections
    const targetSection = link.href.startsWith('#') ? link.href.slice(1) : '';

    if (homeSections.includes(targetSection)) {
      if (currentView !== 'home') {
        e.preventDefault();
        if (onNavigateHomeAndScroll) {
          onNavigateHomeAndScroll(targetSection);
        } else {
          window.location.hash = link.href;
        }
      }
    }
  };

  const NavMenu = ({ isMobile }: { isMobile: boolean }) => (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      {navLinks.map((link) => {
        let isActive = false;
        if (link.name === 'Home') {
          isActive = currentView === 'home' && (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/');
        } else if (link.name === 'About') {
          isActive = currentView === 'about';
        } else if (link.name === 'Gallery') {
          isActive = currentView === 'gallery';
        } else if (link.name === 'Contact us') {
          isActive = currentView === 'contact';
        } else if (link.name === 'Services') {
          isActive = ['chauffeuring', 'interiordesign', 'propertymanagement', 'cleaning', 'construction'].includes(currentView);
        }

        if (link.hasDropdown) {
          if (isMobile) {
            return (
              <div key={link.name} className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`flex items-center justify-between text-sm transition-all duration-300 font-semibold w-full text-left py-1 ${
                    isActive ? 'text-[#E2B344]' : 'text-white hover:text-[#E2B344]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileDropdownOpen && (
                  <div className="pl-4 flex flex-col space-y-2 border-l border-zinc-800 ml-1">
                    {serviceDropdownItems.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        onClick={(e) => {
                          setIsMenuOpen(false);
                          setIsMobileDropdownOpen(false);
                        }}
                        className="text-xs text-zinc-400 hover:text-[#E2B344] font-medium py-1 transition-colors"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a 
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent direct scroll on dropdown parent clicked
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className={`flex items-center text-sm transition-all duration-300 font-semibold pb-1 cursor-pointer select-none ${
                    isActive 
                      ? 'text-[#E2B344] font-bold border-b-2 border-[#E2B344]' 
                      : 'text-white hover:text-[#E2B344]'
                  }`}
                >
                  {link.name}
                  <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </a>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-zinc-950 border border-zinc-850 rounded-xl py-2 shadow-2xl">
                      {serviceDropdownItems.map((subLink) => (
                        <a
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsDropdownOpen(false)}
                          className="block px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-[#E2B344] hover:bg-zinc-900 transition-colors"
                        >
                          {subLink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }
        }

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
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen || currentView !== 'home' ? 'bg-black text-white border-b border-zinc-900' : 'bg-transparent text-white'}`}>
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