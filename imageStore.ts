import { useState, useEffect } from 'react';

export interface EditableImage {
  key: string;
  label: string;
  description: string;
  defaultUrl: string;
  recommendedSize: string;
}

export const INITIAL_IMAGES: EditableImage[] = [
  {
    key: 'hero_background',
    label: 'Hero Background Background',
    description: 'The sweeping background image on the homepage header section.',
    defaultUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop',
    recommendedSize: '1920x1080 px (Standard Landscape HD)'
  },
  {
    key: 'about_home',
    label: 'About Section Image (Home)',
    description: 'The elegant modern house image featured in the Story of Alonz section on the homepage.',
    defaultUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    recommendedSize: '1200x800 px (3:2 Aspect Ratio)'
  },
  {
    key: 'project_1',
    label: 'Portfolio - Belgravia Townhouse',
    description: 'Cover photo for the premium townhouse project in Belgravia.',
    defaultUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '800x600 px (4:3 Aspect Ratio)'
  },
  {
    key: 'project_2',
    label: 'Portfolio - Mayfair Apartment',
    description: 'Cover photo for the Mayfair luxury apartment project.',
    defaultUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    recommendedSize: '800x600 px (4:3 Aspect Ratio)'
  },
  {
    key: 'project_3',
    label: 'Portfolio - Hampstead Villa',
    description: 'Cover photo for the private manor in Hampstead.',
    defaultUrl: 'https://images.unsplash.com/photo-1494203484021-3c454daf695d?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '800x600 px (4:3 Aspect Ratio)'
  },
  {
    key: 'project_4',
    label: 'Portfolio - Knightsbridge Penthouse',
    description: 'Cover photo for the duplex penthouse in Knightsbridge.',
    defaultUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '800x600 px (4:3 Aspect Ratio)'
  },
  {
    key: 'project_5',
    label: 'Portfolio - Richmond Retreat',
    description: 'Cover photo for the historic cottage restoration in Richmond.',
    defaultUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2108&auto=format&fit=crop',
    recommendedSize: '800x600 px (4:3 Aspect Ratio)'
  },
  {
    key: 'projects_page_hero',
    label: 'Portfolio Header Banner',
    description: 'The grand panoramic background banner displayed at the top of the gallery page.',
    defaultUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '1920x600 px (Panoramic Banner)'
  },
  {
    key: 'about_page_story',
    label: 'About Page - Our Story',
    description: 'The elegant classic architecture photo in the Our Story block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '1200x900 px (4:3 Aspect Ratio)'
  },
  {
    key: 'about_page_philosophy',
    label: 'About Page - Our Philosophy',
    description: 'Interior rendering image showing material finish in the Philosophy block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    recommendedSize: '1200x900 px (4:3 Aspect Ratio)'
  },
  {
    key: 'about_page_standards',
    label: 'About Page - Premium Standards',
    description: 'Artistic detail close-up shot used for the High Standards block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop',
    recommendedSize: '1200x900 px (4:3 Aspect Ratio)'
  },
  {
    key: 'about_page_materials',
    label: 'About Page - Execution & Quality',
    description: 'Sleek dark design and finishes detail shot on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop',
    recommendedSize: '1200x900 px (4:3 Aspect Ratio)'
  },
  {
    key: 'testimonial_1_bg',
    label: 'Testimonials Backdrop 1',
    description: 'Backdrop of cozy luxury furniture for the home testimonials section (slide 1).',
    defaultUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop',
    recommendedSize: '1920x800 px (Atmospheric Banner)'
  },
  {
    key: 'testimonial_2_bg',
    label: 'Testimonials Backdrop 2',
    description: 'Backdrop of elegant space layout for the home testimonials section (slide 2).',
    defaultUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop',
    recommendedSize: '1920x800 px (Atmospheric Banner)'
  },
  {
    key: 'bilal_headshot',
    label: 'Founder Bilal Jammal Headshot',
    description: 'Override portrait URL of Bilal Jammal. Leave empty to use the pristine generated headshot portrait asset.',
    defaultUrl: '',
    recommendedSize: '600x600 px (Square Aspect Ratio 1:1)'
  },
  {
    key: 'chauffeuring_hero',
    label: 'Chauffeuring - Hero Banner',
    description: 'The background picture of luxury sedans in the Chauffeuring service page header.',
    defaultUrl: 'https://static.codia.ai/image/2026-06-24/aExYq7MZ8e.png',
    recommendedSize: '1920x800 px (High Resolution Landscape)'
  },
  {
    key: 'chauffeuring_fleet_business',
    label: 'Chauffeuring - Business Class Sedan',
    description: 'Side-profile picture of a black executive sedan (e.g. Mercedes E-Class) for the fleet slider.',
    defaultUrl: 'https://static.codia.ai/image/2026-06-24/xtrSN9hpeK.png',
    recommendedSize: '800x450 px (Clean car side profile, transparent or neutral background)'
  },
  {
    key: 'chauffeuring_fleet_first',
    label: 'Chauffeuring - First Class Sedan',
    description: 'Primacy portrait of a luxury flagship sedan (e.g. Mercedes S-Class) for the fleet slider.',
    defaultUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
    recommendedSize: '800x450 px'
  },
  {
    key: 'chauffeuring_fleet_van',
    label: 'Chauffeuring - Luxury MPV/Van',
    description: 'Side profile of a luxury group passenger van (e.g. Mercedes V-Class) for the fleet slider.',
    defaultUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop',
    recommendedSize: '800x450 px'
  },
  {
    key: 'chauffeuring_interior',
    label: 'Chauffeuring - Vehicle Interior',
    description: 'Luxury white/beige leather interior photo showing ultimate comfort and class.',
    defaultUrl: 'https://static.codia.ai/image/2026-06-24/wS5vk33qVm.png',
    recommendedSize: '1000x650 px (Interior detail)'
  },
  {
    key: 'chauffeuring_cta_bg',
    label: 'Chauffeuring - Bottom CTA Banner BG',
    description: 'The background picture of the bottom banner CTA block.',
    defaultUrl: 'https://static.codia.ai/image/2026-06-24/xOtDdyUChR.png',
    recommendedSize: '1920x600 px'
  }
];

const LOCAL_STORAGE_PREFIX = 'alonz_homes_override_img_';
const LISTENERS = new Set<() => void>();

let GLOBAL_IMAGE_OVERRIDES: { [key: string]: string } = {};

export function fetchImageOverrides() {
  fetch('/api/overrides')
    .then(res => res.json())
    .then(data => {
      if (data && data.images) {
        GLOBAL_IMAGE_OVERRIDES = data.images;
        notifyListeners();
      }
    })
    .catch(err => {
      console.warn('Failed to fetch image overrides on load:', err);
    });
}

// Trigger initial load
if (typeof window !== 'undefined') {
  fetchImageOverrides();
}

export function getImageUrl(key: string, defaultFallback: string): string {
  if (GLOBAL_IMAGE_OVERRIDES[key] !== undefined && GLOBAL_IMAGE_OVERRIDES[key].trim() !== '') {
    return GLOBAL_IMAGE_OVERRIDES[key].trim();
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

export function setImageUrl(key: string, url: string): void {
  const trimmed = url.trim();
  GLOBAL_IMAGE_OVERRIDES[key] = trimmed;
  try {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${key}`, trimmed);
  } catch (e) {
    console.error('Failed to write to localStorage', e);
  }
  notifyListeners();

  fetch('/api/overrides/image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key, value: trimmed })
  }).catch(err => {
    console.error('Failed to persist image override to server:', err);
  });
}

export function resetImageUrl(key: string): void {
  delete GLOBAL_IMAGE_OVERRIDES[key];
  try {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}${key}`);
  } catch (e) {
    console.error('Failed to remove from localStorage', e);
  }
  notifyListeners();

  fetch('/api/overrides/reset-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key })
  }).catch(err => {
    console.error('Failed to reset image override on server:', err);
  });
}

function notifyListeners() {
  LISTENERS.forEach(listener => listener());
}

/**
 * A custom React hook that returns the active URL for a given image key.
 * Triggers re-renders on all components using this hook whenever an image URL is updated.
 */
export function useActiveImage(key: string, defaultUrlFallback?: string): string {
  // Find standard fallback if not supplied
  const matchingConfig = INITIAL_IMAGES.find(i => i.key === key);
  const fallback = defaultUrlFallback !== undefined ? defaultUrlFallback : (matchingConfig?.defaultUrl || '');

  const [url, setUrl] = useState(() => getImageUrl(key, fallback));

  useEffect(() => {
    const handleUpdate = () => {
      setUrl(getImageUrl(key, fallback));
    };

    LISTENERS.add(handleUpdate);
    return () => {
      LISTENERS.delete(handleUpdate);
    };
  }, [key, fallback]);

  return url;
}
