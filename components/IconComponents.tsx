import React from 'react';

interface IconProps {
  className?: string;
}

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 107 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main letter paths — use currentColor so they go white on dark backgrounds */}
    <path d="M106.262 37.7269C106.262 38.7373 105.328 39.2951 104.337 39.0741C104.231 39.0531 104.121 39.0267 104.01 39.0057C99.9018 38.1532 95.6566 38.1426 91.5327 38.9162C91.2163 38.9741 90.9262 39.032 90.6731 39.0899C89.6869 39.3057 88.7588 38.5531 88.7588 37.548V35.143C88.7588 34.3641 89.3283 33.7011 90.0983 33.5853C90.9842 33.4485 92.503 33.2695 93.9479 33.1117C96.4001 32.838 98.8787 32.8433 101.331 33.1222C102.686 33.2801 104.089 33.4485 104.922 33.58C105.692 33.7011 106.256 34.3641 106.256 35.1377V37.7322L106.262 37.7269Z" fill="currentColor"/>
    <path d="M31.4255 0H28.0557C27.4732 0 27.001 0.471223 27.001 1.05251V34.5327C27.001 35.114 27.4732 35.5852 28.0557 35.5852H31.4255C32.008 35.5852 32.4802 35.114 32.4802 34.5327V1.05251C32.4802 0.471223 32.008 0 31.4255 0Z" fill="currentColor"/>
    <path d="M47.9738 13.6089C44.6937 13.6089 41.9409 14.6824 39.726 16.8348C37.5059 18.9872 36.3984 21.6606 36.3984 24.8496C36.3984 28.0387 37.5059 30.7174 39.726 32.8645C41.9462 35.0169 44.6937 36.0904 47.9738 36.0904C51.254 36.0904 54.0015 35.0169 56.2111 32.8645C58.4207 30.7121 59.5282 28.0387 59.5282 24.8496C59.5282 21.6606 58.4207 18.9819 56.2111 16.8348C54.0015 14.6824 51.254 13.6089 47.9738 13.6089ZM52.1979 29.0965C51.0852 30.228 49.6772 30.791 47.9738 30.791C46.2705 30.791 44.8783 30.2227 43.7497 29.086C42.6212 27.9493 42.0622 26.5389 42.0622 24.8496C42.0622 23.1604 42.6265 21.7553 43.7497 20.6133C44.873 19.4766 46.281 18.9083 47.9738 18.9083C49.6666 18.9083 51.0852 19.4713 52.1979 20.6028C53.3107 21.7342 53.8644 23.1499 53.8644 24.8496C53.8644 26.5494 53.3107 27.9651 52.1979 29.0965Z" fill="currentColor"/>
    <path d="M64.6592 33.4801H64.7014C64.7647 33.4801 64.828 33.459 64.8912 33.4432C66.2044 33.138 67.3012 32.8223 68.6302 32.375C68.8147 32.3118 68.9255 32.1171 68.9255 31.9224V23.2813C68.9255 21.8131 69.3896 20.6342 70.3177 19.7344C71.2458 18.8345 72.4588 18.3871 73.9512 18.3871C75.4436 18.3871 76.5247 18.8239 77.379 19.6923C78.2386 20.5606 78.6657 21.7236 78.6657 23.176V27.2913C78.6657 27.6597 79.0559 27.8965 79.3882 27.7281C81.1759 26.9388 82.3625 26.323 83.9023 25.3705C84.0658 25.2863 84.166 25.1179 84.166 24.9337V21.4078C84.166 18.8871 83.4013 16.8663 81.8667 15.3559C80.3374 13.8403 78.3018 13.0825 75.76 13.0825C73.2182 13.0825 71.3355 13.7824 69.7271 15.1875C69.4159 15.4612 68.9202 15.2244 68.9202 14.8086C68.9202 14.1403 68.377 13.5982 67.7073 13.5982H64.6592C63.9895 13.5982 63.4463 14.1403 63.4463 14.8086V32.2644C63.4463 32.9328 63.9895 33.4748 64.6592 33.4748V33.4801Z" fill="currentColor"/>
    <path d="M18.2833 14.3616H22.2174C22.6446 14.3616 22.9926 14.709 22.9926 15.1352V35.0539C22.9926 35.4802 22.6446 35.8275 22.2174 35.8275H18.2833C17.8562 35.8275 17.5081 35.4802 17.5081 35.0539V33.2541C15.6255 35.3118 13.2893 36.338 10.5049 36.338C7.50951 36.338 5.00986 35.2644 3.00591 33.112C1.00197 30.9597 0 28.2863 0 25.0972C0 21.9081 1.00197 19.2295 3.00591 17.0824C5.00986 14.93 7.50951 13.8564 10.5049 13.8564C13.3051 13.8564 15.6413 14.8774 17.5081 16.9192V15.1405C17.5081 14.7142 17.8562 14.3669 18.2833 14.3669V14.3616ZM11.5543 31.0333C13.2577 31.0333 14.6762 30.465 15.8101 29.3283C16.9439 28.1916 17.5081 26.7812 17.5081 25.0919C17.5081 23.4027 16.9439 21.9976 15.8101 20.8556C14.6762 19.7189 13.2577 19.1505 11.5543 19.1505C9.85096 19.1505 8.45875 19.7189 7.33021 20.8556C6.20168 21.9923 5.64268 23.4027 5.64268 25.0919C5.64268 26.7812 6.20695 28.1916 7.33021 29.3283C8.45348 30.465 9.86151 31.0333 11.5543 31.0333Z" fill="currentColor"/>
    <path d="M84.2081 35.4589V38.769C84.2081 39.0585 83.9603 39.2953 83.6544 39.2953H79.2774C78.9715 39.2953 78.7236 39.0585 78.7236 38.769V37.7165C78.7236 37.5218 78.8344 37.3482 79.0137 37.2534L83.3907 34.9958C83.7599 34.8063 84.2134 35.0589 84.2134 35.4589H84.2081Z" fill="currentColor"/>
    {/* Decorative grey accent paths — fixed colour, visible on both light and dark */}
    <path d="M18.5891 40.3527C28.7618 40.2212 38.7499 39.6265 48.7801 38.2793C58.6785 37.1215 68.2869 34.7587 77.4049 30.6749C83.4642 27.9858 89.265 24.6651 94.9446 20.9761C95.3665 20.6972 95.9361 20.8182 96.2103 21.2392C96.4476 21.6076 96.3896 22.0865 96.089 22.3812C86.238 32.1537 73.3126 39.0318 59.6752 41.8526C52.8355 43.2419 45.9588 43.7839 39.0135 43.9734C32.1052 44.1154 25.1863 43.6629 18.4098 42.4156C17.2075 42.1788 17.3129 40.3948 18.5839 40.3527H18.5891Z" fill="#9FA4A7"/>
    <path d="M88.6055 15.5979C93.088 11.7247 100.07 11.6405 105.328 14.0928L106.989 14.8927L106.994 16.5873C106.963 22.5602 103.973 29.1542 98.0029 31.2118C96.8902 31.596 95.883 30.2909 96.5158 29.3173C97.2277 28.1806 97.9238 27.1439 98.5144 26.0914C100.197 23.1076 101.663 19.9342 101.742 16.4768C101.742 16.4768 103.414 18.9765 103.408 18.9765C101.183 18.3397 98.9469 17.7608 96.6423 17.5503C94.1849 17.3977 91.7749 18.0187 89.2541 17.824C88.1309 17.7608 87.6984 16.2505 88.5949 15.5979H88.6055Z" fill="#9FA4A7"/>
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