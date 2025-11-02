
import React from 'react';
import { CodeIcon, RocketIcon, ShieldIcon } from './IconComponents';

const features = [
  {
    icon: <CodeIcon className="h-8 w-8 text-indigo-400" />,
    title: 'Developer-Friendly API',
    description: 'Integrate our powerful features with just a few lines of code. Clean, documented, and easy to use.',
  },
  {
    icon: <RocketIcon className="h-8 w-8 text-indigo-400" />,
    title: 'Blazing Fast Performance',
    description: 'Our infrastructure is optimized for speed, ensuring your applications run smoothly and efficiently.',
  },
  {
    icon: <ShieldIcon className="h-8 w-8 text-indigo-400" />,
    title: 'Enterprise-Grade Security',
    description: 'Protect your data with robust security measures, including end-to-end encryption and compliance.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            A better workflow for you, a better experience for your users.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/60 rounded-xl p-8 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
