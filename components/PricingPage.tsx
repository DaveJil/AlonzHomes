import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Shield, HelpCircle, ChevronRight, HelpCircle as HelpIcon, ArrowRight, Table } from 'lucide-react';

interface PricingPageProps {
  onNavigateContact: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onNavigateContact }) => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  const packages = [
    {
      name: 'Golden Service',
      description: 'Full-suite property management and hospitality for premium occupied apartments and luxury residences.',
      price: '£3500',
      duration: '/ year',
      features: [
        'Professional care and upkeep',
        'Monthly inspections + refresh cleaning',
        'All maintenance + emergency coordination',
        'Bill payments (utilities, council tax, TV license)',
        'Monthly photo reports & financials',
      ],
      cta: 'Get started',
      style: 'bg-[#E2B344] text-black border-2 border-[#E2B344]',
      badge: 'Highly Requested',
      buttonStyle: 'bg-black text-white hover:bg-zinc-900 shadow-md'
    },
    {
      name: 'Silver Service',
      description: 'Essential vacant property supervision and safety compliance for long-term unrented homes and second-home owners.',
      price: '£2500',
      duration: '/ year',
      features: [
        'Regular vacant inspections',
        'Maintenance arrangement (call-out fees apply)',
        'Utility & supplier coordination',
        'Secure key custody & emergency access',
        'Quarterly statements & update logs'
      ],
      cta: 'Request Info',
      style: 'bg-zinc-50 text-zinc-800 border border-zinc-200/60 shadow-sm',
      badge: 'Vacant Supervision',
      buttonStyle: 'bg-zinc-800 text-white hover:bg-zinc-900 shadow-sm'
    },
    {
      name: 'Tailored Package',
      description: 'A fully customisable, concierge-driven management plan built around your property\'s premium layout and schedule.',
      price: 'Quote',
      duration: '/ Custom duration',
      features: [
        'Completely custom inspection metrics',
        'Full service combination flexibility',
        'Dedicated boutique personal property manager',
        'Unlimited concierge chores & airport collections',
        'Flexible monthly retainer terms'
      ],
      cta: 'Build Custom Plan',
      style: 'bg-black text-white border border-zinc-800',
      badge: 'Bespoke Care',
      buttonStyle: 'bg-white text-black hover:bg-zinc-200 shadow-md'
    },
  ];

  const comparisons = [
    { feature: 'Property visual inspections', golden: 'Monthly', silver: 'Quarterly', tailored: 'Custom List' },
    { feature: 'Emergency line responding (24/7)', golden: 'Included', silver: 'Included', tailored: 'Priority Tier' },
    { feature: 'Refresh cleaning sessions', golden: 'Monthly Refresh', silver: 'Preferred Rate', tailored: 'Custom Scale' },
    { feature: 'Bill processing & utility handling', golden: 'Full (A-Z)', silver: 'Basic Setup', tailored: 'Full (A-Z)' },
    { feature: 'Detailed financial reporting', golden: 'Monthly Ledger + Photos', silver: 'Semi-Annually', tailored: 'Real-time option' },
    { feature: 'Key holding & locksmith access', golden: 'Double Vetted Custody', silver: 'Vetted Custody', tailored: 'Armed Vault Option' },
    { feature: 'Coordination of structural builders', golden: 'Supervised (A-Z)', silver: 'Billed per Hour', tailored: 'Bespoke Contract' },
    { feature: 'Private concierge / chauffeuring', golden: 'Add-on option', silver: 'Not Available', tailored: 'Fully integrated' },
    { feature: 'Contract duration minimum', golden: '12 Months', silver: '24 Months', tailored: 'Fully Flexible' },
  ];

  const includes = [
    {
      title: 'Admin and Coordination',
      desc: 'All admin items, supplier bills, meter logs, tenancy setups, and council coordination are routed straight to our desk.'
    },
    {
      title: 'Monthly Photographic Logs',
      desc: 'We provide itemised accounting receipts alongside full photographic checklists during each and every inspection run.'
    },
    {
      title: 'Property Health Checks',
      desc: 'We systematically verify bathroom pressure, boiler safety lines, smart alarms, leak boundaries, and lock alignment.'
    },
    {
      title: 'Secure Key Vaulting',
      desc: 'Keys are tagged with anonymous security barcodes and stored inside our double-vaulted office safe for tracking.'
    },
    {
      title: 'Direct Personal Manager',
      desc: 'Enjoy a single, direct, human point of contact on WhatsApp — no automated bot loops or delayed call routing.'
    },
    {
      title: 'Emergency Mobilisation',
      desc: 'Our designated service team stays ready. In critical lockouts, leaks, or gas events, we are on site to handle it.'
    },
  ];

  const faqs = [
    {
      q: 'What is included in the monthly package fee?',
      a: 'Your package fee covers total administrative management, the specified frequency of property walkarounds/inspections, key custody, and billing supervision. Contractor callout labor, actual cleaning hours, and refurbishment material supplies are charged against your client float deposit after we obtain your express signal.'
    },
    {
      q: 'What is the float deposit, and why is it required?',
      a: 'The float deposit is a secure, pre-funded client ledger reserve (typically between £500 and £1,500 depending on the scale of your property). It resides in a dedicated client trust account, allowing us to immediately pay accredited plumbers, certified electricians, or cleaners for minor emergency services without waiting for international bank wire delays, which is exceptionally useful if you live in another timezone.'
    },
    {
      q: 'Can I upgrade or downgrade my package later?',
      a: 'Yes, seamlessly. Many overseas clients maintain their home under Silver vacant supervision while unrented or empty, and upgrade to Golden Service when they or their families intend to occupy the London residence for a few months.'
    },
    {
      q: 'Do you manage occupied homes, or only vacant properties?',
      a: 'We manage both! We provide vacant home preservation so you arrive to a fully stocked, spotless residence. We also oversee primary homes where active owners want to delegate building contracts, housekeeping, chauffeuring, and bills to an elite single administrative hub.'
    },
    {
      q: 'Are custom cleaning services included?',
      a: 'Golden Service includes a light housekeeping touch-up after each monthly inspection. Full end-of-tenancy deep cleans, precision carpet steaming, wall sanitizing, or daily maid rosters can be separately coordinated at preferred resident rates.'
    },
    {
      q: 'Do you use trusted, insured contractors?',
      a: 'Absolutely. Every builder, carpenter, electric technician, or Safe-Gas professional we deploy is fully vetted, registered, and carries extensive public indemnity insurance. Our supervisors personally manage and inspect their work stages on-site.'
    },
    {
      q: 'What happens if I live abroad or travel constantly?',
      a: 'This is where Alonz truly shines. You receive regular photographic inspector briefs, detailed accounting ledgers, and constant support on WhatsApp. We act as your physical, reliable on-the-ground eyes and ears in London.'
    },
    {
      q: 'Is there a minimum contract commitment?',
      a: 'Our standard terms are 12 months for the Golden Service and 24 months for vacant property Silver Service. This timeline allows us to lock in preferred commercial rates with certified engineers and execute seasonal care cycles flawlessly.'
    },
    {
      q: 'How do we get started?',
      a: 'Simply choose a tier and request a consultation. Our founder Bilal will schedule an in-person viewing of your residence, audit current systems, complete keys handover, and set up your ledger and float deposit.'
    }
  ];

  return (
    <div id="pricing-page-wrapper" className="bg-white min-h-screen pt-28 pb-12">
      
      {/* 1. HERO HEADER */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block mb-3 font-mono"
        >
          Management Retainers
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight font-sans max-w-4xl mx-auto leading-tight"
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Choose the perfect plan for your home — or customise one to match your lifestyle.
        </motion.p>
      </section>

      {/* 2. THE THREE PACKAGE CARDS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all ${pkg.style}`}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className={`text-[10px] font-mono tracking-widest font-extrabold uppercase px-3 py-1 rounded-full ${pkg.name === 'Golden Service' ? 'bg-black text-[#E2B344]' : pkg.name === 'Silver Service' ? 'bg-zinc-200 text-zinc-800' : 'bg-zinc-800 text-white'}`}>
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-inherit">{pkg.name}</h3>
                <p className="mt-3 text-sm opacity-80 leading-relaxed font-normal min-h-[50px]">{pkg.description}</p>
                
                <div className="mt-6 pb-6 border-b border-inherit/15">
                  <span className="text-4xl sm:text-5.5xl font-extrabold">{pkg.price}</span>
                  <span className="text-sm opacity-70 ml-1">{pkg.duration}</span>
                </div>

                <ul className="mt-8 space-y-4 text-inherit">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-inherit/15 text-inherit flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <button
                  onClick={onNavigateContact}
                  className={`w-full block text-center font-extrabold py-4 px-6 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-transform active:scale-98 cursor-pointer ${pkg.buttonStyle}`}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. COMPARISON MATIRX / TABLE */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100 mb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <div className="text-left max-w-2xl mb-12">
            <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">Side by Side</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-sans mt-3">
              Compare All Plans
            </h2>
            <div className="w-12 h-1 bg-[#E2B344] mt-4 rounded-full" />
          </div>

          {/* Table container responsive */}
          <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-zinc-950/2.5 text-zinc-900 border-b border-zinc-200 font-bold text-xs font-mono uppercase tracking-widest">
                    <th className="py-5 px-6 font-semibold">Features & Service Boundaries</th>
                    <th className="py-5 px-5 font-semibold text-[#B98F32]">Golden Service</th>
                    <th className="py-5 px-5 font-semibold">Silver Service</th>
                    <th className="py-5 px-5 font-semibold">Tailored Package</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-sm">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/40 transition-colors">
                      <td className="py-4.5 px-6 font-bold text-zinc-800 font-sans">{row.feature}</td>
                      <td className="py-4.5 px-5 text-[#B98F32] font-extrabold">{row.golden}</td>
                      <td className="py-4.5 px-5 font-semibold text-zinc-500">{row.silver}</td>
                      <td className="py-4.5 px-5 font-semibold text-zinc-900">{row.tailored}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Disclaimer list */}
            <div className="bg-zinc-50/50 p-6 border-t border-zinc-200/60 flex items-start gap-3">
              <Info className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                All package prices are subject to London site audits and exclude VAT. Cost of third-party supplier parts and materials used during building refits and plumbers callouts are charged directly from your float ledger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "EVERY PACKAGE INCLUDES" BOXES */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">Standard Accoutrements</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mt-3 font-sans">
            Every Package Includes
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base font-normal">
            We hold ourselves to absolute standards of administration, compliance, and emergency safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {includes.map((inc, i) => (
            <div key={i} className="border border-zinc-100/80 p-6 rounded-2xl bg-white shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#E2B344]/10 text-[#B98F32] flex items-center justify-center font-bold font-mono text-xs">
                  {i + 1}
                </div>
                <h4 className="text-base font-extrabold text-zinc-900 font-sans">{inc.title}</h4>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed">{inc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ACCORDION FAQ REGISTRY */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100 mb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">Client Inquiries</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-sans mt-3">
              Everything You Need to Know
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-3 font-mono uppercase tracking-widest font-bold">About Alonz Homes Property Management</p>
          </div>

          {/* Faq Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-zinc-200/50 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center font-extrabold text-zinc-950 hover:text-[#B98F32] transition-colors"
                  >
                    <span className="flex items-start gap-3.5 pr-4">
                      <HelpIcon className="h-5 w-5 text-[#B98F32] mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold leading-relaxed font-sans">{faq.q}</span>
                    </span>
                    <ChevronRight className={`h-5 w-5 text-zinc-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#B98F32]' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-zinc-500 text-sm leading-relaxed border-t border-dashed border-zinc-100 max-w-3xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-white border border-zinc-100 p-6 rounded-2xl max-w-sm mx-auto shadow-xs">
            <p className="text-zinc-500 text-sm">Still have questions?</p>
            <button 
              onClick={onNavigateContact}
              className="mt-3 inline-flex items-center gap-1 text-[#B98F32] font-bold text-sm hover:underline cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-6">
        <div className="bg-gradient-to-br from-[#1c1917] to-[#0c0a09] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-lg border border-[#E2B344]/25">
          {/* Ambient overlays */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E2B344]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto relative z-10 font-sans">
            Ready to secure elite, complete care for your London residence?
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
              Talk to Founders
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
