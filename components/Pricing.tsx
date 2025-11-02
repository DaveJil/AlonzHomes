
import React from 'react';
import { CheckIcon } from './IconComponents';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For individuals and small projects.',
    features: [
      '1 Project',
      'Basic Analytics',
      'Community Support',
      '10,000 API Calls/month',
    ],
    cta: 'Start for Free',
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    priceSuffix: '/ month',
    description: 'For growing teams and businesses.',
    features: [
      'Unlimited Projects',
      'Advanced Analytics',
      'Priority Email Support',
      '1,000,000 API Calls/month',
      'Team Collaboration',
    ],
    cta: 'Choose Pro',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'For large organizations with custom needs.',
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'Custom API Rate Limits',
      'On-premise Deployment',
    ],
    cta: 'Contact Sales',
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Fair, Simple Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid max-w-lg mx-auto lg:max-w-none lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border ${
                tier.isPopular ? 'border-indigo-500 bg-slate-800/50' : 'border-slate-700 bg-slate-800'
              } flex flex-col`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-4 text-slate-400">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                {tier.priceSuffix && <span className="text-base font-medium text-slate-400">{tier.priceSuffix}</span>}
              </div>

              <ul role="list" className="mt-8 space-y-4 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <p className="ml-3 text-base text-slate-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-10 block w-full text-center rounded-lg px-6 py-3 text-base font-semibold transition-colors duration-200 ${
                  tier.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
