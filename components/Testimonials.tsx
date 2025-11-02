import React from 'react';
import { QuoteIcon } from './IconComponents';

const testimonials = [
  {
    quote: "Alonz Homes made my overseas property completely stress-free. The professional care, monthly reports and fast response times are worth every penny.",
    author: "Client, Kensington"
  },
  {
    quote: "The renovation project was handled with utmost professionalism. The quality of work exceeded our expectations, and it was all completed on schedule.",
    author: "J. & S. Williams, Chelsea"
  },
  {
    quote: "Their chauffeuring service is impeccable. Always on time, courteous, and the vehicles are pristine. It's the only service I trust in London.",
    author: "A. Chen, Mayfair"
  },
  {
    quote: "Finding a reliable cleaning service for a high-end property is difficult. Alonz Homes delivers consistent, high-quality results every single time.",
    author: "Ms. Dubois, Notting Hill"
  },
  {
    quote: "The team's discretion and attention to detail are second to none. They manage our home as if it were their own. Highly recommended.",
    author: "Lord M., Belgravia"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consultation Banner */}
        <div 
          className="relative rounded-lg overflow-hidden p-10 flex flex-col md:flex-row items-center justify-between bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Unsure which package <br /> suits your property best?
            </h3>
          </div>
          <div className="relative z-10 mt-6 md:mt-0">
            <a href="#contact" className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-center">
              Request a consultation
            </a>
          </div>
        </div>

        {/* Testimonial Section */}
        <div 
          className="mt-20 sm:mt-24 relative py-20 rounded-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Trusted by Homeowners Across London</h2>
            <div className="flex overflow-x-auto space-x-8 pb-8 hide-scrollbar">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-80 md:w-96 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-white text-left transform hover:-translate-y-2 transition-transform duration-300">
                  <QuoteIcon className="w-10 h-8 text-[#E2B344]" />
                  <blockquote className="mt-6">
                    <p className="text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 font-semibold">
                    - {testimonial.author}
                  </figcaption>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;