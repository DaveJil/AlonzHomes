import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Compass, Shield, Users, ArrowRight, Eye, Sparkles, ChevronRight, MapPin, Award, HeartHandshake } from 'lucide-react';
import bilalHeadshot from '../src/assets/images/bilal_jammal_headshot_1781857868698.jpg';
import { useActiveImage } from '../imageStore';
import { useActiveText } from '../textStore';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onNavigateContact }) => {
  const [activeValue, setActiveValue] = useState<number>(0);

  const storyImage = useActiveImage('about_page_story');
  const philosophyImage = useActiveImage('about_page_philosophy');
  const standardsImage = useActiveImage('about_page_standards');
  const materialsImage = useActiveImage('about_page_materials');
  const activeBilalHeadshot = useActiveImage('bilal_headshot', bilalHeadshot);

  const storyHeading = useActiveText('about_page_story_title');
  const storyP1 = useActiveText('about_page_story_p1');
  const storyP2 = useActiveText('about_page_story_p2');
  const founderBio = useActiveText('about_page_founder_summary');

  const valuesAndPrinciples = [
    {
      title: 'Trust & Transparency',
      desc: 'We believe trust is the foundation of great service. From clear communication to detailed monthly reporting and itemised bookkeeping, we operate with complete transparency so you always know exactly what\'s happening with your property.',
      icon: <Shield className="h-5 w-5 text-[#B98F32]" />
    },
    {
      title: 'Quality in Every Detail',
      desc: 'We maintain uncompromising standards of quality. Every vendor we employ, every deep clean our supervisors inspect, and every building upgrade/refurbishment we manage is held to absolute, elite standards of finish.',
      icon: <Sparkles className="h-5 w-5 text-[#B98F32]" />
    },
    {
      title: 'Personal, Tailored Service',
      desc: 'No two properties or homeowners are identical. We compile custom inspection manifests, arrange bespoke concierge services, and tailor care frequency to fit your lifestyle, schedule, and visits.',
      icon: <Compass className="h-5 w-5 text-[#B98F32]" />
    },
    {
      title: 'Reliability You Can Count On',
      desc: 'We keep our promises. When you contact us with an urgent key request, an emergency leak, or simple housekeeping setup, we take complete ownership of the outcome, delivering true peace of mind.',
      icon: <HeartHandshake className="h-5 w-5 text-[#B98F32]" />
    }
  ];

  return (
    <div id="about-page-wrapper" className="bg-white min-h-screen pt-28 pb-12">
      
      {/* 1. HERO HEADER INTRO */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block font-mono"
            >
              Who We Are
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight font-sans"
            >
              Built on Trust.<br />Driven by Service.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              At Alonz Homes, we provide premium property management and lifestyle solutions for clients who expect reliability, discretion, and exceptional care for their London homes. From maintenance to renovations, cleaning, and concierge services — we handle every detail so you never have to.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a 
                href="#our-story"
                className="inline-flex items-center gap-2 bg-black text-white hover:bg-gray-800 font-bold px-8 py-4 rounded-full text-sm shadow-md cursor-pointer transition-all uppercase tracking-wider"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-5 h-[450px] relative rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src={storyImage} 
              alt="Vintage heavy brass key on stylish office setting"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-mono text-[#E2B344] uppercase tracking-wider font-extrabold">Established London</span>
              <p className="text-sm font-semibold mt-1">Providing bespoke property solutions across SW3, W11, and beyond.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STORY */}
      <section id="our-story" className="bg-gray-50 py-20 border-y border-gray-100 mb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Image */}
            <div className="lg:col-span-5 h-[400px] md:h-[480px] relative rounded-3xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img 
                src={philosophyImage} 
                alt="Hand with martini and elegant interior styling detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/10 via-transparent to-[#111111]/70" />
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block font-mono font-bold">Our History</span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {storyHeading}
              </h2>
              <div className="w-12 h-1 bg-[#E2B344] rounded-full" />
              
              <div className="text-gray-600 text-base space-y-4 leading-relaxed font-normal whitespace-pre-line">
                <p>{storyP1}</p>
                <p>{storyP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "WHAT WE DO" GRID */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">Core Competencies</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mt-3 font-sans">
            Our Main Capabilities
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Every home service coordinated flawlessly under one single point of contact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-6">
              <PenTool className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Interior Design & Styling</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Modern, tasteful, and lifestyle-focused home modifications that elevate of-the-moment charm and comfort.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-6">
              <Compass className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Lifestyle & Concierge</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Chauffeuring, luxury airport greets, bespoke tours, scheduled cleaning, and private pantry provisioning.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Home Management</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Full schedule oversight, utility billing, routine checks, and regular inspections with direct client reporting.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-6">
              <Award className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Renovation & Construction</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Complete upgrades, custom carpentry, plumbing refits, and fully supervised professional contractor coordination.
            </p>
          </div>
        </div>
      </section>

      {/* 4. VALUES ACCORDION SECTION WITH HIGH-CLASS DINNER SCENERY */}
      <section className="bg-gray-50 py-20 border-y border-gray-100 mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Scenery image */}
            <div className="lg:col-span-5 h-[450px] relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src={standardsImage} 
                alt="Cozy elegant dimly lit dinner banquet table outdoors under high arch tree row"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
            </div>

            {/* Values accordion list */}
            <div className="lg:col-span-7">
              <span className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block font-mono">Our Foundation</span>
              <h2 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 tracking-tight leading-tight mt-2 mb-8">
                Our Values
              </h2>
              
              <div className="space-y-4">
                {valuesAndPrinciples.map((item, index) => {
                  const isOpen = activeValue === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setActiveValue(isOpen ? -1 : index)}
                        className="w-full text-left px-6 py-5 flex justify-between items-center font-bold text-gray-900 hover:text-[#B98F32] transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          {item.icon}
                          <span className="text-base sm:text-lg font-sans">{item.title}</span>
                        </span>
                        <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#B98F32]' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 pt-1 text-gray-500 text-sm leading-relaxed border-t border-dashed border-gray-100">
                              {item.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE FOUNDER */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">The Leadership</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mt-3 font-sans">
            Meet The Founder
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            Driven by reliability, transparency, and a passion for London's finest properties.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          
          {/* Founder 1 (Commented out for now)
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center gap-6 p-6"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" 
                alt="Christopher Buerhoff face headshot portrait"
                className="w-full h-full object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 font-sans">Christopher Buerhoff</h4>
              <p className="text-xs font-mono uppercase tracking-widest text-[#B98F32] mt-1 font-bold">Co-Founder, Alonz Homes</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                With years of experience managing high-end residential assets across London, Christopher co-founded Alonz Homes to establish premium personal oversight, strict quality standards, and absolute transparency.
              </p>
            </div>
          </motion.div>
          */}

          {/* Founder 2 */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row items-center gap-6 p-6"
          >
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-zinc-100 overflow-hidden flex-shrink-0">
              <img 
                src={activeBilalHeadshot} 
                alt="Bilal Jammal face headshot portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 font-sans">Bilal Jammal</h4>
              <p className="text-xs font-mono uppercase tracking-widest text-[#B98F32] mt-1 font-bold font-bold">Founder & Director</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed whitespace-pre-line">
                {founderBio}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. LOGO BAR */}
      <section className="bg-gray-50 py-12 border-y border-gray-100 mb-24 select-none">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-8">Trusted by Leading Service Providers</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-35 grayscale">
            <span className="font-extrabold text-lg sm:text-xl font-mono text-gray-950">JLL</span>
            <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-gray-950">Landsec</span>
            <span className="font-serif italic font-extrabold text-lg sm:text-xl text-gray-950">Savills</span>
            <span className="font-mono font-medium text-sm sm:text-base text-gray-950">Cushman & Wakefield</span>
            <span className="font-semibold text-lg sm:text-xl tracking-widest text-gray-950">SEGRO</span>
            <span className="font-sans font-bold text-lg sm:text-xl text-gray-950">DERWENT LONDON</span>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE ALONZ COLLATERAL */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left image of gorgeous lounge */}
          <div className="lg:col-span-5 h-[380px] sm:h-[450px] relative rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={materialsImage} 
              alt="Stylish mid-century lounge office interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Right choice points */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block font-mono">Our Excellence</span>
            <h2 className="text-3xl md:text-4.5xl font-extrabold text-gray-900 tracking-tight font-sans">
              Why Clients Choose Alonz
            </h2>
            <div className="w-12 h-1 bg-[#E2B344] rounded-full" />
            <p className="text-gray-600 text-base leading-relaxed">
              At Alonz Homes, we go far beyond standard maintenance chores — we offer total peace of mind. With years of experience managing London's most exclusive properties, our team handles every detail discreetly and efficiently.
            </p>
            
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E2B344]/15 text-[#B98F32] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold font-mono">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-semibold">
                  We handle everything A–Z — From emergency plumbing to planning permission, building, cleaning, styling, and key storage under one central manager.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E2B344]/15 text-[#B98F32] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold font-mono">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-semibold">
                  Perfect for property owners abroad — Comprehensive, transparent inspections, photographs, financial statements, and worry-free remote oversight.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E2B344]/15 text-[#B98F32] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold font-mono">✓</span>
                </div>
                <p className="text-gray-700 text-sm font-semibold">
                  Premium response tier — Our supervisors run service cars and operate lines 24/7. When you contact us, it is solved immediately.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIAL SNAPSHOT & BOTTOM CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Testimonial callout */}
          <div className="lg:col-span-12 bg-gray-50 border border-gray-100 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="max-w-2xl text-left">
              <p className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed italic">
                "Alonz Homes made my overseas property completely stress-free. The monthly reports and fast response times are worth every single penny."
              </p>
              <h5 className="text-[#B98F32] font-extrabold text-sm font-sans uppercase mt-3 tracking-wider">— Client, Kensington SW7</h5>
            </div>
            <div className="flex-shrink-0 sm:flex-col flex gap-2">
              <div className="flex text-[#E2B344] text-lg font-bold">★★★★★</div>
              <span className="text-xs font-mono text-gray-400">Trusted Residential Custodian</span>
            </div>
          </div>
        </div>

        {/* Action card */}
        <div className="bg-gradient-to-br from-[#1c1917] to-[#0c0a09] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-lg border border-[#E2B344]/25">
          {/* Ambient overlays */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E2B344]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto relative z-10 font-sans">
            Let us care for your London residence with the finest professional craftsmanship.
          </h3>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <button 
              onClick={onNavigateContact}
              className="bg-[#E2B344] text-black font-extrabold px-8 py-3.5 rounded-full hover:bg-opacity-95 text-xs sm:text-sm shadow-md transition-all uppercase tracking-wider cursor-pointer"
            >
              Request Consultation
            </button>
            <a 
              href="mailto:info@alonzhomes.com"
              className="border border-white/40 text-white font-extrabold px-8 py-3.5 rounded-full hover:bg-white hover:text-black hover:border-white text-xs sm:text-sm transition-all uppercase tracking-wider cursor-pointer"
            >
              Call Bilal Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
