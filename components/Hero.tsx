import React from 'react';
import { PhoneIcon, MailIcon, WhatsAppIcon } from './IconComponents';
import { useActiveImage } from '../imageStore';
import { useActiveText } from '../textStore';

const Hero: React.FC = () => {
  const heroBg = useActiveImage('hero_background');

  const tagline = useActiveText('hero_tagline');
  const title = useActiveText('hero_title');
  const sub = useActiveText('hero_sub');
  const ctaConsult = useActiveText('hero_cta_consult');
  const ctaCall = useActiveText('hero_cta_call');
  const officePhone = useActiveText('hero_office_phone');
  const whatsappNum = useActiveText('hero_whatsapp_num');
  const emailAddress = useActiveText('hero_email_address');

  // Helper to remove formatting for href="tel:..." or href="https://wa.me/..."
  const cleanPhone = officePhone.replace(/[^\d+]/g, '');
  const cleanWhatsApp = whatsappNum.replace(/[^\d+]/g, '');

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-light tracking-widest uppercase">{tagline}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold my-4 leading-tight">
              {title}
            </h1>
            <p className="text-base lg:text-lg text-gray-200 mb-8 whitespace-pre-line">
              {sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-[#E2B344] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
                {ctaConsult}
              </a>
              <a href={`tel:${cleanPhone}`} className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center">
                {ctaCall}
              </a>
            </div>
          </div>
          
          {/* Right Content - Contact Info */}
          <div className="lg:w-auto mt-8 lg:mt-0">
            <div className="bg-black bg-opacity-40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-5 min-w-[280px]">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 font-bold">Office</span>
                  <a href={`tel:${cleanPhone}`} className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">{officePhone}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <WhatsAppIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 font-bold">WhatsApp</span>
                  <a href={`https://wa.me/${cleanWhatsApp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">{whatsappNum}</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60 font-bold">Email</span>
                  <a href={`mailto:${emailAddress}`} className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">{emailAddress}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;