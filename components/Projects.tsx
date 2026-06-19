import React, { useState } from 'react';
import { ArrowRightIcon } from './IconComponents';
import { Project, projectsData } from '../types';
import ProjectDetailOverlay from './ProjectDetailOverlay';
import { useActiveImage } from '../imageStore';
import { useActiveText } from '../textStore';

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const heading = useActiveText('portfolio_heading');
    const sub = useActiveText('portfolio_sub');

    const project1Img = useActiveImage('project_1');
    const project2Img = useActiveImage('project_2');
    const project3Img = useActiveImage('project_3');
    const project4Img = useActiveImage('project_4');
    const project5Img = useActiveImage('project_5');

    const projectImages = [
        { 
            src: project1Img, 
            alt: 'Spacious dining room with large windows', 
            span: 'col-span-12 md:col-span-4 row-span-1',
            overlay: true,
            title: 'The Holland Park Villa',
            location: 'Holland Park, W11'
        },
        { 
            src: project2Img, 
            alt: 'Modern building exterior with a pool at dusk', 
            span: 'col-span-12 md:col-span-5 row-span-2',
            overlay: true,
            title: 'Mayfair Sky Residence',
            location: 'Mayfair, W1K'
        },
        { 
            src: project3Img, 
            alt: 'Snowy street with townhouses', 
            span: 'col-span-12 md:col-span-3 row-span-1', 
            overlay: true, 
            title: 'Chelsea Riverside Flat', 
            location: 'Chelsea, SW3' 
        },
        { 
            src: project4Img, 
            alt: 'Luxury bathroom with double vanity and warm lighting', 
            span: 'col-span-12 md:col-span-4 row-span-1',
            overlay: true,
            title: 'Notting Hill Mews',
            location: 'Notting Hill, W11'
        },
        { 
            src: project5Img, 
            alt: 'Modern kitchen with marble island', 
            span: 'col-span-12 md:col-span-3 row-span-1',
            overlay: true,
            title: 'Modern Wimbledon Home',
            location: 'Wimbledon, SW19'
        },
    ];

    const handleCardClick = (title: string) => {
        let matchedId = "chelsea-luxury-apartment";
        if (title.includes("Holland Park")) matchedId = "holland-park-villa";
        else if (title.includes("Mayfair")) matchedId = "peninsula-mansion";
        else if (title.includes("Chelsea")) matchedId = "chelsea-luxury-apartment";
        else if (title.includes("Wimbledon")) matchedId = "snowfair-avenue";
        else if (title.includes("Notting Hill")) matchedId = "belgravia-penthouse";
        
        const project = projectsData.find(p => p.id === matchedId);
        if (project) {
            setSelectedProject(project);
        }
    };

    return (
        <section id="projects" className="py-20 sm:py-24 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
                    <p className="mt-4 text-gray-600 whitespace-pre-line">{sub}</p>
                </div>
                <div className="mt-16 grid grid-cols-12 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
                    {projectImages.map((image, index) => (
                        <div 
                            key={index} 
                            onClick={() => handleCardClick(image.title)}
                            className={`relative rounded-lg overflow-hidden group cursor-pointer ${image.span}`}
                        >
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

                {/* View All Projects CTA */}
                <div className="mt-12 text-center">
                    <a 
                        href="#gallery" 
                        className="inline-block border border-gray-900 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white hover:border-transparent transition-all duration-300 text-center shadow-sm"
                    >
                        View All Work Across London
                    </a>
                </div>
            </div>

            {selectedProject && (
                <ProjectDetailOverlay 
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onRequestConsultation={() => {
                        setSelectedProject(null);
                        // smooth scroll to contact form from the overlay
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                />
            )}
        </section>
    );
};

export default Projects;