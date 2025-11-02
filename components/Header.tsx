import React, { useState, useEffect } from 'react';
import { LogoIcon, ChevronDownIcon, MenuIcon, CloseIcon } from './IconComponents';

const Header: React.FC = () => {
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
    { name: 'Gallery', href: '#projects' },
    { name: 'Contact us', href: '#contact' },
  ];

  const NavMenu = ({ isMobile }: { isMobile: boolean }) => (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex items-center space-x-8'}`}>
      {navLinks.map((link) => (
        <a key={link.name} href={link.href} className="flex items-center text-sm hover:text-[#E2B344] transition-colors duration-300">
          {link.name}
          {link.hasDropdown && <ChevronDownIcon className="h-4 w-4 ml-1" />}
        </a>
      ))}
    </nav>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="Alonz Home Page">
            <LogoIcon className="h-6" />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <NavMenu isMobile={false} />
          </div>

          <div className="flex items-center">
            <a href="#contact" className="hidden md:block bg-[#E2B344] text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
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
           <a href="#contact" className="block w-full text-center bg-[#E2B344] text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors mt-4">
              Request Consultation
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;