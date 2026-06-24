import { useState, useEffect } from 'react';

export interface EditableText {
  key: string;
  label: string;
  description: string;
  defaultText: string;
  category: 'hero' | 'about' | 'portfolio' | 'pricing' | 'contact' | 'footer' | 'chauffeuring';
  isTextArea?: boolean;
}

export const INITIAL_TEXTS: EditableText[] = [
  // HERO SECTION
  {
    key: 'hero_tagline',
    category: 'hero',
    label: 'Hero - Top Tagline',
    description: 'The small light capitalized header text in the hero block.',
    defaultText: 'Complete Home Management, Crafted for London Living.'
  },
  {
    key: 'hero_title',
    category: 'hero',
    label: 'Hero - Main Title',
    description: 'The large primary title in the hero section.',
    defaultText: 'A-Z Home Management You Can Trust',
    isTextArea: true
  },
  {
    key: 'hero_sub',
    category: 'hero',
    label: 'Hero - Subheading Description',
    description: 'The narrative paragraph under the main hero title.',
    defaultText: 'From maintenance to chauffeuring – we handle your property as if it were our own.',
    isTextArea: true
  },
  {
    key: 'hero_cta_consult',
    category: 'hero',
    label: 'Hero - CTA Consultation Button',
    description: 'Text of the direct primary action button in the hero area.',
    defaultText: 'Request Consultation'
  },
  {
    key: 'hero_cta_call',
    category: 'hero',
    label: 'Hero - CTA Phone Button',
    description: 'Text of the secondary outline action button in the hero area.',
    defaultText: 'Call Now'
  },
  {
    key: 'hero_office_phone',
    category: 'hero',
    label: 'Contact Info - Office Telephone number',
    description: 'Displayed across contact blocks and in head headers.',
    defaultText: '+44(0)2035042429'
  },
  {
    key: 'hero_whatsapp_num',
    category: 'hero',
    label: 'Contact Info - WhatsApp direct number',
    description: 'Sovereign mobile contact line used for click-to-chat features.',
    defaultText: '+44(0)7471066665'
  },
  {
    key: 'hero_email_address',
    category: 'hero',
    label: 'Contact Info - Email Inbox Address',
    description: 'Primary electronic mailing address.',
    defaultText: 'info@alonzhomes.com'
  },

  // ABOUT SECTION
  {
    key: 'about_home_cta',
    category: 'about',
    label: 'Homepage - Upper CTA Banner text',
    description: 'Bold text displayed in the split horizontal banner above Story of Alonz.',
    defaultText: 'One company. Every service. Complete peace of mind.',
    isTextArea: true
  },
  {
    key: 'about_home_heading',
    category: 'about',
    label: 'Homepage - Story Title',
    description: 'Heading of the central about section on the main page.',
    defaultText: 'Why Homeowners Choose Alonz'
  },
  {
    key: 'about_home_desc',
    category: 'about',
    label: 'Homepage - Story Paragraph',
    description: 'The main narrative statement detailing Alonz Homes services.',
    defaultText: 'At Alonz Homes, we go beyond maintenance – we offer peace of mind. With years of experience managing London\'s most exclusive properties, our team handles every detail discreetly and efficiently, so you can focus on what matters most.',
    isTextArea: true
  },
  {
    key: 'about_home_benefit_1',
    category: 'about',
    label: 'Homepage - Benefit Item #1',
    description: 'First key bullet point shown alongside the illustration.',
    defaultText: 'One Point of Contact – no more juggling contractors.'
  },
  {
    key: 'about_home_benefit_2',
    category: 'about',
    label: 'Homepage - Benefit Item #2',
    description: 'Second key bullet point shown alongside the illustration.',
    defaultText: 'Trusted Partners – vetted, insured, and supervised by our team.'
  },
  {
    key: 'about_home_benefit_3',
    category: 'about',
    label: 'Homepage - Benefit Item #3',
    description: 'Third key bullet point shown alongside the illustration.',
    defaultText: 'Transparent Reporting – monthly updates and clear financials.'
  },
  {
    key: 'about_home_benefit_4',
    category: 'about',
    label: 'Homepage - Benefit Item #4',
    description: 'Fourth key bullet point shown alongside the illustration.',
    defaultText: 'Tailored Approach – every service is designed around your property.'
  },

  // ABOUT PAGE (FULL)
  {
    key: 'about_page_story_title',
    category: 'about',
    label: 'About Page - "Our Story" Header',
    description: 'Header text for our story segment in the dedicated about tab.',
    defaultText: 'Oversight, perfected. Complete peace of mind.'
  },
  {
    key: 'about_page_story_p1',
    category: 'about',
    label: 'About Page - Story Paragraph 1',
    description: 'Initial block describing origins of Alonz Homes.',
    defaultText: 'Founded on the principles of reliability, absolute transparency, and impeccable style, Alonz Homes was born to elevate high-end property management in London. We observed homeowners constantly stressed by unresponsive contractors, unvetted handymen, and chaotic accounting.',
    isTextArea: true
  },
  {
    key: 'about_page_story_p2',
    category: 'about',
    label: 'About Page - Story Paragraph 2',
    description: 'Secondary block describing Alonz Homes core values.',
    defaultText: 'We choose to be different. Our team serves as your single sovereign point of contact, ensuring your home is pristine, safe, and running perfectly. Backed by rigorous audit lists and professional transparency, our client ledgers log every expense to the single penny.',
    isTextArea: true
  },
  {
    key: 'about_page_founder_summary',
    category: 'about',
    label: 'About Page - Bilal Jammal Description',
    description: 'The personal narrative section placed beside the founder headshot.',
    defaultText: 'With over two decades of residential operations oversight and property management across London\'s premium boroughs, Bilal founded Alonz Homes to bring back the golden standard of elite personal service, keyholding security, and zero compromise.',
    isTextArea: true
  },

  // PORTFOLIO SECTION
  {
    key: 'portfolio_heading',
    category: 'portfolio',
    label: 'Home Portfolio - Grid Heading',
    description: 'Main title of the projects grid showcase.',
    defaultText: 'Sovereign Estates'
  },
  {
    key: 'portfolio_sub',
    category: 'portfolio',
    label: 'Home Portfolio - Grid Description',
    description: 'Sub-paragraph showing under the estates title.',
    defaultText: 'A curated viewing of residences currently under our dedicated watch and management.',
    isTextArea: true
  },

  // PRICING SECTION
  {
    key: 'pricing_heading',
    category: 'pricing',
    label: 'Pricing Page - Headline',
    description: 'Main header in the Packages and Plans pricing tab.',
    defaultText: 'Transparent Management Packages'
  },
  {
    key: 'pricing_sub',
    category: 'pricing',
    label: 'Pricing Page - Subtitle banner text',
    description: 'Descriptive subheadings beneath pricing page headline.',
    defaultText: 'Meticulous coverage designed to match your occupancy cycles. No hidden costs or markup fees.',
    isTextArea: true
  },

  // CONTACT SECTION
  {
    key: 'contact_heading',
    category: 'contact',
    label: 'Contact Page - Header title',
    description: 'The direct invitation line on the Contact view.',
    defaultText: 'Request Private Council'
  },
  {
    key: 'contact_sub',
    category: 'contact',
    label: 'Contact Page - Invite description',
    description: 'The secondary text encouraging homeowners to get in touch.',
    defaultText: 'Let us handle your residence with utmost discretion. Leave your details below, or contact Bilal directly via phone or encrypted WhatsApp channels.',
    isTextArea: true
  },
  {
    key: 'contact_address',
    category: 'contact',
    label: 'Physical Address Details',
    description: 'Displayed of the Alonz Homes London workspace coordinates.',
    defaultText: 'Office Suite, Second Floor, 14 Great Central Street, London, NW1 5FP'
  },
  // CHAUFFEURING PAGE
  {
    key: 'chauffeuring_heading',
    category: 'chauffeuring',
    label: 'Chauffeuring - Heading Title',
    description: 'Main display title of the Chauffeuring & Private Tours page.',
    defaultText: 'Chauffeuring & Private Tours'
  },
  {
    key: 'chauffeuring_sub',
    category: 'chauffeuring',
    label: 'Chauffeuring - Subtitle Narrative',
    description: 'The elegant introductory description text on the Chauffeuring page.',
    defaultText: 'Luxury transport and personalised London tours – travel comfortably, arrive on time, and explore the city with ease.',
    isTextArea: true
  },
  {
    key: 'chauffeuring_hourly_rate',
    category: 'chauffeuring',
    label: 'Chauffeuring - Base Hourly Rate (£)',
    description: 'Base cost per hour (used to dynamically compute prices for hourly bookings).',
    defaultText: '85.00'
  },
  {
    key: 'chauffeuring_distance_rate',
    category: 'chauffeuring',
    label: 'Chauffeuring - Base Distance Rate (£/mile)',
    description: 'Cost per mile for trip-based distance pricing calculations.',
    defaultText: '4.50'
  },
  {
    key: 'chauffeuring_base_fee',
    category: 'chauffeuring',
    label: 'Chauffeuring - Base Trip Fee (£)',
    description: 'Fixed minimal flag drop or start fee for any single trip booking.',
    defaultText: '95.00'
  },
  {
    key: 'chauffeuring_fleet_business_desc',
    category: 'chauffeuring',
    label: 'Chauffeuring - Business Class Description',
    description: 'Detailed card description text for the Business Class sedan category.',
    defaultText: 'Travel in comfort and style with premium vehicles, professional service, and a seamless experience tailored for business needs.',
    isTextArea: true
  },
  {
    key: 'chauffeuring_fleet_first_desc',
    category: 'chauffeuring',
    label: 'Chauffeuring - First Class Description',
    description: 'Detailed card description text for the First Class sedan category (VIP prestige).',
    defaultText: 'Ultimate flagship luxury experience for VIPs. Exemplary ride comfort, prestige presence, and first-class amenities.',
    isTextArea: true
  },
  {
    key: 'chauffeuring_fleet_van_desc',
    category: 'chauffeuring',
    label: 'Chauffeuring - Luxury MPV Description',
    description: 'Detailed card description text for the Luxury MPV (Mercedes V-Class) category.',
    defaultText: 'Spacious high-end multi-passenger vehicle. Ideal for groups, roadshows, weddings, or travelers with extensive baggage requirements.',
    isTextArea: true
  }
];

const LOCAL_STORAGE_PREFIX = 'alonz_homes_override_text_';
const LISTENERS = new Set<() => void>();

let GLOBAL_TEXT_OVERRIDES: { [key: string]: string } = {};
let isLoaded = false;

export function fetchOverrides() {
  fetch('/api/overrides')
    .then(res => res.json())
    .then(data => {
      if (data && data.texts) {
        GLOBAL_TEXT_OVERRIDES = data.texts;
        isLoaded = true;
        notifyListeners();
      }
    })
    .catch(err => {
      console.warn('Failed to fetch text overrides on load:', err);
    });
}

// Trigger initial load
if (typeof window !== 'undefined') {
  fetchOverrides();
}

export function getText(key: string, defaultFallback: string): string {
  if (GLOBAL_TEXT_OVERRIDES[key] !== undefined && GLOBAL_TEXT_OVERRIDES[key].trim() !== '') {
    return GLOBAL_TEXT_OVERRIDES[key].trim();
  }
  try {
    const override = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${key}`);
    if (override && override.trim() !== '') {
      return override.trim();
    }
  } catch (e) {
    console.warn('LocalStorage not accessible', e);
  }
  return defaultFallback;
}

export function setText(key: string, text: string): void {
  const trimmed = text.trim();
  GLOBAL_TEXT_OVERRIDES[key] = trimmed;
  try {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${key}`, trimmed);
  } catch (e) {
    console.error('Failed to write text to localStorage', e);
  }
  notifyListeners();

  fetch('/api/overrides/text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, value: trimmed })
  }).catch(err => {
    console.error('Failed to persist text override to server:', err);
  });
}

export function resetText(key: string): void {
  delete GLOBAL_TEXT_OVERRIDES[key];
  try {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}${key}`);
  } catch (e) {
    console.error('Failed to remove text from localStorage', e);
  }
  notifyListeners();

  fetch('/api/overrides/reset-text', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key })
  }).catch(err => {
    console.error('Failed to reset text override on server:', err);
  });
}

function notifyListeners() {
  LISTENERS.forEach(listener => listener());
}

/**
 * A custom React hook that returns the active text value for a given key.
 * Dynamically registers updates and refreshes using the central event queue on state change.
 */
export function useActiveText(key: string, defaultTextFallback?: string): string {
  const matchingConfig = INITIAL_TEXTS.find(t => t.key === key);
  const fallback = defaultTextFallback !== undefined ? defaultTextFallback : (matchingConfig?.defaultText || '');

  const [text, setVal] = useState(() => getText(key, fallback));

  useEffect(() => {
    const handleUpdate = () => {
      setVal(getText(key, fallback));
    };

    LISTENERS.add(handleUpdate);
    return () => {
      LISTENERS.delete(handleUpdate);
    };
  }, [key, fallback]);

  return text;
}
