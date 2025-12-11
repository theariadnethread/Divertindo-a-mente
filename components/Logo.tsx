import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'default';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'default' }) => {
  const isHeader = variant === 'header';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Icon: ABC Blocks & Shape Sorter */}
      <svg 
        viewBox="0 0 120 100" 
        className={`${isHeader ? 'h-12 w-auto' : 'h-24 w-auto'} drop-shadow-sm`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shape Sorter Board (Back) */}
        <path d="M45 40 L110 20 L115 70 L50 90 Z" fill="#E8D4B8" stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M50 90 L115 70" stroke="#2D2D2D" strokeWidth="1" strokeOpacity="0.3" />
        
        {/* Shapes on Board */}
        {/* Triangle */}
        <path d="M95 30 L85 45 L105 45 Z" fill="#C94C4C" stroke="#2D2D2D" strokeWidth="1.5" />
        {/* Circle */}
        <circle cx="98" cy="60" r="8" fill="#5E8B7E" stroke="#2D2D2D" strokeWidth="1.5" />
        {/* Rectangle */}
        <rect x="65" y="55" width="12" height="20" transform="rotate(-15 65 55)" fill="#3B8686" stroke="#2D2D2D" strokeWidth="1.5" />

        {/* Blocks (Front) */}
        
        {/* Block A (Top) */}
        <g transform="translate(25, 5)">
            <rect x="0" y="10" width="30" height="30" fill="#EEA47F" stroke="#2D2D2D" strokeWidth="2.5" rx="2" />
            <path d="M0 10 L10 0 L40 0 L30 10" fill="#FFCBA4" stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M40 0 L40 30 L30 40" fill="#D4A373" stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="15" y="32" fontFamily='"Gochi Hand", cursive' fontSize="22" fill="white" textAnchor="middle" stroke="#2D2D2D" strokeWidth="0.5">A</text>
        </g>

        {/* Block B (Bottom Left) */}
        <g transform="translate(5, 45)">
            <rect x="0" y="10" width="30" height="30" fill="#C94C4C" stroke="#2D2D2D" strokeWidth="2.5" rx="2" />
            <path d="M0 10 L10 0 L40 0 L30 10" fill="#F2A0A8" stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="15" y="32" fontFamily='"Gochi Hand", cursive' fontSize="22" fill="white" textAnchor="middle" stroke="#2D2D2D" strokeWidth="0.5">B</text>
        </g>

         {/* Block C (Bottom Right) */}
         <g transform="translate(40, 50)">
            <rect x="0" y="0" width="30" height="30" fill="#5E8B7E" stroke="#2D2D2D" strokeWidth="2.5" rx="2" />
            <path d="M30 0 L40 -10 L40 20 L30 30" fill="#3B8686" stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round" />
             <text x="15" y="22" fontFamily='"Gochi Hand", cursive' fontSize="22" fill="white" textAnchor="middle" stroke="#2D2D2D" strokeWidth="0.5">C</text>
        </g>
      </svg>

      {/* Text Part - Scalable CSS Typography */}
      <div className={`flex flex-col ${isHeader ? 'items-start' : 'items-center'} leading-none`}>
         <div className={`font-hand font-black tracking-tighter flex ${isHeader ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'}`}>
            <span className="text-logo-red transform -rotate-2">D</span>
            <span className="text-logo-teal transform rotate-1">I</span>
            <span className="text-logo-orange transform -rotate-1">V</span>
            <span className="text-logo-green transform rotate-2">E</span>
            <span className="text-logo-red transform -rotate-1">R</span>
            <span className="text-logo-teal transform rotate-1">T</span>
            <span className="text-logo-orange transform -rotate-2">I</span>
            <span className="text-logo-green transform rotate-2">N</span>
            <span className="text-logo-red transform -rotate-1">D</span>
            <span className="text-logo-teal transform rotate-1">O</span>
         </div>
         <div className="flex items-center gap-1.5 ml-1">
            <span className={`font-hand font-bold text-logo-wood uppercase tracking-widest ${isHeader ? 'text-sm md:text-base' : 'text-lg md:text-xl'}`}>
                A Mente
            </span>
            {!isHeader && (
                <span className="hidden md:inline-block px-1.5 py-0.5 bg-logo-teal text-white text-[10px] font-bold rounded uppercase tracking-wide transform -rotate-2">
                    Brinquedos
                </span>
            )}
         </div>
      </div>
    </div>
  );
};

export default Logo;