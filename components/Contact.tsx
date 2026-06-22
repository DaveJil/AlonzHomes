import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon } from './IconComponents';
import { useActiveText } from '../textStore';

const Contact: React.FC = () => {
  const heading = useActiveText('contact_heading', "Let's Manage Your Property with Care");
  const sub = useActiveText('contact_sub', "Every great partnership starts with a conversation. Reach out to discuss your property, and we'll tailor the perfect management plan for you.");
  const whatsappNum = useActiveText('hero_whatsapp_num');
  const emailAddress = useActiveText('hero_email_address');
  const addressVal = useActiveText('contact_address', '9 Court parade, East lane, North Wembley, London, HA0 3HU, UK');
  const ctaConsult = useActiveText('hero_cta_consult', 'Request Consultation');
  const cleanWhatsApp = whatsappNum.replace(/[^\d+]/g, '');

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
            <p className="mt-4 text-gray-600">
              {sub}
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-5 w-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-gray-400">WhatsApp & Support</div>
                  <a href={`tel:${cleanWhatsApp}`} className="hover:text-[#E2B344] transition-colors font-semibold text-gray-900 text-base">{whatsappNum}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="h-5 w-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Email</div>
                  <a href={`mailto:${emailAddress}`} className="hover:text-[#E2B344] transition-colors font-semibold text-gray-900 text-base">{emailAddress}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LocationIcon className="h-5 w-5 text-gray-700 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs uppercase font-mono tracking-wider text-gray-400 font-bold">Head Office</div>
                  <span className="text-gray-700 text-sm leading-relaxed block font-medium max-w-sm mt-0.5">
                    {addressVal}
                  </span>
                </div>
              </div>
            </div>
            <a href="#contact" className="mt-10 inline-block bg-[#E2B344] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
              {ctaConsult}
            </a>
          </div>

          {/* Right Side: Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2B344]" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2B344]" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Message" className="w-full px-4 py-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E2B344]"></textarea>
            </div>
            <button type="submit" className="w-full border border-gray-800 text-gray-800 font-semibold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all text-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
