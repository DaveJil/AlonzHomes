import React from 'react';
import { CheckIcon } from './IconComponents';

const benefits = [
    { text: "One Point of Contact – no more juggling contractors." },
    { text: "Trusted Partners – vetted, insured, and supervised by our team." },
    { text: "Transparent Reporting – monthly updates and clear financials." },
    { text: "Tailored Approach – every service is designed around your property." }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-y border-[#E2B344]">
          <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-6 md:mb-0">
            One company. Every service. <br/> Complete peace of mind.
          </h3>
          <a href="#contact" className="bg-[#E2B344] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
            Request Consultation
          </a>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 sm:mt-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 md:h-full bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop" 
              alt="Modern home interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Homeowners Choose Alonz</h2>
            <p className="text-gray-600 mb-8">
              At Alonz Homes, we go beyond maintenance – we offer peace of mind.
              With years of experience managing London's most exclusive properties, our team handles every detail discreetly and efficiently, so you can focus on what matters most.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-[#E2B344]" />
                  </div>
                  <p className="ml-3 text-gray-800 font-semibold">{benefit.text}</p>
                </li>
              ))}
            </ul>
             <a href="#" className="mt-10 inline-block border border-gray-800 text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all text-center">
                Discover Our Process
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
