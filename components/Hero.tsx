import React from 'react';
import { PhoneIcon, MailIcon, WhatsAppIcon } from './IconComponents';
import { useActiveImage } from '../imageStore';

const Hero: React.FC = () => {
  const heroBg = useActiveImage('hero_background');

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
            <p className="text-sm font-light tracking-widest uppercase">Complete Home Management, Crafted for London Living.</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold my-4 leading-tight">
              A-Z Home Management You Can Trust
            </h1>
            <p className="text-base lg:text-lg text-gray-200 mb-8">
              From maintenance to chauffeuring – we handle your property as if it were our own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-[#E2B344] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
                Request Consultation
              </a>
              <a href="tel:+442035042429" className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center">
                Call Now
              </a>
            </div>
          </div>
          
          {/* Right Content - Contact Info */}
          <div className="lg:w-auto mt-8 lg:mt-0">
            <div className="bg-black bg-opacity-40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-5 min-w-[280px]">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">Office</span>
                  <a href="tel:+442035042429" className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">+44(0)2035042429</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <WhatsAppIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">WhatsApp</span>
                  <a href="https://wa.me/447471066665" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">+44(0)7471066665</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-5 w-5 text-[#E2B344] flex-shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-60">Email</span>
                  <a href="mailto:info@alonzhomes.com" className="hover:text-[#E2B344] transition-colors font-semibold text-sm sm:text-base">info@alonzhomes.com</a>
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