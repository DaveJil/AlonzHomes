import React from 'react';
import { CheckIcon, CrownIcon, SilverServiceIcon, TailoredPackageIcon } from './IconComponents';

const packages = [
  {
    name: 'Golden Service',
    icon: <CrownIcon className="h-8 w-8 text-black" />,
    description: 'Full property management for premium apartments and homes.',
    price: '$3000',
    duration: '/ 12 months',
    features: [
      'Professional care and upkeep',
      'Monthly inspections + refresh cleaning',
      'All maintenance + emergency calls',
      'Bill payments (utilities, council tax, TV licence)',
      'Monthly reports & statements',
    ],
    cta: 'Get started',
    style: 'bg-[#E2B344] text-black',
    buttonStyle: 'bg-black text-white hover:bg-gray-800'
  },
  {
    name: 'Silver Service',
    icon: <SilverServiceIcon className="h-8 w-8 text-gray-800" />,
    description: 'Essential management and maintenance for long-term vacant properties.',
    price: '$2000',
    duration: '/ 24 months',
    features: [
      'Regular inspections',
      'Maintenance arrangement (call-out fees apply)',
      'Utility & service coordination'
    ],
    cta: 'Request Info',
    style: 'bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800',
    buttonStyle: 'bg-gradient-to-b from-gray-400 to-gray-600 text-white hover:opacity-90'
  },
  {
    name: 'Tailored Package',
    icon: <TailoredPackageIcon className="h-8 w-8 text-white" />,
    description: 'Fully bespoke management designed around your property\'s unique needs.',
    price: 'Quote',
    duration: '/ Custom',
    features: [
      'Custom duration',
      'Service combination flexibility',
      'Dedicated personal manager',
    ],
    cta: 'Request Quote',
    style: 'bg-black text-white',
    buttonStyle: 'bg-white text-black hover:bg-gray-200'
  },
];

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Management Packages</h2>
          <p className="mt-4 text-gray-600">Transparent pricing designed for simplicity, reliability, and peace of mind.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`rounded-lg p-8 flex flex-col ${pkg.style}`}>
              <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${pkg.name === 'Golden Service' ? 'bg-white' : pkg.name === 'Silver Service' ? 'bg-white' : 'border border-white'}`}>
                      {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className="mt-2 opacity-80 h-16">{pkg.description}</p>
                  <div className="mt-4">
                      <span className="text-4xl font-extrabold">{pkg.price}</span>
                      <span className="opacity-70">{pkg.duration}</span>
                  </div>
              </div>
              
              <ul className="mt-8 space-y-4 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className={`h-6 w-6 ${pkg.name === 'Golden Service' ? 'text-black' : 'text-white'}`} />
                    </div>
                    <p className="ml-3">{feature}</p>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`mt-10 block w-full text-center rounded-full px-6 py-3 font-semibold transition-colors duration-200 ${pkg.buttonStyle}`}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;