import React from 'react';
import { ArrowRightIcon } from './IconComponents';

const projectImages = [
    { 
        src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop', 
        alt: 'Spacious dining room with large windows', 
        span: 'col-span-12 md:col-span-4 row-span-1',
        overlay: true,
        title: 'The Holland Park Villa',
        location: 'Holland Park, W11'
    },
    { 
        src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop', 
        alt: 'Modern building exterior with a pool at dusk', 
        span: 'col-span-12 md:col-span-5 row-span-2',
        overlay: true,
        title: 'Mayfair Sky Residence',
        location: 'Mayfair, W1K'
    },
    { 
        src: 'https://images.unsplash.com/photo-1494203484021-3c454daf695d?q=80&w=2070&auto=format&fit=crop', 
        alt: 'Snowy street with townhouses', 
        span: 'col-span-12 md:col-span-3 row-span-1', 
        overlay: true, 
        title: 'Chelsea Riverside Flat', 
        location: 'Chelsea, SW3' 
    },
    { 
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop', 
        alt: 'Luxury bathroom with double vanity and warm lighting', 
        span: 'col-span-12 md:col-span-4 row-span-1',
        overlay: true,
        title: 'Notting Hill Mews',
        location: 'Notting Hill, W11'
    },
    { 
        src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2108&auto=format&fit=crop', 
        alt: 'Modern kitchen with marble island', 
        span: 'col-span-12 md:col-span-3 row-span-1',
        overlay: true,
        title: 'Modern Wimbledon Home',
        location: 'Wimbledon, SW19'
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 sm:py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Projects</h2>
                    <p className="mt-4 text-gray-600">A glimpse into the homes and spaces we've recently transformed and managed across London.</p>
                </div>
                <div className="mt-16 grid grid-cols-12 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
                    {projectImages.map((image, index) => (
                        <div key={index} className={`relative rounded-lg overflow-hidden group ${image.span}`}>
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            {image.overlay && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="text-white text-xl font-bold">{image.title}</h3>
                                            <p className="text-gray-300">{image.location}</p>
                                        </div>
                                        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                                            <ArrowRightIcon className="w-5 h-5 -rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;