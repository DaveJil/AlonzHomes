import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Clock, ShieldCheck, Key, RefreshCw, Send, CheckCircle, MapPin } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  const postcodes = [
    { code: 'SW3', name: 'Chelsea' },
    { code: 'W11', name: 'Holland Park' },
    { code: 'SW1X', name: 'Belgravia' },
    { code: 'W8', name: 'Kensington' },
    { code: 'SW7', name: 'South Kensington' },
    { code: 'SW10', name: 'West Brompton' },
    { code: 'E14', name: 'Canary Wharf' },
    { code: 'SW19', name: 'Wimbledon' },
    { code: 'SW6', name: 'Fulham' },
    { code: 'W1G', name: 'Marylebone' },
    { code: 'W2', name: 'Paddington' },
    { code: 'N1', name: 'Islington' }
  ];

  return (
    <div id="contact-page-wrapper" className="bg-white min-h-screen pt-28 pb-12">
      {/* 1. HEADER HERO */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#E2B344] font-bold text-xs uppercase tracking-widest block mb-3 font-mono"
        >
          Get In Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight font-sans max-w-4xl mx-auto leading-tight"
        >
          Let's Begin the Conversation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          We're here to help with property management, renovations, cleaning, and every service your home needs. Contact us anytime — we respond quickly.
        </motion.p>
      </section>

      {/* 2. FORM & INFO CARDS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2 mb-2 font-sans">
              Our Contact Registry
            </h3>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm transition-shadow"
            >
              <div className="p-3 bg-[#E2B344]/15 rounded-xl text-[#B98F32]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Direct Office</h4>
                <a href="tel:+442035042429" className="text-lg font-bold text-gray-900 hover:text-[#E2B344] transition-colors mt-1 block">
                  +44 (0)20 3504 2429
                </a>
                <p className="text-gray-500 text-xs mt-1">Mon - Fri, 9am - 6pm GMT</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm transition-shadow"
            >
              <div className="p-3 bg-[#E2B344]/15 rounded-xl text-[#B98F32]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Email Registry</h4>
                <a href="mailto:info@alonzhomes.com" className="text-lg font-bold text-gray-900 hover:text-[#E2B344] transition-colors mt-1 block">
                  info@alonzhomes.com
                </a>
                <p className="text-gray-500 text-xs mt-1">We typically reply within 2 hours</p>
              </div>
            </motion.div>

            {/* Live Chat Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm transition-shadow"
            >
              <div className="p-3 bg-green-500/10 rounded-xl text-green-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">WhatsApp Direct</h4>
                <a href="https://wa.me/447471066665" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-green-600 hover:text-green-700 transition-colors mt-1 flex items-center gap-1">
                  <span>+44 (0)747 10 66665</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2.5 py-0.5 rounded-full font-sans uppercase font-extrabold tracking-wide">WhatsApp</span>
                </a>
                <p className="text-gray-500 text-xs mt-1">Available for emergency and support</p>
              </div>
            </motion.div>

            {/* Head Office Address Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm transition-shadow"
            >
              <div className="p-3 bg-[#E2B344]/15 rounded-xl text-[#B98F32]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">Head Office Address</h4>
                <div className="text-sm font-bold text-gray-900 mt-1.5 leading-relaxed">
                  9 Court parade, East lane,<br />
                  North Wembley, London,<br />
                  HA0 3HU, UK
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Send a Message</h3>
            <p className="text-gray-500 text-sm mb-8">Fill out the prompt below to submit an inquiry straight to our management desk.</p>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-950">Thank you, {formData.name}!</h4>
                  <p className="text-green-800/80 text-sm mt-2 max-w-sm">
                    Your inquiry has been successfully transmitted. Our team will review your requirements and reach out within 2-4 hours.
                  </p>
                </div>
                <button 
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-4 px-6 py-2.5 text-xs text-green-800 font-extrabold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lord Sterling" 
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E2B344] focus:border-transparent transition-all text-sm font-semibold text-gray-900" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@domain.com" 
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E2B344] focus:border-transparent transition-all text-sm font-semibold text-gray-900" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Subject (Optional)</label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Property Management Services SW3" 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E2B344] focus:border-transparent transition-all text-sm font-semibold text-gray-900" 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Inquiry / Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5} 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your property, management needs, or design project..." 
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#E2B344] focus:border-transparent transition-all text-sm font-semibold text-gray-900" 
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E2B344] text-black font-extrabold px-10 py-4 rounded-full hover:bg-opacity-95 transition-all text-sm shadow-md hover:scale-101 cursor-pointer active:scale-99"
                >
                  <span>Submit Inquiry</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. MAP & POSTCODES SECTION */}
      <section className="bg-gray-50 py-20 border-y border-gray-100 overflow-hidden mb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Postcode coverage info */}
            <div className="lg:col-span-5 text-left">
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest font-mono">Territorial Coverage</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-sans mt-3">
                Serving All Major London Boroughs
              </h2>
              <div className="w-12 h-1 bg-[#E2B344] mt-4 mb-6 rounded-full" />
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Alonz Homes operates throughout Central and West London's most premier postcodes. Key areas we inspect and manage regularly include Chelsea, Kensington, Belgravia, and Wimbledon.
              </p>

              {/* Grid of Postcodes */}
              <div className="grid grid-cols-2 gap-4">
                {postcodes.slice(0, 8).map((area) => (
                  <div key={area.code} className="flex items-center gap-2.5 bg-white border border-gray-200/60 p-3 rounded-xl shadow-xs">
                    <span className="text-[#E2B344] font-bold text-xs bg-[#E2B344]/10 px-2 py-0.5 rounded-md font-mono">{area.code}</span>
                    <span className="text-gray-700 text-xs font-bold">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Stylized high-contrast map element */}
            <div className="lg:col-span-7 h-[420px] relative rounded-3xl bg-[#111111] overflow-hidden shadow-xl border border-gray-800 p-8 flex flex-col justify-end">
              {/* Artistic architectural line grid overlay */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Hand drawn SVG representing Thames & boroughs */}
              <svg className="absolute inset-0 w-full h-full text-zinc-800/80 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" fill="none">
                {/* River Thames */}
                <path d="M -10 240 Q 150 250 300 230 T 550 210 Q 700 210 810 230" stroke="#1D2A44" strokeWidth="24" strokeLinecap="round" fill="none" className="opacity-70" />
                {/* London boroughs outlines dotted */}
                <circle cx="180" cy="120" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="340" cy="180" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="560" cy="140" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="450" cy="280" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Dotted lines radiating to locations */}
                <path d="M 280 160 L 320 200" stroke="#E2B344" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 400 130 L 340 200" stroke="#E2B344" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 220 280 L 320 200" stroke="#E2B344" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Pin Labels */}
              <div className="absolute top-[35%] left-[20%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full animate-ping absolute" />
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full relative" />
                <span className="mt-1.5 text-[10px] font-mono bg-black/90 text-white border border-gray-800 px-1.5 py-0.5 rounded whitespace-nowrap">Kensington W8</span>
              </div>

              <div className="absolute top-[48%] left-[40%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full animate-ping absolute" />
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full relative" />
                <span className="mt-1.5 text-[10px] font-mono bg-black/90 text-[#E2B344] border border-gray-800 px-1.5 py-0.5 rounded whitespace-nowrap">Chelsea SW3</span>
              </div>

              <div className="absolute top-[28%] left-[58%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full animate-ping absolute" />
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full relative" />
                <span className="mt-1.5 text-[10px] font-mono bg-black/90 text-white border border-gray-800 px-1.5 py-0.5 rounded whitespace-nowrap">Mayfair W1</span>
              </div>

              <div className="absolute top-[70%] left-[45%] flex flex-col items-center">
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full animate-ping absolute" />
                <span className="w-2.5 h-2.5 bg-[#E2B344] rounded-full relative" />
                <span className="mt-1.5 text-[10px] font-mono bg-black/90 text-white border border-gray-800 px-1.5 py-0.5 rounded whitespace-nowrap">Wimbledon SW19</span>
              </div>

              {/* In-map Card */}
              <div className="relative z-10 bg-black/75 backdrop-blur-md border border-gray-800 p-5 rounded-2xl max-w-sm">
                <h4 className="text-white text-sm font-bold flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Active Support Line
                </h4>
                <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                  Our service cars and local inspection team traverse these postcodes daily, assuring response times below 30 minutes for emergency line requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "YOU'RE IN SAFE HANDS" TRUST SEC */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E2B344] text-xs font-bold uppercase tracking-widest font-mono">Uncompromising Standards</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight mt-3 font-sans">
            You're In Safe Hands
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base">
            We understand the importance of trusting someone with your home. Every part of our service is built around reliability, security, and high-fidelity standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Item 1 */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-5">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Fast, Reliable Response</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              From urgent issues to routine requests, our team responds quickly and takes action without delays.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-5">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Transparent Updates</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Clear updates, monthly reports, and direct access to your management team and accounts dashboard at any time.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-5">
              <Key className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Secure Key Handling</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Your keys are stored, tracked, and managed with strict security protocols to ensure complete peace of mind.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-xs">
            <div className="w-12 h-12 bg-[#E2B344]/10 rounded-xl flex items-center justify-center text-[#B98F32] mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 font-sans">Vetted & Insured Partners</h4>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              We work only with certified, fully insured professionals — all carefully selected and supervised by our team.
            </p>
          </div>
        </div>
      </section>

      {/* 6. COZY LUXURY BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-6">
        <div className="bg-gradient-to-br from-[#1c1917] to-[#0c0a09] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-lg border border-[#E2B344]/25">
          {/* Atmospheric glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E2B344]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl md:text-3.5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto relative z-10 font-sans">
            Ready to get started? Let us take care of your home with professionalism and complete attention to detail.
          </h3>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <button 
              onClick={onNavigateHome}
              className="bg-[#E2B344] text-black font-extrabold px-8 py-3.5 rounded-full hover:bg-opacity-95 text-xs sm:text-sm shadow-md transition-all uppercase tracking-wider cursor-pointer"
            >
              Explore Services
            </button>
            <a 
              href="mailto:info@alonzhomes.com"
              className="border border-white/40 text-white font-extrabold px-8 py-3.5 rounded-full hover:bg-white hover:text-black hover:border-white text-xs sm:text-sm transition-all uppercase tracking-wider cursor-pointer"
            >
              Email Executive Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
