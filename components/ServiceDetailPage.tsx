import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ArrowLeft, Home, Sparkles, Hammer, ShieldCheck } from 'lucide-react';
import { projectsData } from '../types';

interface ServiceDetailPageProps {
  serviceType: 'interiordesign' | 'propertymanagement' | 'cleaning' | 'construction';
  onNavigateContact: () => void;
  onNavigateHome: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceType, onNavigateContact, onNavigateHome }) => {
  // Service configuration mapping
  const serviceConfigs = {
    interiordesign: {
      title: 'Interior Design & Luxury Staging',
      tagline: 'Refining spaces into personal masterpieces.',
      bannerImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop',
      icon: <Sparkles className="w-8 h-8 text-[#B98F32]" />,
      desc: 'At Alonz Homes, our interior design team blends aesthetic heritage with contemporary elegance. We manage the entire pipeline – from spatial architectural conceptualisation, premium Italian furniture sourcing, to final custom visual staging and lighting coordination.',
      bullets: [
        'Custom bespoke joinery & timber panel curation',
        'Sourcing of rare stone, marbles, and heritage textiles',
        'High-contrast luxury staging for sales & rentals',
        'Spatial ergonomics & architectural lighting alignment',
        'Turnkey solutions for international estate owners'
      ],
      filterKey: 'Interior Design'
    },
    propertymanagement: {
      title: 'Property Management & Keyholding',
      tagline: 'Rigorous oversight. Uncompromised discretion.',
      bannerImg: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2000&auto=format&fit=crop',
      icon: <ShieldCheck className="w-8 h-8 text-[#B98F32]" />,
      desc: 'Complete estate custodianship tailored for London’s premium boroughs. Our management service provides estate owners with an absolute single point of contact, 24/7 alarm keyholding, detailed monthly accounting ledgers, and response-vetted maintenance coordination.',
      bullets: [
        'Dedicated 24/7 keyholding & emergency alarm attendance',
        'Proactive periodic maintenance inspections with photo audits',
        'Transparent digital client ledgers updated to the single penny',
        'Sovereign tenant relations & rent reconciliation',
        'Vacant property winterisation & regular health checks'
      ],
      filterKey: 'Property Setup / Access Management'
    },
    cleaning: {
      title: 'Elite Deep Cleaning & Housekeeping',
      tagline: 'Precision cleanliness to five-star standards.',
      bannerImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      icon: <Sparkles className="w-8 h-8 text-[#B98F32]" />,
      desc: 'More than a basic cleaning, we deliver absolute restorative sanitation. Our specialized housekeeping specialists handle delicate surfaces (statuary marble, herringbone timber, antique brass fixtures) with extreme care, using ecological premium products.',
      bullets: [
        'Post-construction restorative deep cleaning',
        'Specialist marble, granite, and hardwood treatment care',
        'Pre-occupancy pristine sanitisation and linen staging',
        'Regular premium housekeeping visits (daily, weekly, bi-weekly)',
        'Vetted, insured, and background-cleared professionals'
      ],
      filterKey: 'Deep Cleaning'
    },
    construction: {
      title: 'Construction, Renovation & Refurbishment',
      tagline: 'Elite structural execution. Zero-compromise finish.',
      bannerImg: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop',
      icon: <Hammer className="w-8 h-8 text-[#B98F32]" />,
      desc: 'Our construction division provides full-spectrum renovation from Grade-II listed conservation refurbishment to modern steel and glass architectural additions. Our project managers oversee scheduling, licensing, and subcontractor vetting for absolute precision.',
      bullets: [
        'Grade-II period listed structural restorations',
        'Open-plan living integrations & structural wall removals',
        'Premium micro-cement and luxury tiling installations',
        'Smart-home automation and climate-control ducting',
        'Dedicated site supervision & detailed progress reports'
      ],
      filterKey: 'Construction & Renovation'
    }
  };

  const activeConfig = serviceConfigs[serviceType];

  // Dynamically filter matching real completed projects for this service!
  const relatedProjects = projectsData.filter(project => 
    project.services.some(srv => srv === activeConfig.filterKey)
  );

  return (
    <div id={`${serviceType}-detail-page`} className="bg-[#FAF9F6] text-[#111111] min-h-screen pt-20">
      
      {/* Dynamic Cover Banner */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden select-none">
        <div className="absolute inset-0">
          <img 
            src={activeConfig.bannerImg} 
            alt={activeConfig.title} 
            className="w-full h-full object-cover brightness-[0.70] scale-102 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-black/10" />
        </div>
      </section>

      {/* Main Core Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-20">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/60 shadow-xl rounded-3xl p-8 sm:p-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-2 text-stone-500 hover:text-stone-950 font-semibold text-xs uppercase tracking-widest transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#E2B344]" /> Back to Home
            </button>
            <div className="flex items-center gap-3">
              {activeConfig.icon}
              <span className="text-[10px] font-mono tracking-widest text-[#B98F32] font-bold uppercase bg-[#E2B344]/10 px-3 py-1 rounded-full">
                Alonz Signature Series
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4.5xl font-extrabold font-sans tracking-tight text-stone-900 leading-tight">
            {activeConfig.title}
          </h1>
          <p className="mt-2 text-[#B98F32] font-mono font-bold text-xs uppercase tracking-widest">
            {activeConfig.tagline}
          </p>
          
          <div className="w-12 h-1 bg-[#E2B344] rounded-full mt-6" />

          {/* Description */}
          <div className="mt-8 text-stone-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="whitespace-pre-line">{activeConfig.desc}</p>
          </div>

          {/* What we deliver bullet list */}
          <div className="mt-12 border-t border-stone-100 pt-10">
            <h3 className="text-base font-bold uppercase tracking-widest text-stone-800 font-sans mb-6">Our Capabilities & Standards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeConfig.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#B98F32] mt-0.5 flex-shrink-0" />
                  <span className="text-stone-700 text-xs sm:text-sm leading-relaxed font-medium">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action trigger button */}
          <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <h4 className="font-bold text-stone-900 text-sm">Need a bespoke estimate?</h4>
              <p className="text-stone-500 text-xs">Book a call with Bilal Jammal to discuss your estate's needs.</p>
            </div>
            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto bg-stone-900 hover:bg-[#E2B344] hover:text-black text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm flex items-center justify-center gap-2"
            >
              Request Consultation <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Dynamic Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-stone-50 border-t border-stone-150">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-stone-400 font-bold text-[10px] font-mono tracking-widest uppercase">Verified Portfolio Performance</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-stone-900 mt-2">
                Completed Estates Featuring This Service
              </h2>
              <div className="w-12 h-1 bg-[#E2B344] rounded-full mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-white border border-stone-200/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase">
                      {project.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-stone-900 text-base sm:text-lg mb-2 font-sans line-clamp-1">{project.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed line-clamp-3 mb-4">{project.description}</p>
                    
                    <div className="flex items-center justify-between border-t border-stone-100 pt-4 text-xs font-mono">
                      <span className="text-stone-400">Duration: <strong className="text-stone-700">{project.duration}</strong></span>
                      <a 
                        href={`#gallery`} 
                        className="text-[#B98F32] font-semibold hover:underline flex items-center gap-1"
                      >
                        View Project <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};

export default ServiceDetailPage;
