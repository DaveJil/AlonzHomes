import React from 'react';
import { PhoneIcon, MailIcon } from './IconComponents';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop')" }}
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
              <a href="tel:+447379761333" className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center">
                Call Now
              </a>
            </div>
          </div>
          
          {/* Right Content - Contact Info */}
          <div className="lg:w-auto mt-8 lg:mt-0">
            <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-white/20 space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-[#E2B344]" />
                <a href="tel:+447379761333" className="hover:text-[#E2B344] transition-colors">+447379761333</a>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-6 w-6 text-[#E2B344]" />
                <a href="mailto:info@alonzhomes.com" className="hover:text-[#E2B344] transition-colors">info@alonzhomes.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;