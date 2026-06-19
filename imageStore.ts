import { useState, useEffect } from 'react';

export interface EditableImage {
  key: string;
  label: string;
  description: string;
  defaultUrl: string;
}

export const INITIAL_IMAGES: EditableImage[] = [
  {
    key: 'hero_background',
    label: 'Hero Background Background',
    description: 'The sweeping background image on the homepage header section.',
    defaultUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop'
  },
  {
    key: 'about_home',
    label: 'About Section Image (Home)',
    description: 'The elegant modern house image featured in the Story of Alonz section on the homepage.',
    defaultUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop'
  },
  {
    key: 'project_1',
    label: 'Portfolio - Belgravia Townhouse',
    description: 'Cover photo for the premium townhouse project in Belgravia.',
    defaultUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'project_2',
    label: 'Portfolio - Mayfair Apartment',
    description: 'Cover photo for the Mayfair luxury apartment project.',
    defaultUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop'
  },
  {
    key: 'project_3',
    label: 'Portfolio - Hampstead Villa',
    description: 'Cover photo for the private manor in Hampstead.',
    defaultUrl: 'https://images.unsplash.com/photo-1494203484021-3c454daf695d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'project_4',
    label: 'Portfolio - Knightsbridge Penthouse',
    description: 'Cover photo for the duplex penthouse in Knightsbridge.',
    defaultUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'project_5',
    label: 'Portfolio - Richmond Retreat',
    description: 'Cover photo for the historic cottage restoration in Richmond.',
    defaultUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2108&auto=format&fit=crop'
  },
  {
    key: 'projects_page_hero',
    label: 'Portfolio Header Banner',
    description: 'The grand panoramic background banner displayed at the top of the gallery page.',
    defaultUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'about_page_story',
    label: 'About Page - Our Story',
    description: 'The elegant classic architecture photo in the Our Story block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'about_page_philosophy',
    label: 'About Page - Our Philosophy',
    description: 'Interior rendering image showing material finish in the Philosophy block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop'
  },
  {
    key: 'about_page_standards',
    label: 'About Page - Premium Standards',
    description: 'Artistic detail close-up shot used for the High Standards block on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=2070&auto=format&fit=crop'
  },
  {
    key: 'about_page_materials',
    label: 'About Page - Execution & Quality',
    description: 'Sleek dark design and finishes detail shot on the full About page.',
    defaultUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop'
  },
  {
    key: 'testimonial_1_bg',
    label: 'Testimonials Backdrop 1',
    description: 'Backdrop of cozy luxury furniture for the home testimonials section (slide 1).',
    defaultUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    key: 'testimonial_2_bg',
    label: 'Testimonials Backdrop 2',
    description: 'Backdrop of elegant space layout for the home testimonials section (slide 2).',
    defaultUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop'
  },
  {
    key: 'bilal_headshot',
    label: 'Founder Bilal Jammal Headshot',
    description: 'Override portrait URL of Bilal Jammal. Leave empty to use the pristine generated headshot portrait asset.',
    defaultUrl: ''
  }
];

const LOCAL_STORAGE_PREFIX = 'alonz_homes_override_img_';
const LISTENERS = new Set<() => void>();

export function getImageUrl(key: string, defaultFallback: string): string {
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
  try {
    localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${key}`, url.trim());
    notifyListeners();
  } catch (e) {
    console.error('Failed to write to localStorage', e);
  }
}

export function resetImageUrl(key: string): void {
  try {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}${key}`);
    notifyListeners();
  } catch (e) {
    console.error('Failed to remove from localStorage', e);
  }
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
