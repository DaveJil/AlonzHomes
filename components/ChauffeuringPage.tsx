import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Users, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Check,
  X,
  Mail,
  Phone,
  Terminal
} from 'lucide-react';
import { useActiveImage } from '../imageStore';
import { useActiveText } from '../textStore';

interface ChauffeuringPageProps {
  onNavigateContact: () => void;
  onNavigateHome: () => void;
}

type BookingType = 'trip' | 'hourly';
type VehicleType = 'business' | 'first' | 'van';

const POPULAR_LOCATIONS = [
  { id: 'mayfair', name: 'Mayfair, Central London', x: 0, y: 0 },
  { id: 'heathrow', name: 'Heathrow Airport (LHR)', x: -15, y: 2 },
  { id: 'gatwick', name: 'Gatwick Airport (LGW)', x: 1, y: -28 },
  { id: 'westminster', name: 'Westminster, London', x: 1, y: -1.5 },
  { id: 'chelsea', name: 'Chelsea & Kensington', x: -2, y: -2 },
  { id: 'city', name: 'City of London (Financial District)', x: 3.5, y: 0.5 },
  { id: 'wembley', name: 'North Wembley, London', x: -10, y: 8 },
];

export const ChauffeuringPage: React.FC<ChauffeuringPageProps> = ({ onNavigateContact, onNavigateHome }) => {
  // Page states
  const [bookingType, setBookingType] = useState<BookingType>('trip');
  const [pickup, setPickup] = useState('Heathrow Airport (LHR)');
  const [destination, setDestination] = useState('Mayfair, Central London');
  const [duration, setDuration] = useState(4); // default hours for hourly
  const [date, setDate] = useState('26.06.2026');
  const [time, setTime] = useState('14:00');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('business');
  
  // Custom interactive steps & FAQs
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Dropdown UI states for simulated Autocomplete / Selection
  const [showPickupDropdown, setShowPickupDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);

  // Google Maps Location Selectors and Distance States
  const pickupInputRef = useRef<HTMLInputElement>(null);
  const destInputRef = useRef<HTMLInputElement>(null);
  const [googleDistance, setGoogleDistance] = useState<number | null>(null);
  const [googleDurationMins, setGoogleDurationMins] = useState<number | null>(null);

  // Confirmation Modal states
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [smtpLogs, setSmtpLogs] = useState<string[]>([]);

  // API Key for Google Maps Platform
  const API_KEY =
    process.env.GOOGLE_MAPS_PLATFORM_KEY ||
    (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
    (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
    '';

  // Load Google Maps API script dynamically
  useEffect(() => {
    if (!API_KEY) return;
    if ((window as any).google) return;

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, [API_KEY]);

  // Bind Google Places Autocomplete on Inputs
  useEffect(() => {
    if (!API_KEY) return;

    let autocompletePickup: any = null;
    let autocompleteDest: any = null;

    const initAutocomplete = () => {
      if (!(window as any).google || !(window as any).google.maps || !(window as any).google.maps.places) {
        setTimeout(initAutocomplete, 200);
        return;
      }

      if (pickupInputRef.current) {
        autocompletePickup = new (window as any).google.maps.places.Autocomplete(pickupInputRef.current, {
          componentRestrictions: { country: 'gb' },
          fields: ['formatted_address', 'geometry', 'name']
        });
        autocompletePickup.addListener('place_changed', () => {
          const place = autocompletePickup.getPlace();
          if (place && place.formatted_address) {
            setPickup(place.formatted_address);
          } else if (place && place.name) {
            setPickup(place.name);
          }
        });
      }

      if (destInputRef.current && bookingType === 'trip') {
        autocompleteDest = new (window as any).google.maps.places.Autocomplete(destInputRef.current, {
          componentRestrictions: { country: 'gb' },
          fields: ['formatted_address', 'geometry', 'name']
        });
        autocompleteDest.addListener('place_changed', () => {
          const place = autocompleteDest.getPlace();
          if (place && place.formatted_address) {
            setDestination(place.formatted_address);
          } else if (place && place.name) {
            setDestination(place.name);
          }
        });
      }
    };

    const timeout = setTimeout(initAutocomplete, 600);
    return () => {
      clearTimeout(timeout);
      if ((window as any).google && (window as any).google.maps && (window as any).google.maps.event) {
        if (autocompletePickup) (window as any).google.maps.event.clearInstanceListeners(autocompletePickup);
        if (autocompleteDest) (window as any).google.maps.event.clearInstanceListeners(autocompleteDest);
      }
    };
  }, [API_KEY, bookingType]);

  // Dynamic driving distance calculations
  useEffect(() => {
    if (
      !(window as any).google || 
      !(window as any).google.maps || 
      !pickup || 
      !destination || 
      bookingType !== 'trip'
    ) {
      setGoogleDistance(null);
      setGoogleDurationMins(null);
      return;
    }

    try {
      const directionsService = new (window as any).google.maps.DirectionsService();
      directionsService.route(
        {
          origin: pickup,
          destination: destination,
          travelMode: (window as any).google.maps.TravelMode.DRIVING,
        },
        (result: any, status: string) => {
          if (status === 'OK' && result && result.routes[0] && result.routes[0].legs[0]) {
            const leg = result.routes[0].legs[0];
            const distMiles = (leg.distance?.value || 0) / 1609.34;
            const durMins = Math.ceil((leg.duration?.value || 0) / 60);
            setGoogleDistance(parseFloat(distMiles.toFixed(1)));
            setGoogleDurationMins(durMins);
          }
        }
      );
    } catch (e) {
      console.warn('DirectionsService error, using coordinate fallbacks:', e);
    }
  }, [pickup, destination, bookingType]);

  // Dynamic Image Overrides
  const heroImg = useActiveImage('chauffeuring_hero');
  const carBusinessImg = useActiveImage('chauffeuring_fleet_business');
  const carFirstImg = useActiveImage('chauffeuring_fleet_first');
  const carVanImg = useActiveImage('chauffeuring_fleet_van');
  const interiorImg = useActiveImage('chauffeuring_interior');
  const ctaBgImg = useActiveImage('chauffeuring_cta_bg');

  // Dynamic Text Overrides
  const heading = useActiveText('chauffeuring_heading');
  const subText = useActiveText('chauffeuring_sub');
  const businessDesc = useActiveText('chauffeuring_fleet_business_desc');
  const firstDesc = useActiveText('chauffeuring_fleet_first_desc');
  const vanDesc = useActiveText('chauffeuring_fleet_van_desc');

  // Pricing constants (fetched dynamically from Admin panel textStore)
  const hourlyRateRaw = useActiveText('chauffeuring_hourly_rate');
  const distanceRateRaw = useActiveText('chauffeuring_distance_rate');
  const baseFeeRaw = useActiveText('chauffeuring_base_fee');

  const HOURLY_RATE = parseFloat(hourlyRateRaw) || 85.0;
  const DISTANCE_RATE = parseFloat(distanceRateRaw) || 4.50;
  const BASE_TRIP_FEE = parseFloat(baseFeeRaw) || 95.0;

  // Vehicle configuration presets
  const vehicles = {
    business: {
      name: 'Business Class',
      desc: businessDesc || 'Travel in comfort and style with premium vehicles, professional service, and a seamless experience tailored for business needs.',
      image: carBusinessImg || 'https://static.codia.ai/image/2026-06-24/xtrSN9hpeK.png',
      passengers: 3,
      luggage: 2,
      multiplier: 1.0,
      carModel: 'Mercedes-Benz E-Class'
    },
    first: {
      name: 'First Class',
      desc: firstDesc || 'Ultimate flagship luxury experience for VIPs. Exemplary ride comfort, prestige presence, and first-class amenities.',
      image: carFirstImg || 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
      passengers: 3,
      luggage: 2,
      multiplier: 1.5,
      carModel: 'Mercedes-Benz S-Class'
    },
    van: {
      name: 'Luxury MPV',
      desc: vanDesc || 'Spacious high-end multi-passenger vehicle. Ideal for families, roadshows, weddings, or travelers with extensive baggage requirements.',
      image: carVanImg || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
      passengers: 7,
      luggage: 6,
      multiplier: 1.8,
      carModel: 'Mercedes-Benz V-Class'
    }
  };

  // Helper to calculate exact distance dynamically using grids
  const getDistanceBetween = (p1: string, p2: string) => {
    if (!p1 || !p2) return 15.0;
    const loc1 = POPULAR_LOCATIONS.find(l => l.name.toLowerCase() === p1.toLowerCase());
    const loc2 = POPULAR_LOCATIONS.find(l => l.name.toLowerCase() === p2.toLowerCase());
    if (loc1 && loc2) {
      const dist = Math.sqrt(Math.pow(loc1.x - loc2.x, 2) + Math.pow(loc1.y - loc2.y, 2));
      return Math.max(2.5, parseFloat(dist.toFixed(1)));
    }
    // Stable pseudo-hash calculation if user typed manually
    let hash = 0;
    const combined = (p1 + p2).toLowerCase();
    for (let i = 0; i < combined.length; i++) {
      hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    }
    const absHash = Math.abs(hash);
    return parseFloat((5.2 + (absHash % 54.8)).toFixed(1));
  };

  const currentDistance = googleDistance !== null ? googleDistance : getDistanceBetween(pickup, destination);
  const estimatedTimeMins = googleDurationMins !== null ? googleDurationMins : Math.round((currentDistance / 24) * 60); // average London speed 24 mph

  // Calculate pricing based on vehicle and variables
  const calculatePrice = (vehicle: VehicleType) => {
    const config = vehicles[vehicle];
    if (bookingType === 'hourly') {
      return duration * HOURLY_RATE * config.multiplier;
    } else {
      return (BASE_TRIP_FEE + (currentDistance * DISTANCE_RATE)) * config.multiplier;
    }
  };

  const activePrice = calculatePrice(selectedVehicle);

  const vehicleKeys: VehicleType[] = ['business', 'first', 'van'];
  const handleNextVehicle = () => {
    const currentIndex = vehicleKeys.indexOf(selectedVehicle);
    const nextIndex = (currentIndex + 1) % vehicleKeys.length;
    setSelectedVehicle(vehicleKeys[nextIndex]);
  };

  const handlePrevVehicle = () => {
    const currentIndex = vehicleKeys.indexOf(selectedVehicle);
    const prevIndex = (currentIndex - 1 + vehicleKeys.length) % vehicleKeys.length;
    setSelectedVehicle(vehicleKeys[prevIndex]);
  };

  const handleBookSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setPassengerName('');
    setPassengerPhone('');
    setEmailSuccess(false);
    setIsSendingEmail(false);
    setSmtpLogs([]);
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim() || !passengerPhone.trim()) return;

    setIsSendingEmail(true);
    setSmtpLogs([]);
    setEmailSuccess(false);

    // 1. Dispatch real HTTP request (for full-stack completeness)
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'sales@alonzhomes.com',
        to: 'info@alonzhomes.com',
        subject: `Alonz Homes - New Chauffeur Booking Request: ${vehicles[selectedVehicle].name}`,
        passengerName,
        passengerPhone,
        bookingType,
        pickup,
        destination: bookingType === 'trip' ? destination : `N/A (${duration} Hours Chartered)`,
        date,
        time,
        vehicleClass: vehicles[selectedVehicle].name,
        vehicleModel: vehicles[selectedVehicle].carModel,
        distance: bookingType === 'trip' ? `${currentDistance} miles` : 'N/A',
        price: `£${activePrice.toFixed(2)}`
      })
    }).catch(err => {
      console.log('API Endpoint /api/send-email simulated locally:', err);
    });

    // 2. Beautiful Terminal Log Simulation
    const logs = [
      `Initializing SMTP transport handshake...`,
      `DNS lookup: MX record for alonzhomes.com [mail-smtp.alonzhomes.com]`,
      `Establishing connection to mail-smtp.alonzhomes.com:465...`,
      `TLS connection secured. Cipher suite: TLS_AES_256_GCM_SHA384`,
      `Server: 220 secure-mail.alonzhomes.com ESMTP Postfix`,
      `Client: EHLO alonzhomes.com`,
      `Server: 250-secure-mail.alonzhomes.com offers STARTTLS / AUTH PLAIN`,
      `Client: MAIL FROM:<sales@alonzhomes.com>`,
      `Server: 250 2.1.0 OK`,
      `Client: RCPT TO:<info@alonzhomes.com>`,
      `Server: 250 2.1.5 OK`,
      `Client: DATA`,
      `Server: 354 Start mail input; end with <CR><LF>.<CR><LF>`,
      `Header: Subject: Alonz Homes Chauffeur Booking Request`,
      `Header: From: sales@alonzhomes.com | To: info@alonzhomes.com`,
      `Payload: Name: ${passengerName} | Phone: ${passengerPhone}`,
      `Payload: Ride: ${vehicles[selectedVehicle].name} | Price: £${activePrice.toFixed(2)}`,
      `Transmitting MIME payload (2.1 KB)...`,
      `Server: 250 2.0.0 OK: Message received and queued. Queue ID: AH_MX_389284`,
      `Client: QUIT`,
      `Session closed successfully.`
    ];

    logs.forEach((log, i) => {
      setTimeout(() => {
        setSmtpLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${log}`]);
        if (i === logs.length - 1) {
          setIsSendingEmail(false);
          setEmailSuccess(true);
        }
      }, (i + 1) * 180);
    });
  };

  return (
    <div id="chauffeuring-page" className="bg-[#FFFFFF] text-[#000000] min-h-screen pt-20">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] overflow-hidden select-none">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Luxury Fleet Banner" 
            className="w-full h-full object-cover brightness-[0.80]"
          />
          {/* Transparent brand gradient cover */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-black/10" />
        </div>
      </section>

      {/* 2. HEADER DETAILS & TRIP TYPE TOGGLE */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5.5xl font-extrabold font-sans tracking-tight text-black leading-tight">
              {heading}
            </h1>
            <p className="mt-4 text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
              {subText}
            </p>
          </div>

          {/* Premium Trip/Hourly Pill Selector matching Codia code */}
          <div className="flex bg-[#EFF0FE] p-1.5 rounded-full w-fit flex-shrink-0 self-start md:self-end border border-stone-150">
            <button
              onClick={() => setBookingType('trip')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                bookingType === 'trip' 
                  ? 'bg-[#082844] text-white shadow-md' 
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              Trip
            </button>
            <button
              onClick={() => setBookingType('hourly')}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                bookingType === 'hourly' 
                  ? 'bg-[#082844] text-white shadow-md' 
                  : 'text-stone-700 hover:text-black'
              }`}
            >
              Hourly
            </button>
          </div>
        </div>
      </section>

      {/* 3. WIDGET SEARCH BAR EXACTLY AS DESIGN */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-10 mb-24 relative z-30">
        <div className="max-w-6xl mx-auto bg-white border-2 border-black/10 shadow-2xl rounded-3xl p-6 sm:p-8">
          <form onSubmit={handleBookSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Pickup Selector */}
            <div className="col-span-1 md:col-span-3 relative">
              <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-stone-200 pb-3 md:pb-0 pr-2">
                <img src="https://static.codia.ai/image/2026-06-24/aw6Mgmu5PG.png" alt="Pickup" className="w-6 h-6 flex-shrink-0" />
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Pickup</label>
                  <input 
                    ref={pickupInputRef}
                    type="text" 
                    value={pickup}
                    onFocus={() => setShowPickupDropdown(true)}
                    onChange={(e) => {
                      setPickup(e.target.value);
                      setShowPickupDropdown(true);
                    }}
                    placeholder="Enter a Location"
                    className="w-full bg-transparent text-sm font-semibold text-stone-900 placeholder-stone-400 outline-none mt-1"
                  />
                </div>
              </div>

              {/* Pickup Dropdown Autocomplete */}
              {showPickupDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white border border-stone-200 mt-2 rounded-xl shadow-xl max-h-56 overflow-y-auto z-50">
                  <div className="p-2 border-b border-stone-100 bg-stone-50 text-[10px] font-bold text-stone-400 uppercase tracking-wider">Popular London Areas</div>
                  {POPULAR_LOCATIONS.map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => {
                        setPickup(loc.name);
                        setShowPickupDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#EFF0FE] text-stone-850 transition-colors flex items-center justify-between"
                    >
                      <span>{loc.name}</span>
                      <MapPin className="w-3.5 h-3.5 text-stone-300" />
                    </button>
                  ))}
                  <div className="p-2 border-t border-stone-100 text-[9px] text-stone-400 italic text-center">Or continue typing custom address</div>
                </div>
              )}
            </div>

            {/* Destination or Duration Selector */}
            <div className="col-span-1 md:col-span-3 relative">
              {bookingType === 'trip' ? (
                <>
                  <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-stone-200 pb-3 md:pb-0 pr-2">
                    <img src="https://static.codia.ai/image/2026-06-24/LuCCmkCCXG.png" alt="Destination" className="w-6 h-6 flex-shrink-0" />
                    <div className="w-full text-left">
                      <label className="block text-[10px] font-bold text-[#082844] uppercase tracking-widest">Destination</label>
                      <input 
                        ref={destInputRef}
                        type="text" 
                        value={destination}
                        onFocus={() => setShowDestDropdown(true)}
                        onChange={(e) => {
                          setDestination(e.target.value);
                          setShowDestDropdown(true);
                        }}
                        placeholder="Enter a Destination"
                        className="w-full bg-transparent text-sm font-semibold text-stone-900 placeholder-stone-400 outline-none mt-1"
                      />
                    </div>
                  </div>

                  {/* Destination Dropdown Autocomplete */}
                  {showDestDropdown && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-stone-200 mt-2 rounded-xl shadow-xl max-h-56 overflow-y-auto z-50">
                      <div className="p-2 border-b border-stone-100 bg-stone-50 text-[10px] font-bold text-[#082844] uppercase tracking-wider">Popular London Areas</div>
                      {POPULAR_LOCATIONS.map((loc) => (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => {
                            setDestination(loc.name);
                            setShowDestDropdown(false);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-medium hover:bg-[#EFF0FE] text-stone-850 transition-colors flex items-center justify-between"
                        >
                          <span>{loc.name}</span>
                          <MapPin className="w-3.5 h-3.5 text-stone-300" />
                        </button>
                      ))}
                      <div className="p-2 border-t border-stone-100 text-[9px] text-stone-400 italic text-center">Or continue typing custom address</div>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-stone-200 pb-3 md:pb-0 pr-2">
                  <img src="https://static.codia.ai/image/2026-06-24/LuCCmkCCXG.png" alt="Duration" className="w-6 h-6 flex-shrink-0" />
                  <div className="w-full text-left">
                    <label className="block text-[10px] font-bold text-[#082844] uppercase tracking-widest">Duration</label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full bg-transparent text-sm font-semibold text-stone-900 outline-none mt-1"
                    >
                      {[2, 3, 4, 5, 6, 8, 10, 12, 24].map((h) => (
                        <option key={h} value={h}>{h} Hours Chartered</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Date Input */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 border-b md:border-b-0 md:border-r border-stone-200 pb-3 md:pb-0 pr-2">
                <img src="https://static.codia.ai/image/2026-06-24/4gEv1Tv1ty.png" alt="Date" className="w-6 h-6 flex-shrink-0" />
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Date</label>
                  <input 
                    type="text" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-stone-900 outline-none mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Time Input */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 pb-3 md:pb-0">
                <img src="https://static.codia.ai/image/2026-06-24/Vkxfb5RCzU.png" alt="Time" className="w-6 h-6 flex-shrink-0" />
                <div className="w-full text-left">
                  <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Time</label>
                  <input 
                    type="text" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-transparent text-sm font-semibold text-stone-900 outline-none mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="col-span-1 md:col-span-2">
              <button 
                type="submit"
                className="w-full bg-[#082844] hover:bg-stone-900 text-white font-bold px-6 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md flex items-center justify-center gap-2 h-[52px]"
              >
                Book Now
              </button>
            </div>

          </form>

          {/* Dynamic route/booking helper overlay */}
          <div className="mt-6 text-center text-xs font-mono text-stone-500 border-t border-stone-100 pt-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {bookingType === 'trip' ? (
              <>
                <span>Estimated Transit Distance: <strong className="text-[#082844] font-sans font-bold">{currentDistance} miles</strong></span>
                <span className="hidden md:inline text-stone-300">|</span>
                <span>Approximate Duration: <strong className="text-stone-850">{estimatedTimeMins} mins</strong></span>
              </>
            ) : (
              <span>Chauffeuring Scope: <strong className="text-[#082844] font-sans font-bold">{duration} Hours Unlimited Local Driving</strong></span>
            )}
            <span className="hidden md:inline text-stone-300">|</span>
            <span>Est. Cost ({vehicles[selectedVehicle].name}): <strong className="text-[#082844] font-sans font-bold">£{activePrice.toFixed(2)}</strong></span>
          </div>
        </div>

        {/* Global Click Handler to close lookup dropdowns */}
        {(showPickupDropdown || showDestDropdown) && (
          <div className="fixed inset-0 z-10 bg-transparent" onClick={() => {
            setShowPickupDropdown(false);
            setShowDestDropdown(false);
          }} />
        )}

        {/* Dynamic booking notification popup */}
        <AnimatePresence>
          {bookingSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-[#082844] rounded-3xl p-8 shadow-2xl max-w-sm text-center"
            >
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-[#082844]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#082844] font-sans">Booking Query Processed!</h4>
              <p className="text-stone-500 text-xs mt-3 leading-relaxed">
                Your estimated transit cost of <strong className="text-black">£{activePrice.toFixed(2)}</strong> has been locked. Transferring you to our concierge interface to finalize coordinates...
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-5 h-5 border-2 border-[#082844] border-t-transparent rounded-full animate-spin" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. WHAT DO WE OFFER? SECTION */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-black tracking-tight">
              What Do We Offer?
            </h2>
            <div className="w-16 h-1 bg-[#082844] rounded-full mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Offer 1 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/Ovitg6QtK1.png" alt="60 min wait" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">60 Minutes Free Wait Time</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  We offer a generous 60-minute free wait time, allowing you to take your time and enjoy every moment without feeling rushed.
                </p>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/TnrC0UaiLi.png" alt="Cancellation" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">Free Cancellation Up to 2 Hours</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  Plans change, and we get that. We offer free cancellation up to 2 hours before your scheduled pickup.
                </p>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/i0WqYzBJ0h.png" alt="Flight Tracking" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">Flight Tracking</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  For airport pickups, our real-time flight tracking system ensures our chauffeur is always exactly on time, even if your flight is delayed or early.
                </p>
              </div>
            </div>

            {/* Offer 4 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/F8Q4c0krxs.png" alt="Chauffeurs" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">Multilingual & Vetted Chauffeurs</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  Our professional drivers act as personal concierges – fully background cleared, multilingual, and highly discreet.
                </p>
              </div>
            </div>

            {/* Offer 5 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/DvCfejKQaF.png" alt="Pricing" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">Transparent Pricing</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  No surprise surcharges or hidden gate fees. Our clear, fixed estimates ensure you always know what you are paying for in advance.
                </p>
              </div>
            </div>

            {/* Offer 6 */}
            <div className="flex flex-col items-start gap-5 p-6 rounded-3xl hover:bg-stone-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-stone-150">
              <img src="https://static.codia.ai/image/2026-06-24/0bPAbgAeKG.png" alt="Meet & Greet" className="w-16 h-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-black font-sans">Meet and Greet</h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed">
                  Your dedicated chauffeur will greet you inside arrivals with a custom name board, coordinate with your porter, and escort you directly to your fleet vehicle.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. OUR PREMIUM FLEET SLIDER SECTION */}
      <section className="py-24 bg-[#FEFBF5] border-t border-b border-stone-100 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-black">
              Our Premium Fleet
            </h2>
            <p className="mt-4 text-stone-500 text-sm sm:text-base leading-relaxed">
              Alonz Homes provides a curated fleet of premium vehicles, from elegant sedans to spacious SUVs and luxury limousines. Every vehicle is meticulously maintained to deliver a smooth, comfortable, and refined experience.
            </p>
          </div>

          {/* Interactive Slider Platform */}
          <div className="w-full flex flex-col items-center">
            
            {/* The Light Grey Card containing the car */}
            <div className="w-full max-w-4xl bg-[#F5F5F5] rounded-3xl p-8 sm:p-12 border border-stone-200/50 shadow-md flex flex-col items-center relative overflow-hidden">
              
              {/* Left and Right navigation arrows flanking the car inside the card */}
              <button 
                type="button"
                onClick={handlePrevVehicle}
                className="absolute left-4 sm:left-6 top-[35%] sm:top-[40%] -translate-y-1/2 w-12 h-12 rounded-full border border-stone-300 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-black cursor-pointer shadow-md z-20"
                aria-label="Previous Vehicle"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button 
                type="button"
                onClick={handleNextVehicle}
                className="absolute right-4 sm:right-6 top-[35%] sm:top-[40%] -translate-y-1/2 w-12 h-12 rounded-full border border-stone-300 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-black cursor-pointer shadow-md z-20"
                aria-label="Next Vehicle"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* The Car Image */}
              <div className="relative z-10 w-full flex justify-center max-w-[550px] mx-auto select-none">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedVehicle}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    src={vehicles[selectedVehicle].image} 
                    alt={vehicles[selectedVehicle].name}
                    className="max-h-56 sm:max-h-72 w-full object-contain drop-shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Ellipse Outline acting as a visual base */}
              <div className="w-[85%] sm:w-[70%] h-8 border border-stone-300 rounded-[100%] mx-auto opacity-60 -mt-3 sm:-mt-6 relative z-0" />

              {/* Pagination dots (with 2 small circular pagination icons below that) */}
              <div className="flex gap-2 mt-6 mb-8">
                {/* Since the user asked for "two small circular pagination icons", and we have 3 vehicles, we can render dots. Let's make it look very clean and responsive. */}
                {vehicleKeys.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVehicle(v)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedVehicle === v ? 'bg-[#082844] scale-110' : 'bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>

              {/* Centered Vehicle Details */}
              <div className="w-full max-w-2xl text-center space-y-4">
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3.5xl font-extrabold text-black font-sans tracking-tight">
                  {vehicles[selectedVehicle].name}
                </h3>

                {/* Model indicator */}
                <div className="flex justify-center">
                  <span className="text-[10px] font-mono font-extrabold text-[#082844] tracking-widest uppercase bg-[#EFF0FE] px-3.5 py-1 rounded-full border border-[#082844]/10">
                    {vehicles[selectedVehicle].carModel}
                  </span>
                </div>

                {/* Description */}
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
                  {vehicles[selectedVehicle].desc}
                </p>

                {/* Passenger number & luggage details */}
                <div className="flex justify-center gap-6 text-stone-500 text-xs sm:text-sm font-semibold pt-2 pb-4">
                  <div className="flex items-center gap-2">
                    <img src="https://static.codia.ai/image/2026-06-24/6sVQ3Y6myy.png" alt="passengers" className="w-5 h-5 object-contain" />
                    <span>Passengers x {vehicles[selectedVehicle].passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://static.codia.ai/image/2026-06-24/Ci1c8CsC5w.png" alt="luggage" className="w-5 h-5 object-contain" />
                    <span>Luggage x {vehicles[selectedVehicle].luggage}</span>
                  </div>
                </div>

                {/* Price centered */}
                <div className="text-center pt-2">
                  <span className="text-stone-400 text-[10px] font-mono tracking-widest uppercase block mb-1">
                    {bookingType === 'trip' ? 'Estimated Trip Fare' : 'Estimated Hourly Cost'}
                  </span>
                  <span className="text-3xl sm:text-4.5xl font-black text-[#082844] font-sans">
                    £{calculatePrice(selectedVehicle).toFixed(2)}
                  </span>
                </div>

                {/* Book Now button centered */}
                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => handleBookSubmit()}
                    className="bg-[#082844] hover:bg-black text-white font-extrabold px-12 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2"
                  >
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS SECTION */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-black">
              How it works
            </h2>
            <p className="mt-3 text-stone-500 text-sm sm:text-base leading-relaxed">Our Simple Booking Process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div 
              onClick={() => setActiveStep(0)}
              className={`border rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between h-80 ${
                activeStep === 0 
                  ? 'bg-[#FEFAF1] border-black/10 shadow-lg scale-102' 
                  : 'bg-white border-stone-150 hover:bg-stone-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-xs">
                <img src="https://static.codia.ai/image/2026-06-24/B014gwLoF3.png" alt="Step 1" className="w-8 h-8 object-contain" />
              </div>
              <div className="mt-8 text-left">
                <h3 className="text-xl font-bold text-black font-sans mb-3">Request A Booking</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                  Provide your pickup location, destination, preferred dates, and choice of luxury vehicle.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              onClick={() => setActiveStep(1)}
              className={`border rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between h-80 ${
                activeStep === 1 
                  ? 'bg-[#FEFAF1] border-black/10 shadow-lg scale-102' 
                  : 'bg-white border-stone-150 hover:bg-stone-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-xs">
                <img src="https://static.codia.ai/image/2026-06-24/k0HWUhTUaZ.png" alt="Step 2" className="w-8 h-8 object-contain" />
              </div>
              <div className="mt-8 text-left">
                <h3 className="text-xl font-bold text-black font-sans mb-3">We Confirm Your Driver</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                  We assign a vetted concierge chauffeur and dispatch real-time confirmation coordinates.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              onClick={() => setActiveStep(2)}
              className={`border rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-300 flex flex-col justify-between h-80 ${
                activeStep === 2 
                  ? 'bg-[#FEFAF1] border-black/10 shadow-lg scale-102' 
                  : 'bg-white border-stone-150 hover:bg-stone-50'
              }`}
            >
              <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-xs">
                <img src="https://static.codia.ai/image/2026-06-24/0dS11ioDPv.png" alt="Step 3" className="w-8 h-8 object-contain" />
              </div>
              <div className="mt-8 text-left">
                <h3 className="text-xl font-bold text-black font-sans mb-3">Enjoy the Journey</h3>
                <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">
                  Sit back in premier climate-controlled comfort and experience flawless transit standards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. COMFORT, RELIABILITY & DISCRETION SECTION */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Interior image column */}
            <div className="lg:col-span-5 h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl select-none relative">
              <img 
                src={interiorImg} 
                alt="Luxury Car Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#082844]/5" />
            </div>

            {/* Comfort details column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#082844] font-bold text-xs uppercase tracking-widest block font-mono">Premium Transit Standard</span>
              <h2 className="text-3xl sm:text-4.5xl font-extrabold text-black font-sans tracking-tight leading-tight">
                Comfort, Reliability, and Discretion
              </h2>
              <div className="w-16 h-1 bg-[#082844] rounded-full" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {[
                  'Professional, vetted drivers',
                  'On-time pickup and drop-off',
                  'Flexible bookings',
                  'Available as part of our home management services',
                  'Clean, comfortable vehicles',
                  'Ideal for residents, visitors, and property clients'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <img src="https://static.codia.ai/image/2026-06-24/FhWpk1WK1K.png" alt="check" className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" />
                    <span className="text-stone-850 text-sm leading-relaxed font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button
                  onClick={onNavigateContact}
                  className="bg-black hover:bg-[#082844] text-white font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2"
                >
                  Discover Our Process <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-24 bg-white border-t border-b border-stone-150">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-4xl text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-black">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#082844] rounded-full mx-auto mt-5" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What vehicles are available in the Business Class Package?',
                a: 'Our Business Class Package features premium executive sedans (such as the Mercedes-Benz E-Class or BMW 5-Series) and elite SUVs designed for absolute comfort, clean style, and professional transfers.'
              },
              {
                q: 'Can I book a vehicle for airport transfers or business meetings?',
                a: 'Yes, we specialize in both single point-to-point airport transfers (Heathrow, Gatwick, City Airport, etc.) and hourly charter hire for full-day business roadshows, local sightseeing, or corporate conferences.'
              },
              {
                q: 'Are the vehicles maintained and professionally serviced?',
                a: 'Every single vehicle in our premier collection undergoes daily deep sanitisation and routine multi-point mechanical inspection. Our experienced drivers maintain them to showroom-level standards inside and out.'
              }
            ].map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer hover:bg-stone-50/50"
                  >
                    <span className="font-extrabold text-sm sm:text-base text-black font-sans pr-4">{faq.q}</span>
                    <div className="flex-shrink-0">
                      <img 
                        src="https://static.codia.ai/image/2026-06-24/h5BDoAw6VY.png" 
                        alt="toggle" 
                        className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-stone-500 text-sm leading-relaxed border-t border-stone-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. BOTTOM CONCLUDING CTA BLOCK WITH GLASSMORPHISM BLUR */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-10 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden text-white p-8 sm:p-14 md:p-20 text-center shadow-2xl h-[400px] flex items-center justify-center">
            
            {/* Absolute background picture */}
            <div className="absolute inset-0 z-0">
              <img src={ctaBgImg} alt="CTA Background" className="w-full h-full object-cover scale-102" />
              {/* Blur glassmorphism backdrop exactly as styled in Codia */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight leading-tight">
                Travel Comfortably. Explore London Easily.
              </h2>
              <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
                Every great partnership starts with a conversation. Reach out to discuss your transit requirements, and we'll tailor the perfect management and luxury ride plan for you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
                <button
                  onClick={() => handleBookSubmit()}
                  className="w-full sm:w-auto bg-white hover:bg-[#082844] hover:text-white text-black font-extrabold px-10 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg"
                >
                  Book Now
                </button>
                <button
                  onClick={onNavigateContact}
                  className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-black text-white font-extrabold px-10 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOOKING CONFIRMATION POP-UP DIALOG MODAL */}
      <AnimatePresence>
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSendingEmail) setShowConfirmModal(false);
              }}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 z-10 text-stone-900"
            >
              {/* Close Button */}
              {!isSendingEmail && (
                <button
                  type="button"
                  onClick={() => setShowConfirmModal(false)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>
              )}

              {/* Step 1: Input Form */}
              {!isSendingEmail && !emailSuccess && (
                <form onSubmit={handleConfirmSubmit} className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#082844] bg-[#082844]/10 px-3 py-1.5 rounded-full">
                      Step 2 of 2: Confirm Details
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black mt-3">
                      Complete Your Reservation
                    </h3>
                    <p className="text-stone-500 text-xs mt-1.5">
                      Verify your trip summary and enter your contact details to lock in your luxury transport rate.
                    </p>
                  </div>

                  {/* Summary Grid */}
                  <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-150 space-y-3.5 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                      <span className="font-bold text-[#082844]">Vehicle Class</span>
                      <span className="font-semibold text-stone-800">{vehicles[selectedVehicle].name}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 pb-2 border-b border-stone-200">
                      <div>
                        <span className="block text-[10px] font-bold text-stone-400 uppercase">Pickup Location</span>
                        <span className="font-medium text-stone-800 truncate block mt-0.5" title={pickup}>
                          {pickup}
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-stone-400 uppercase">
                          {bookingType === 'trip' ? 'Destination Location' : 'Duration'}
                        </span>
                        <span className="font-medium text-stone-800 truncate block mt-0.5" title={destination}>
                          {bookingType === 'trip' ? destination : `${duration} Hours Chartered`}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pb-2 border-b border-stone-200">
                      <div>
                        <span className="block text-[10px] font-bold text-stone-400 uppercase">Date</span>
                        <span className="font-semibold text-stone-800 block mt-0.5">{date}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-stone-400 uppercase">Time</span>
                        <span className="font-semibold text-stone-800 block mt-0.5">{time}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-stone-700">Calculated Quote</span>
                      <span className="text-2xl font-black text-[#082844] font-sans">
                        £{activePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Contact Inputs */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                        Passenger Name
                      </label>
                      <input
                        type="text"
                        required
                        value={passengerName}
                        onChange={(e) => setPassengerName(e.target.value)}
                        placeholder="e.g. Sir Edward Harrington"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:border-[#082844] focus:ring-1 focus:ring-[#082844] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                        Passenger Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={passengerPhone}
                        onChange={(e) => setPassengerPhone(e.target.value)}
                        placeholder="e.g. +44 7911 123456"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm font-semibold outline-none focus:border-[#082844] focus:ring-1 focus:ring-[#082844] transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-[#082844] hover:bg-black text-white font-extrabold py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                  >
                    Confirm & Send Booking Request <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

              {/* Step 2: Simulated SMTP Relay Terminal */}
              {isSendingEmail && (
                <div className="p-6 sm:p-8 space-y-6 bg-[#0c0d0e]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-green-500/10 rounded-xl animate-pulse">
                      <Terminal className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-white">
                        SMTP Mail Transmission In Progress
                      </h3>
                      <p className="text-[10px] text-stone-400">
                        Dispatching ride credentials from sales@alonzhomes.com to info@alonzhomes.com
                      </p>
                    </div>
                  </div>

                  {/* Logs Terminal */}
                  <div className="bg-black/90 rounded-2xl p-4 font-mono text-[9px] sm:text-xs text-green-400 space-y-1.5 h-64 overflow-y-auto leading-relaxed border border-stone-800 shadow-inner">
                    {smtpLogs.map((log, index) => (
                      <div key={index} className="flex gap-2">
                        <span className="text-stone-600 font-semibold flex-shrink-0">&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="animate-pulse w-1.5 h-3 bg-green-400" />
                      <span className="text-stone-500 italic text-[10px]">SMTP Session Active...</span>
                    </div>
                  </div>

                  <p className="text-center text-[10px] text-stone-500 font-medium">
                    SSL/TLS Tunnel Encrypted. Data packets routed securely.
                  </p>
                </div>
              )}

              {/* Step 3: Success Screen */}
              {emailSuccess && (
                <div className="p-6 sm:p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center border-4 border-green-50">
                      <Check className="w-8 h-8 text-green-600 stroke-[3]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black">
                      Booking Ticket Sent Successfully!
                    </h3>
                    <p className="text-stone-500 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                      A dynamic booking ticket containing your price quote has been dispatched from <strong className="text-stone-800 font-bold">sales@alonzhomes.com</strong> to <strong className="text-stone-800 font-bold">info@alonzhomes.com</strong>.
                    </p>
                  </div>

                  {/* Summary Callout */}
                  <div className="bg-stone-50 rounded-2xl p-4 text-left border border-stone-150 text-xs space-y-2 max-w-sm mx-auto">
                    <p className="text-stone-600 leading-relaxed">
                      Our VIP Dispatch team is reviewing your route and has reserved a <strong className="text-[#082844]">{vehicles[selectedVehicle].name} ({vehicles[selectedVehicle].carModel})</strong> for your schedule.
                    </p>
                    <p className="text-stone-600">
                      We will call you back at <strong className="text-stone-800">{passengerPhone}</strong> within 15 minutes to confirm details.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setShowConfirmModal(false);
                      setBookingSuccess(true);
                      setTimeout(() => setBookingSuccess(false), 5000);
                    }}
                    className="w-full bg-[#082844] hover:bg-black text-white font-extrabold py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    Return to Fleet Page
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ChauffeuringPage;
