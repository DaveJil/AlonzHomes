import React, { useState } from 'react';
import { Project, projectsData } from '../types';
import ProjectDetailOverlay from './ProjectDetailOverlay';
import { ArrowRightIcon } from './IconComponents';
import { useActiveImage } from '../imageStore';

interface ProjectsPageProps {
  onOpenConsultation: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenConsultation }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const heroImage = useActiveImage('projects_page_hero');

  return (
    <div className="bg-white min-h-screen pt-20" id="projects-page-wrapper">
      
      {/* 1. MOODY HERO SECTION WITH CHESTERFIELD LEATHER SOFA */}
      <section 
        className="relative h-[65vh] min-h-[400px] flex items-center justify-center bg-black overflow-hidden"
        id="projects-page-hero"
      >
        {/* Background Image Overlay with brick-wall Chesterfield couch setting */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Warm atmospheric boutique room with leather chesterfield sofa"
            className="w-full h-full object-cover opacity-60 scale-102"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent/10" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center flex flex-col items-center gap-6 md:gap-8 mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl drop-shadow-sm font-sans">
            Showcasing the homes, renovations, and interiors we've completed across London.
          </h1>
          
          <a
            href="#OurWork"
            className="mt-2 inline-block border border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full px-8 py-3 text-xs sm:text-sm font-bold tracking-wide text-white bg-transparent uppercase shadow-lg hover:scale-105"
            id="hero-view-services-cta"
          >
            View Services
          </a>
        </div>
      </section>

      {/* 2. "OUR WORK ACROSS LONDON" ASYMMETRICAL PORTFOLIO GRID */}
      <section 
        className="py-16 sm:py-24 bg-white"
        id="OurWork"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-sans">
              Our Work Across London
            </h2>
            <div className="w-16 h-1 bg-[#E2B344] mx-auto mt-4 rounded-full" />
          </div>

          {/* Asymmetrical Masonry Grid */}
          {/* Desktop uses 3 columns. heights are perfectly proportioned. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto" id="portfolio-asymmetric-grid">
            
            {/* 1. Canary Wharf Pool - Tall Card (Span 1 Column, spans multiple row placements) */}
            <div 
              onClick={() => setSelectedProject(projectsData[1])}
              className="md:col-span-1 md:row-span-2 h-[450px] md:h-[600px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              id="portfolio-card-peninsula"
            >
              <img 
                src={projectsData[1].images[0]} 
                alt={projectsData[1].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="flex justify-between items-end gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-sans pr-4">{projectsData[1].title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{projectsData[1].location}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white/80 rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Holland Park Villa - Wide Card (Span 2 Columns, columns 2 and 3) */}
            <div 
              onClick={() => setSelectedProject(projectsData[2])}
              className="md:col-span-2 h-[288px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              id="portfolio-card-holland"
            >
              <img 
                src={projectsData[2].images[0]} 
                alt={projectsData[2].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="flex justify-between items-end gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-sans pr-4">{projectsData[2].title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{projectsData[2].location}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white/80 rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Shoreditch Loft - Medium Card (Column 2, fits beside Card 4) */}
            <div 
              onClick={() => setSelectedProject(projectsData[3])}
              className="md:col-span-1 h-[288px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              id="portfolio-card-shoreditch"
            >
              <img 
                src={projectsData[3].images[0]} 
                alt={projectsData[3].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="flex justify-between items-end gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-sans pr-4">{projectsData[3].title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{projectsData[3].location}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white/80 rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Snowfair Avenue, Wimbledon - Medium Card (Column 3, Row 2. ACTIVE/ACTIVE-HOVER PRE_LIGHT STATE) */}
            <div 
              onClick={() => setSelectedProject(projectsData[4])}
              className="md:col-span-1 h-[288px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border-2 border-[#E2B344]"
              id="portfolio-card-wimbledon"
            >
              <img 
                src={projectsData[4].images[0]} 
                alt={projectsData[4].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Highlight state overlay from Image 2 */}
              <div className="absolute inset-0 bg-[#2B1B15]/85 flex flex-col justify-end p-6 md:p-8 text-left transition-all duration-300 group-hover:bg-[#2B1B15]/75">
                <div className="flex justify-between items-end gap-3">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-extrabold font-sans">Snowfair Avenue</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">Wimbledon</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black hover:scale-105 transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Belgravia Penthouse - Wide Card (Span 2 Columns, spanning Columns 1 and 2, Row 3) */}
            <div 
              onClick={() => setSelectedProject(projectsData[5])}
              className="md:col-span-2 h-[288px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              id="portfolio-card-belgravia"
            >
              <img 
                src={projectsData[5].images[0]} 
                alt={projectsData[5].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="flex justify-between items-end gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-sans pr-4">{projectsData[5].title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{projectsData[5].location}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white/80 rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Chelsea Luxury Apartment / Bathrooms - Medium Card (Column 3, Row 3) */}
            <div 
              onClick={() => setSelectedProject(projectsData[0])}
              className="md:col-span-1 h-[288px] relative rounded-3xl overflow-hidden group cursor-pointer shadow-md transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              id="portfolio-card-chelsea"
            >
              <img 
                src={projectsData[0].images[0]} 
                alt={projectsData[0].title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8 text-left">
                <div className="flex justify-between items-end gap-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <h3 className="text-white text-lg sm:text-xl font-bold font-sans pr-4">{projectsData[0].title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">{projectsData[0].location}</p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 border border-white/80 rounded-full flex items-center justify-center text-white bg-transparent group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRightIcon className="w-4 h-4 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. PREMIUM COPPER/BRONZE GRADIENT CALL TO ACTION CARD */}
      <section className="py-12 sm:py-16 bg-white" id="portfolio-consultation-prompt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="bg-gradient-to-br from-[#734A38] to-[#2B1B15] rounded-3xl py-12 px-8 md:p-16 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10 shadow-lg relative overflow-hidden group"
            id="portfolio-cta-gradient-card"
          >
            {/* Ambient luxury glows */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#E2B344]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Title / Description info */}
            <div className="max-w-2xl relative z-10 flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Want Similar Results for your Property?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-normal">
                From renovations to cleaning and full management, we deliver quality you can trust.
              </p>
            </div>

            {/* Pill Action Buttons Block */}
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10 flex-shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-extrabold px-8 py-4 rounded-full text-sm shadow-md cursor-pointer text-center whitespace-nowrap active:scale-98 transition-all"
                id="cta-book-consult-btn"
              >
                Book a Consultation
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto border border-white/60 text-white hover:bg-white hover:text-black hover:border-white font-extrabold px-8 py-4 rounded-full text-sm cursor-pointer text-center whitespace-nowrap active:scale-98 transition-all"
                id="cta-view-services-btn"
              >
                View our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACTIVE PORTFOLIO OVERLAY MODAL RENDERING */}
      {selectedProject && (
        <ProjectDetailOverlay 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onRequestConsultation={() => {
            setSelectedProject(null);
            onOpenConsultation();
          }}
        />
      )}

    </div>
  );
};

export default ProjectsPage;
