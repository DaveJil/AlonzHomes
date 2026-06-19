import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Key, 
  Image as ImageIcon, 
  Eye, 
  Check, 
  RefreshCw, 
  ArrowLeft, 
  LogOut, 
  Search, 
  HelpCircle, 
  Globe, 
  Sliders, 
  Grid,
  Sparkles,
  Info
} from 'lucide-react';
import { INITIAL_IMAGES, setImageUrl, resetImageUrl, useActiveImage } from '../imageStore';

interface AdminPageProps {
  onNavigateHome: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onNavigateHome }) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('alonz_admin_authenticated') === 'true';
    } catch {
      return false;
    }
  });
  const [errorMsg, setErrorMsg] = useState('');
  
  // Dynamic search and filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'home' | 'portfolio' | 'about' | 'special'>('all');

  // Input states for each image key
  const [imageInputs, setImageInputs] = useState<{ [key: string]: string }>(() => {
    const initial: { [key: string]: string } = {};
    INITIAL_IMAGES.forEach(img => {
      // Fetch active current value (from localStorage overlay or default)
      try {
        const stored = localStorage.getItem(`alonz_homes_override_img_${img.key}`);
        initial[img.key] = stored || img.defaultUrl;
      } catch {
        initial[img.key] = img.defaultUrl;
      }
    });
    return initial;
  });

  // Success notifications for saved actions
  const [savedKeys, setSavedKeys] = useState<{ [key: string]: boolean }>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = passcode.trim().toLowerCase();
    
    // The passcode is set to "alonzhomes" or simply "admin" for easy testing/auth
    if (cleanCode === 'alonzhomes' || cleanCode === 'admin' || cleanCode === 'alonzhomes2026') {
      setIsAuthenticated(true);
      setErrorMsg('');
      try {
        sessionStorage.setItem('alonz_admin_authenticated', 'true');
      } catch (err) {
        console.warn(err);
      }
    } else {
      setErrorMsg('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode('');
    try {
      sessionStorage.removeItem('alonz_admin_authenticated');
    } catch (err) {
      console.warn(err);
    }
  };

  const handleInputChange = (key: string, val: string) => {
    setImageInputs(prev => ({
      ...prev,
      [key]: val
    }));
  };

  const handleApplyChange = (key: string) => {
    const url = imageInputs[key] || '';
    setImageUrl(key, url);
    
    // Trigger localized visual feedback
    setSavedKeys(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setSavedKeys(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const handleReset = (key: string, originalUrl: string) => {
    resetImageUrl(key);
    setImageInputs(prev => ({
      ...prev,
      [key]: originalUrl
    }));

    // Trigger feedback
    setSavedKeys(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setSavedKeys(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  // Group configurations based on tags
  const getCategory = (key: string): string => {
    if (key.includes('hero') || key.includes('home')) return 'home';
    if (key.includes('project_') || key.includes('projects_page')) return 'portfolio';
    if (key.includes('about')) return 'about';
    return 'special'; // testimonial, bilal_headshot, etc.
  };

  const filteredImages = INITIAL_IMAGES.filter(img => {
    const matchesSearch = 
      img.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
      img.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === 'all') return matchesSearch;
    return matchesSearch && getCategory(img.key) === selectedFilter;
  });

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-28 pb-20 select-none">
      
      {!isAuthenticated ? (
        /* LOGIN PORTAL SCREEN */
        <div className="container mx-auto px-4 max-w-md mt-12 sm:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-stone-200/80 rounded-3xl p-8 shadow-xl text-center"
          >
            <div className="w-16 h-16 bg-[#E2B344]/15 rounded-full flex items-center justify-center mx-auto text-[#B98F32] mb-6">
              <Key className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold text-stone-900 font-sans">Staff Admin Access</h2>
            <p className="text-gray-500 text-xs mt-2 mb-6">
              Authorized Alonz Homes personnel configuration engine. Enter passcode to proceed.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-wider text-stone-500 text-left mb-2">
                  Staff Passcode
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="e.g. alonzhomes"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 focus:border-[#E2B344] focus:ring-1 focus:ring-[#E2B344] rounded-xl px-4 py-3 text-stone-900 text-center font-semibold text-sm outline-none transition"
                    autoFocus
                  />
                </div>
                {errorMsg && (
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-red-600 text-[11px] mt-2 font-medium"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-sm mt-2 cursor-pointer"
              >
                Verify & Open Dashboard
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-[10px] font-mono text-stone-400">
              <span>Code hint: <b className="text-stone-600">alonzhomes</b></span>
              <button 
                onClick={onNavigateHome}
                className="hover:text-stone-900 transition flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3 h-3" /> Back to Site
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        /* MAIN ADMIN INTERFACE SCREEN */
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* HEADER CONSOLE */}
          <div className="bg-white border border-stone-200/80 rounded-3xl p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-stone-400">Admin Live Connection Mode</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-800 tracking-tight font-sans mt-1">Alonz Media Engine</h1>
              <p className="text-gray-500 text-xs sm:text-sm">Manage, edit, and audit photos & backdrops directly with instant synchronization.</p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onNavigateHome}
                className="border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold px-4 py-2.5 rounded-full text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <Globe className="w-4 h-4 text-stone-400" /> Go to Live Site
              </button>
              <button
                onClick={handleLogout}
                className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-4 py-2.5 rounded-full text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-stone-400" /> Disconnect
              </button>
            </div>
          </div>

          {/* DOCUMENTATION PANEL */}
          <div className="bg-gradient-to-r from-stone-900 to-stone-850 text-stone-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-md">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-sans">
              <Info className="text-[#E2B344] w-5 h-5 flex-shrink-0" />
              How to Change Website Photos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 text-stone-300 text-xs leading-relaxed">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[#E2B344] font-mono font-extrabold text-sm block mb-1">STEP 1</span>
                Find a premium photograph on a licensing site like <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-[#E2B344] underline hover:text-white">Unsplash</a>, <a href="https://pexels.com" target="_blank" rel="noopener noreferrer" className="text-[#E2B344] underline hover:text-white">Pexels</a>, or any public asset server.
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[#E2B344] font-mono font-extrabold text-sm block mb-1">STEP 2</span>
                Right-click the chosen image and select <b>"Copy Image Address"</b> or <b>"Copy Image Link"</b> (ensure it ends with query filters or standard image extensions).
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <span className="text-[#E2B344] font-mono font-extrabold text-sm block mb-1">STEP 3</span>
                Paste the URL into its respective input field below and hit <b>"Apply Photo"</b>. Your change is saved instantly in your workspace session!
              </div>
            </div>
          </div>

          {/* CONTROLS & FILTERING RAIL */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 bg-stone-200/60 p-1 rounded-2xl">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedFilter === 'all' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Images ({INITIAL_IMAGES.length})
              </button>
              <button
                onClick={() => setSelectedFilter('home')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedFilter === 'home' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Homepage ({INITIAL_IMAGES.filter(i => getCategory(i.key) === 'home').length})
              </button>
              <button
                onClick={() => setSelectedFilter('portfolio')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedFilter === 'portfolio' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Portfolio Grid ({INITIAL_IMAGES.filter(i => getCategory(i.key) === 'portfolio').length})
              </button>
              <button
                onClick={() => setSelectedFilter('about')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedFilter === 'about' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                About Page ({INITIAL_IMAGES.filter(i => getCategory(i.key) === 'about').length})
              </button>
              <button
                onClick={() => setSelectedFilter('special')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedFilter === 'special' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Testimonials & Team ({INITIAL_IMAGES.filter(i => getCategory(i.key) === 'special').length})
              </button>
            </div>

            {/* Search inputs */}
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by photo label..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="bg-white border border-stone-200 focus:border-[#E2B344] rounded-2xl pl-10 pr-4 py-2.5 text-stone-800 text-xs tracking-wide outline-none w-full md:w-64 transition"
              />
            </div>
          </div>

          {/* EDITABLE IMAGE BENTO BLOCK CARD SECTION */}
          {filteredImages.length === 0 ? (
            <div className="bg-white border border-stone-150 rounded-3xl p-12 text-center text-stone-500 text-xs">
              No matching photo settings found for your filters. Try clearing search queries.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredImages.map(img => {
                const currentInputValue = imageInputs[img.key] || '';
                const isModified = currentInputValue !== img.defaultUrl;
                const wasSaved = savedKeys[img.key];
                
                return (
                  <motion.div
                    key={img.key}
                    layout="position"
                    className="bg-white border border-stone-200/80 rounded-3xl overflow-hidden p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Subtitle & Header Tag Info */}
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <span className="text-[9px] uppercase font-mono tracking-widest bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full font-bold">
                          {getCategory(img.key).toUpperCase()} ENGINE CODE: {img.key}
                        </span>
                        
                        {isModified && (
                          <span className="text-[9px] uppercase font-mono tracking-widest bg-[#E2B344]/15 text-[#B98F32] px-2.5 py-1 rounded-full font-bold">
                            OVERRIDE ACTIVE
                          </span>
                        )}
                      </div>

                      {/* Display Label */}
                      <h4 className="text-base font-bold text-stone-900 font-sans tracking-tight">
                        {img.label}
                      </h4>
                      <p className="text-gray-500 text-[11px] mt-1 leading-relaxed mb-4">
                        {img.description}
                      </p>

                      {/* Photo Live Responsive Stage Preview */}
                      <div className="relative h-44 sm:h-48 bg-stone-100 rounded-2xl overflow-hidden border border-stone-100 mb-4 group select-none">
                        <img
                          src={currentInputValue || 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop'}
                          alt={img.label}
                          onError={(e) => {
                            // Fallback gracefully on broken inputs
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=600&auto=format&fit=crop';
                          }}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="text-white text-[10px] font-mono bg-stone-950/70 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-[#E2B344]" /> Active Aspect Ratio Preview
                          </span>
                        </div>
                      </div>

                      {/* Text Input Block for URL */}
                      <div className="space-y-1.5 mb-4">
                        <label className="text-[9px] uppercase font-mono tracking-wider text-stone-400 block font-bold">
                          Digital Image Link / URL address:
                        </label>
                        <input
                          type="text"
                          value={currentInputValue}
                          onChange={(e) => handleInputChange(img.key, e.target.value)}
                          placeholder="Paste a secure secure link here (https://...)"
                          className="w-full bg-stone-50 border border-stone-200 focus:border-[#E2B344] rounded-xl px-3.5 py-2.5 text-xs text-stone-800 outline-none transition font-sans text-ellipsis overflow-hidden"
                        />
                      </div>
                    </div>

                    {/* ACTIONS SUB ROW CONTROL */}
                    <div className="flex gap-2.5 pt-2 border-t border-stone-100 mt-2">
                      <button
                        onClick={() => handleApplyChange(img.key)}
                        className={`flex-1 font-bold py-2.5 rounded-full text-[11px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer shadow-xs ${
                          wasSaved 
                            ? 'bg-green-600 text-white' 
                            : 'bg-stone-900 hover:bg-stone-800 text-white'
                        }`}
                      >
                        {wasSaved ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#E2B344] stroke-[3]" /> Saved Link!
                          </>
                        ) : (
                          <>
                            <Check className="w-3.5 h-3.5 text-white" /> Apply Photo
                          </>
                        )}
                      </button>

                      {img.defaultUrl && (
                        <button
                          onClick={() => handleReset(img.key, img.defaultUrl)}
                          className="border border-stone-200 hover:bg-stone-50 text-stone-500 hover:text-stone-800 font-bold px-4 py-2.5 rounded-full text-[10px] uppercase tracking-wider transition flex items-center gap-1 cursor-pointer"
                          title="Reset to Alonz Standard Original"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Reset
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* BOTTOM COPYRIGHT SUMMARY */}
          <div className="mt-16 text-center text-[10px] text-stone-400 font-mono">
            ALONZ HOMES LTD • ADVANCED CUSTOMIZER CONSOLE V1.2 • SESSION TOKEN SECURE
          </div>

        </div>
      )}

    </div>
  );
};

export default AdminPage;
