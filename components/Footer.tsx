import React from 'react';
import { LogoIcon, PhoneIcon, MailIcon } from './IconComponents';

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
            <p className="mt-4 text-sm text-gray-400">&copy; {new Date().getFullYear()} Alonz Homes Ltd.</p>
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

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" />
                  <a href="tel:+447379761333" className="hover:text-white">+447379761333</a>
              </div>
              <div className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4" />
                  <a href="mailto:info@alonzhomes.com" className="hover:text-white">info@alonzhomes.com</a>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;