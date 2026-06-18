export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  features: string[];
  services: string[];
  duration: string;
  clientType: string;
  propertyType: string;
  postalCode: string;
  testimonial: {
    quote: string;
    author: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "chelsea-luxury-apartment",
    title: "Chelsea Luxury Apartment Renovation",
    location: "Chelsea, SW3",
    description: "This apartment underwent a full renovation including flooring installation, painting, lighting upgrades, and modern interior styling. Our team managed every aspect – from design planning to construction and final finishing – delivering a clean, elegant, move-in-ready space.",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=2000&auto=format&fit=crop"
    ],
    features: [
      "Full renovation & redesign",
      "Custom interior styling",
      "Complete project management",
      "Cleaning & final staging",
      "Delivered within 4 weeks"
    ],
    services: [
      "Interior Design",
      "Deep Cleaning",
      "Property Setup / Access Management",
      "Construction & Renovation",
      "Maintenance Coordination"
    ],
    duration: "4 weeks",
    clientType: "International Client",
    propertyType: "2-bedroom Apartment",
    postalCode: "Chelsea SW3",
    testimonial: {
      quote: "Alonz Homes made my overseas property completely stress-free. The monthly reports and fast response times are worth every penny.",
      author: "Client, Kensington"
    }
  },
  {
    id: "peninsula-mansion",
    title: "The Peninsula Mansion Overlook",
    location: "Canary Wharf, E14",
    description: "This stunning waterfront property underwent a multi-million pound renovation. We oversaw everything from structural upgrades to the integration of a state-of-the-art climate-controlled indoor pool, outdoor terrace deck, custom smart-home automation, and high-end modern furniture installation.",
    images: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Full structural overhaul & engineering",
      "Indoor wellness pool & deck",
      "State-of-the-art smart systems",
      "Sourced custom Italian furniture",
      "Completed 10 days ahead of schedule"
    ],
    services: [
      "Construction & Renovation",
      "Interior Design",
      "Property Setup / Access Management",
      "Automation Integration",
      "Maintenance Coordination"
    ],
    duration: "12 months",
    clientType: "Private Property Fund",
    propertyType: "6-bedroom Luxury Villa",
    postalCode: "Canary Wharf E14",
    testimonial: {
      quote: "Absolutely breathtaking results. Alonz Homes handled this massive structural and luxury renovation with complete professionalism and elegance.",
      author: "Owner Representative"
    }
  },
  {
    id: "holland-park-villa",
    title: "Holland Park Period Villa Refurbishment",
    location: "Holland Park, W11",
    description: "A premium refurbishment of a grade-II listed heritage villa in the heart of Holland Park. We worked closely with conservation officers to implement complete floor restorations, premium micro-cement finishes, bespoke oak timber paneling, and an elegant open-plan dining-living integration with floor-to-ceiling glass.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Grade-II conservation approvals completed",
      "Handmade bespoke oak panels & joinery",
      "Open-plan kitchen-to-terrace integration",
      "Architectural light staging system",
      "Delivered in sequential phases"
    ],
    services: [
      "Interior Design",
      "Construction & Renovation",
      "Heritage Conservation",
      "Property Setup / Access Management",
      "Maintenance Coordination"
    ],
    duration: "10 weeks",
    clientType: "European Investor",
    propertyType: "4-bedroom Period Villa",
    postalCode: "Holland Park W11",
    testimonial: {
      quote: "Their incredible respect for the historical building, combined with elite modern interior design, created a perfect home.",
      author: "Client, Holland Park"
    }
  },
  {
    id: "shoreditch-loft",
    title: "Shoreditch Industrial Loft Makeover",
    location: "Shoreditch, EC1A",
    description: "An interior makeover of an industrial loft, transforming exposed brick structures and high timber beam ceilings into a warm, inviting living space. We selected rich jewel-tone furniture (including a gorgeous emerald green velvet lounge), installed customized linear track light fixtures, and sourced vintage styling elements.",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Industrial loft conversion styling",
      "Sealed exposed brickwork detailing",
      "Vintage asset curation & staging",
      "Custom linear steel lighting system",
      "Complete acoustic ceiling treatments"
    ],
    services: [
      "Interior Design",
      "Property Setup / Access Management",
      "Deep Cleaning",
      "Maintenance Coordination",
      "Styling & Staging"
    ],
    duration: "3 weeks",
    clientType: "Tech Entrepreneur",
    propertyType: "1-bedroom Loft Suite",
    postalCode: "Shoreditch EC1A",
    testimonial: {
      quote: "They brought soul and warmth into this cold industrial shell. Every single guest compliments the layout.",
      author: "Tenant, Shoreditch"
    }
  },
  {
    id: "snowfair-avenue",
    title: "Snowfair Avenue Refurbishment",
    location: "Wimbledon, SW19",
    description: "A gorgeous modern refurbishment of a spacious residence in Wimbledon. The project focused on bringing natural light into the main living zones with specialized floor glazing, elegant custom-tailored white curtain fixtures, dynamic ceiling-recessed spotlights, and high-performance bespoke bathroom tiling.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "Double glazed sunroom integration",
      "Complete modern flooring makeover",
      "Custom smart dimmer switches installed",
      "Precision custom-milled cabinetry",
      "Bespoke bathroom luxury tiling"
    ],
    services: [
      "Interior Design",
      "Construction & Renovation",
      "Deep Cleaning",
      "Property Setup / Access Management",
      "Maintenance Coordination"
    ],
    duration: "5 weeks",
    clientType: "Private Family",
    propertyType: "5-bedroom Residence",
    postalCode: "Wimbledon SW19",
    testimonial: {
      quote: "Fast response, clear communication, and impeccable workmanship. The transition was so easy and the results are stunning.",
      author: "Homeowner, Wimbledon"
    }
  },
  {
    id: "belgravia-penthouse",
    title: "Belgravia Penthouse Suites",
    location: "Belgravia, SW1X",
    description: "A comprehensive upgrade of a penthouse in Belgravia, featuring a bespoke media room, luxury home theater integration, and premium dark oak wall panelling. We designed the acoustic ceilings, selected Italian leather seating, and curated high-contrast minimalist accents to create a cinematic and cozy sanctuary.",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop"
    ],
    features: [
      "High-end custom media lounge design",
      "Acoustic felt ceiling insulation",
      "Preloaded smart home automation",
      "Premium dark oak wood panel overlays",
      "Dimmable warm glow LED system"
    ],
    services: [
      "Construction & Renovation",
      "Property Setup / Access Management",
      "Interior Design",
      "Automation Integration",
      "Maintenance Coordination"
    ],
    duration: "6 weeks",
    clientType: "International Exec",
    propertyType: "3-bedroom Penthouse",
    postalCode: "Belgravia SW1X",
    testimonial: {
      quote: "The lighting and wood choices turned our penthouse into a spectacular private sanctuary. Highly recommend Alonz.",
      author: "Client, Belgravia"
    }
  }
];
