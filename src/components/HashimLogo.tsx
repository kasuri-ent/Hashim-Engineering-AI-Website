import React from 'react';

interface HashimLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'full' | 'monogram' | 'stacked';
  theme?: 'dark' | 'light';
}

export const HashimLogo: React.FC<HashimLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  theme = 'dark',
}) => {
  const sizeMap = {
    sm: { width: 36, height: 36, monogramSize: 36, textSize: 'text-sm', subtextSize: 'text-[9px]' },
    md: { width: 48, height: 48, monogramSize: 48, textSize: 'text-base sm:text-lg', subtextSize: 'text-[10px]' },
    lg: { width: 64, height: 64, monogramSize: 64, textSize: 'text-lg sm:text-xl', subtextSize: 'text-[11px]' },
    xl: { width: 84, height: 84, monogramSize: 84, textSize: 'text-xl sm:text-2xl', subtextSize: 'text-xs' },
    '2xl': { width: 140, height: 140, monogramSize: 140, textSize: 'text-3xl', subtextSize: 'text-sm' },
  };

  const { monogramSize, textSize, subtextSize } = sizeMap[size];
  const eFillColor = theme === 'dark' ? '#FFFFFF' : '#0F172A';
  const textColor = theme === 'dark' ? 'text-white' : 'text-slate-900';
  const subtextColor = theme === 'dark' ? 'text-slate-400' : 'text-slate-600';

  // Exact 100% Vector recreation of the attached HE Logo Transparent 3
  const MonogramSvg = (
    <svg
      width={monogramSize}
      height={monogramSize}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
    >
      <defs>
        {/* Soft realistic drop shadow matching HE Logo Transparent 3 */}
        <filter id="heLogoShadowExact" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="3" dy="5" stdDeviation="5.5" floodColor="#000000" floodOpacity="0.4" />
        </filter>
        <filter id="heHShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Layer 1: Classical Serif "E" in the background */}
      <g filter="url(#heLogoShadowExact)" opacity="0.95">
        <path
          d="M242 128 H344 V158 H334 L332 142 H268 V200 H324 V214 H268 V276 H340 L342 260 H352 V290 H242 Z"
          fill={eFillColor}
        />
      </g>

      {/* Layer 2: Signature Red "H" with distinct calligraphic sweeps */}
      <g filter="url(#heHShadow)">
        {/* Left Stem Top Serif: Horizontal bracketed cap */}
        <path
          d="M102 88 H178 V93 C166 94 160 100 160 110 V202 H124 V110 C124 100 118 94 102 93 Z"
          fill="#BA1515"
        />

        {/* Left Lower Stem: Sweeps gracefully downward and to the LEFT to a sharp fine point */}
        <path
          d="M124 202 H160 V218 C160 274 152 324 124 354 C112 367 98 372 86 374 C99 366 111 352 117 336 C123 314 124 278 124 218 Z"
          fill="#BA1515"
        />

        {/* Central Connecting Crossbar */}
        <rect x="159" y="202" width="117" height="13" fill="#BA1515" />

        {/* Right Stem Bottom Serif: Classical horizontal bracketed base */}
        <path
          d="M246 328 H322 V323 C310 322 304 316 304 304 V215 H274 V304 C274 316 268 322 246 323 Z"
          fill="#BA1515"
        />

        {/* Right Upper Pillar: Arches into dramatic upward-right scythe/horn flourish */}
        <path
          d="M274 215 V178 C274 124 290 68 332 36 C312 80 304 134 304 178 V215 Z"
          fill="#BA1515"
        />
      </g>
    </svg>
  );

  // Variant: Stacked 100% exact replica of HE Logo Transparent 3.png
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
        <div className="relative flex items-center justify-center">
          {MonogramSvg}
        </div>
        <div className="flex flex-col items-center mt-2 leading-none">
          <span
            className={`font-serif font-black tracking-[0.14em] uppercase ${textColor} ${textSize} drop-shadow-sm`}
          >
            HASHIM
          </span>
          <span
            className={`font-sans tracking-[0.32em] font-bold uppercase ${subtextColor} ${subtextSize} mt-1`}
          >
            ENGINEERING
          </span>
        </div>
      </div>
    );
  }

  // Variant: Monogram Icon Only
  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        {MonogramSvg}
      </div>
    );
  }

  // Variant: Full Horizontal Lockup (Default for Web Headers & Footers)
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {MonogramSvg}

      <div className="flex flex-col leading-none text-left">
        <span
          className={`font-serif font-extrabold tracking-[0.08em] uppercase ${textColor} ${textSize} drop-shadow-sm`}
        >
          HASHIM
        </span>
        <span
          className={`font-sans tracking-[0.28em] font-bold uppercase ${subtextColor} ${subtextSize} mt-1`}
        >
          ENGINEERING
        </span>
      </div>
    </div>
  );
};
