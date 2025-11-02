import React from 'react';
import { HomeGraphIcon, FileIcon, BellIcon, CarIcon } from './IconComponents';

const services = [
  {
    icon: <HomeGraphIcon className="h-8 w-8 text-gray-700" />,
    title: 'Vacant Property Management',
    description: 'Your property cared for year-round – inspections, maintenance, bill management, and emergency support.',
    linkText: 'Explore Packages',
    href: '#packages'
  },
  {
    icon: <FileIcon className="h-8 w-8 text-gray-700" />,
    title: 'Construction & Renovation',
    description: 'From interior upgrades to full-scale projects, our trusted network delivers results that last.',
    linkText: 'View projects',
    href: '#projects'
  },
  {
    icon: <BellIcon className="h-8 w-8 text-gray-700" />,
    title: 'Cleaning Services',
    description: 'Discreet, professional cleaning tailored to your schedule and standards.',
    linkText: 'Book cleaning',
    href: '#contact'
  },
  {
    icon: <CarIcon className="h-8 w-8 text-gray-700" />,
    title: 'Chauffeuring & Lifestyle',
    description: 'Exclusive, on-demand transport for comfort, privacy, and ease across London.',
    linkText: 'Learn more',
    href: '#'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Home Management – from maintenance to lifestyle, designed for effortless living.
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border border-gray-200">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 sm:p-12 group border-b border-r border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#E2B344] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href={service.href} className="font-semibold text-gray-900 hover:text-[#E2B344] transition-colors duration-300">
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
