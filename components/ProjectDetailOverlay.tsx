import React, { useState } from 'react';
import { Project } from '../types';
import { CloseIcon, QuoteIcon } from './IconComponents';

interface ProjectDetailOverlayProps {
  project: Project;
  onClose: () => void;
  onRequestConsultation: () => void;
}

// Inline SVGs for metric grid to guarantee zero import failures
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const BuildingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.053.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const CheckTickIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

const ProjectDetailOverlay: React.FC<ProjectDetailOverlayProps> = ({ 
  project, 
  onClose,
  onRequestConsultation
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Prevent background scrolling when overlay is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-12 transition-opacity duration-300 animate-fade-in"
      onClick={handleBackdropClick}
      id="project-overlay-backdrop"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-6xl w-full shadow-2xl overflow-hidden mt-4 mb-4 animate-slide-up"
        id="project-overlay-container"
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full border border-gray-200 text-gray-500 bg-white hover:text-black hover:bg-gray-100 shadow-sm hover:scale-105 transition-all cursor-pointer z-20"
          aria-label="Close Project Detail Overview"
          id="project-overlay-close-btn"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
          
          {/* LEFT COLUMN: Main Picture & Thumbnails Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6" id="project-overlay-gallery-panel">
            {/* Active Canvas Frame */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm relative">
              <img 
                src={project.images[activeImageIndex]} 
                alt={`${project.title} - View ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-3 gap-3 md:gap-4" id="project-overlay-thumbnails">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-full h-[65px] sm:h-[90px] md:h-[110px] rounded-xl overflow-hidden bg-gray-50 cursor-pointer shadow-sm relative transition-all duration-300 ${
                    activeImageIndex === idx 
                      ? 'ring-2 ring-black border border-transparent scale-98 shadow-md' 
                      : 'hover:opacity-85 hover:scale-102 border border-gray-200'
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail view ${idx + 1}`}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {activeImageIndex !== idx && (
                    <div className="absolute inset-0 bg-white/20 hover:bg-transparent duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Project Metadata, Services & Overviews */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left" id="project-overlay-details-panel">
            
            {/* Title & Description Heading Context */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                {project.description}
              </p>
            </div>

            {/* Checklist Core Features list */}
            <div className="flex flex-col gap-3" id="project-overlay-features-checklist">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 bg-[#0e2c4c] text-white rounded-full p-0.5 h-5 w-5 flex items-center justify-center">
                    <CheckTickIcon className="h-3 w-3" />
                  </div>
                  <span className="text-[#0e2c4c] text-sm sm:text-base font-semibold">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Services provided Pills block */}
            <div className="flex flex-col gap-3" id="project-overlay-services-container">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-gray-500">
                Services Provided
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-1">
                {project.services.map((service, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 border border-gray-200 text-gray-700 text-xs font-semibold rounded-full hover:border-[#E2B344] hover:text-[#E2B344] transition-all cursor-default"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Grid 2x1 -> 2x2 Overview Metrics Panels */}
            <div className="grid grid-cols-2 border border-gray-200 rounded-2xl divide-x divide-y divide-gray-200 overflow-hidden text-sm bg-[#faf9f6]/40" id="project-overlay-metrics-grid">
              {/* Box 1: Duration */}
              <div className="p-4 sm:p-5 flex flex-col gap-2 bg-white/70">
                <ClockIcon className="h-5 w-5 text-gray-500" />
                <span className="font-extrabold text-sm sm:text-base text-gray-900 mt-1">
                  {project.duration}
                </span>
              </div>
              
              {/* Box 2: Client Sector */}
              <div className="p-4 sm:p-5 flex flex-col gap-2 bg-white/70 border-t-0">
                <UserIcon className="h-5 w-5 text-gray-500" />
                <span className="font-extrabold text-sm sm:text-base text-gray-900 mt-1">
                  {project.clientType}
                </span>
              </div>

              {/* Box 3: Interior/Apartment type */}
              <div className="p-4 sm:p-5 flex flex-col gap-2 bg-white/70">
                <BuildingIcon className="h-5 w-5 text-gray-500" />
                <span className="font-extrabold text-sm sm:text-base text-gray-900 mt-1">
                  {project.propertyType}
                </span>
              </div>

              {/* Box 4: Sector Location code */}
              <div className="p-4 sm:p-5 flex flex-col gap-2 bg-white/70">
                <MapPinIcon className="h-5 w-5 text-gray-500" />
                <span className="font-extrabold text-sm sm:text-base text-gray-900 mt-1">
                  {project.postalCode}
                </span>
              </div>
            </div>

            {/* Warm Quote / Testmonial block */}
            <div className="bg-[#FAF7F1] border border-[#f3eee2] rounded-2xl p-6 relative flex flex-col gap-4 shadow-sm" id="project-overlay-testimonial">
              <QuoteIcon className="absolute top-4 left-4 h-8 w-8 text-[#E2B344]/20 pointer-events-none" />
              <div className="pl-6 pt-2">
                <p className="italic text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="text-right mt-4 text-xs sm:text-sm text-[#0e2c4c] font-bold">
                  — {project.testimonial.author}
                </div>
              </div>
            </div>

            {/* Bottom Anchor / Form consultation action bar */}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2" id="project-overlay-cta-section">
              <h4 className="text-base sm:text-lg font-extrabold text-[#0e2c4c] leading-tight">
                One company. Every service. Complete peace of mind.
              </h4>
              <button 
                onClick={onRequestConsultation}
                className="inline-flex items-center gap-2 group text-left font-bold text-sm text-[#E2B344] hover:text-black transition-all cursor-pointer w-fit mt-1 border-b border-transparent hover:border-black py-0.5"
                id="project-overlay-consultation-link"
              >
                Request Consultation
                <ArrowUpRightIcon className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectDetailOverlay;
