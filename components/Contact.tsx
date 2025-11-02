import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon } from './IconComponents';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Manage Your Property with Care</h2>
            <p className="mt-4 text-gray-600">
              Every great partnership starts with a conversation. Reach out to discuss your property, and we'll tailor the perfect management plan for you.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-5 w-5 text-gray-700" />
                <a href="tel:+447379761333" className="hover:text-[#E2B344] transition-colors">+447379761333</a>
              </div>
              <div className="flex items-center gap-4">
                <MailIcon className="h-5 w-5 text-gray-700" />
                <a href="mailto:info@alonzhomes.com" className="hover:text-[#E2B344] transition-colors">info@alonzhomes.com</a>
              </div>
              <div className="flex items-center gap-4">
                <LocationIcon className="h-5 w-5 text-gray-700" />
                <span>Head Office – London</span>
              </div>
            </div>
            <a href="#contact" className="mt-10 inline-block bg-[#E2B344] text-black font-semibold px-8 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
              Request Consultation
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