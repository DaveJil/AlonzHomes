import React from 'react';
import { LogoIcon, PhoneIcon, MailIcon, WhatsAppIcon } from './IconComponents';

const Footer: React.FC = () => {
  const links = {
    services: ['Management', 'Construction', 'Cleaning', 'Chauffeuring'],
    legal: ['Terms of use', 'Privacy Policy'],
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="#" aria-label="Alonz Home Page">
              <LogoIcon className="h-6" />
            </a>
            <p className="mt-4 text-xs text-gray-400 leading-relaxed font-sans">
              Head Office:<br />
              9 Court parade, East lane,<br />
              North Wembley, London,<br />
              HA0 3HU, UK
            </p>
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500 font-mono">&copy; {new Date().getFullYear()} Alonz Homes Ltd.</span>
              <span className="text-gray-600 font-mono text-xs">|</span>
              <a href="#admin" className="text-xs text-stone-500 hover:text-[#E2B344] transition-colors font-mono uppercase tracking-widest hover:underline">Staff Admin</a>
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-start-3">
            <ul className="space-y-2">
              {links.services.map(link => (
                <li key={link}><a href="#" className="hover:text-[#E2B344] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
             <ul className="space-y-2">
              {links.legal.map(link => (
                <li key={link}><a href="#" className="hover:text-[#E2B344] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-[#E2B344]" />
                  <span>Office: <a href="tel:+442035042429" className="hover:text-white transition-colors">+44(0)2035042429</a></span>
              </div>
              <div className="flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4 text-[#E2B344]" />
                  <span>WhatsApp: <a href="https://wa.me/447471066665" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+44(0)747 10 66665</a></span>
              </div>
              <div className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-[#E2B344]" />
                  <a href="mailto:info@alonzhomes.com" className="hover:text-white transition-colors">info@alonzhomes.com</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;