import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 94 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9961 24C15.4243 24 18.2838 23.0116 20.5746 21.0349C22.8654 19.0581 23.9922 16.2907 23.9922 12.7326C23.9922 9.17442 22.8654 6.40698 20.5746 4.43023C18.2838 2.45349 15.4243 1.46512 11.9961 1.46512C8.56791 1.46512 5.70842 2.45349 3.41761 4.43023C1.1268 6.40698 0 9.17442 0 12.7326C0 16.2907 1.1268 19.0581 3.41761 21.0349C5.70842 23.0116 8.56791 24 11.9961 24ZM11.9961 20.1395C9.88715 20.1395 8.15017 19.4651 6.78517 18.1163C5.42017 16.7674 4.73767 14.9419 4.73767 12.6395C4.73767 10.3372 5.42017 8.51163 6.78517 7.16279C8.15017 5.81395 9.88715 5.13953 11.9961 5.13953C14.105 5.13953 15.842 5.81395 17.207 7.16279C18.572 8.51163 19.2545 10.3372 19.2545 12.6395C19.2545 14.9419 18.572 16.7674 17.207 18.1163C15.842 19.4651 14.105 20.1395 11.9961 20.1395Z" fill="currentColor"/>
        <text x="30" y="18" fontFamily="Manrope, sans-serif" fontSize="18" fontWeight="bold" fill="currentColor">alonz.</text>
    </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

{/* FIX: Add missing CodeIcon, RocketIcon, and ShieldIcon components to fix errors in Features.tsx */}
export const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const LocationIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const HomeGraphIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 17l-4-4-4 4"/>
    </svg>
);

export const FileIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
    </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 16l4-6a2 2 0 00-2-2H5a2 2 0 00-2 2l4 6M5 16h14m-3-3h.01M8 13h.01M5 16v-4a2 2 0 012-2h10a2 2 0 012 2v4M5 16v2a1 1 0 001 1h12a1 1 0 001-1v-2"/>
    </svg>
);

export const CheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

export const CrownIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 18v-2a4 4 0 014-4h6a4 4 0 014 4v2M5 18a2 2 0 00-2 2h18a2 2 0 00-2-2M5 18h14M12 14a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
    </svg>
);

export const SilverServiceIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 11l-1 2-2-1 1-2 2 1zM10 12l2 2m-2-2l-2-2" />
    </svg>
);

export const TailoredPackageIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
    </svg>
);

export const QuoteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 40 32" fill="currentColor">
        <path d="M7.33333 32C5.33333 32 3.55556 31.2667 2.00001 29.8C0.444453 28.3333 0.0222314 26.4 0.222231 24L1.77778 16C2.06668 14.1333 2.97778 12.4889 4.51112 11.0667C6.04445 9.64444 7.68889 8.8 9.44445 8.53333L10.6667 6.4C11.1111 5.46667 11.8444 4.84444 12.8667 4.53333C13.8889 4.22222 14.8889 4.33333 15.8667 4.86667L18 6.4L13.3333 16L10.6667 15.4667C10.1333 15.3333 9.66668 15.4667 9.26668 15.8667C8.86668 16.2667 8.66668 16.7333 8.66668 17.2667V18.1333C8.66668 18.5333 8.8 18.8889 9.06668 19.2C9.33334 19.5111 9.66668 19.6667 10.0667 19.6667H11.7778C11.2445 22.9333 9.64445 25.7333 7.33333 32ZM27.3333 32C25.3333 32 23.5556 31.2667 22 29.8C20.4445 28.3333 20.0222 26.4 20.2222 24L21.7778 16C22.0667 14.1333 22.9778 12.4889 24.5111 11.0667C26.0445 9.64444 27.6889 8.8 29.4445 8.53333L30.6667 6.4C31.1111 5.46667 31.8444 4.84444 32.8667 4.53333C33.8889 4.22222 34.8889 4.33333 35.8667 4.86667L38 6.4L33.3333 16L30.6667 15.4667C30.1333 15.3333 29.6667 15.4667 29.2667 15.8667C28.8667 16.2667 28.6667 16.7333 28.6667 17.2667V18.1333C28.6667 18.5333 28.8 18.8889 29.0667 19.2C29.3333 19.5111 29.6667 19.6667 30.0667 19.6667H31.7778C31.2445 22.9333 29.6445 25.7333 27.3333 32Z"/>
    </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.22l-1.026 3.758 3.82-1.017z" />
    </svg>
);