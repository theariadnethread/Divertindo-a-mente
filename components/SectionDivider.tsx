import React from 'react';

interface SectionDividerProps {
  color?: string;
  position?: 'top' | 'bottom';
  variant?: 'wave1' | 'wave2' | 'curve';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  color = '#FFFFFF', 
  position = 'bottom',
  variant = 'wave1' 
}) => {
  const isTop = position === 'top';
  
  const paths = {
    wave1: "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    wave2: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
    curve: "M0,160L60,170.7C120,181,240,203,360,202.7C480,203,600,181,720,165.3C840,149,960,139,1080,149.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
  };

  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-none ${isTop ? '-top-1 rotate-180' : '-bottom-1'}`} style={{ zIndex: 1 }}>
      <svg 
        className="relative block w-full h-[60px] md:h-[120px]" 
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill={color} 
          fillOpacity="1" 
          d={paths[variant]}
        ></path>
      </svg>
    </div>
  );
};

export default SectionDivider;