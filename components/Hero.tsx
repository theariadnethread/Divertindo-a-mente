import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionDivider from './SectionDivider';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FFF9F5] bg-grid-paper">
      
      {/* --- DECORATIVE LOGO ELEMENTS (BLOCKS & SHAPES) --- */}
      
      {/* Block A (Floating Left) */}
      <div className="absolute top-32 left-4 md:left-20 animate-float opacity-90 z-10 hidden sm:block">
        <svg width="80" height="90" viewBox="0 0 100 110" className="drop-shadow-lg">
          {/* 3D Cube Effect */}
          <path d="M0 25 L50 0 L100 25 L100 85 L50 110 L0 85 Z" fill="#C94C4C" stroke="#2D2D2D" strokeWidth="3" /> {/* Front Red */}
          <path d="M0 25 L50 0 L50 60 L0 85 Z" fill="#A83939" opacity="0.3" /> {/* Shadow side */}
          <path d="M10 35 L90 35 L90 80 L10 80 Z" fill="#E8D4B8" stroke="#2D2D2D" strokeWidth="2" className="translate-y-2 translate-x-1" /> {/* Inner Face */}
          <text x="50" y="75" textAnchor="middle" fontFamily="'Gochi Hand', cursive" fontSize="50" fill="#3B8686">A</text>
        </svg>
      </div>

      {/* Block B (Floating Right) */}
      <div className="absolute bottom-40 right-4 md:right-12 animate-float-delayed opacity-90 z-10 hidden sm:block">
        <svg width="70" height="80" viewBox="0 0 100 110" className="drop-shadow-lg rotate-12">
          <path d="M0 25 L50 0 L100 25 L100 85 L50 110 L0 85 Z" fill="#3B8686" stroke="#2D2D2D" strokeWidth="3" />
          <path d="M10 35 L90 35 L90 80 L10 80 Z" fill="#E8D4B8" stroke="#2D2D2D" strokeWidth="2" className="translate-y-2 translate-x-1" />
          <text x="50" y="75" textAnchor="middle" fontFamily="'Gochi Hand', cursive" fontSize="50" fill="#C94C4C">B</text>
        </svg>
      </div>

       {/* Block C (Floating Bottom Left) */}
      <div className="absolute bottom-20 left-10 md:left-32 animate-wiggle opacity-90 z-10 hidden sm:block">
        <svg width="60" height="70" viewBox="0 0 100 110" className="drop-shadow-lg -rotate-12">
          <path d="M0 25 L50 0 L100 25 L100 85 L50 110 L0 85 Z" fill="#EEA47F" stroke="#2D2D2D" strokeWidth="3" />
          <path d="M10 35 L90 35 L90 80 L10 80 Z" fill="#E8D4B8" stroke="#2D2D2D" strokeWidth="2" className="translate-y-2 translate-x-1" />
          <text x="50" y="75" textAnchor="middle" fontFamily="'Gochi Hand', cursive" fontSize="50" fill="#5E8B7E">C</text>
        </svg>
      </div>

      {/* Shape Sorter Board (Floating Top Right) */}
      <div className="absolute top-28 right-10 md:right-32 animate-spin-slow opacity-80 z-0 hidden lg:block">
        <svg width="150" height="100" viewBox="0 0 200 140" className="drop-shadow-xl">
           {/* Board Base */}
           <rect x="5" y="5" width="190" height="130" rx="10" fill="#E8D4B8" stroke="#2D2D2D" strokeWidth="4" />
           {/* Triangle Hole */}
           <path d="M50 80 L30 110 L70 110 Z" fill="#2D2D2D" opacity="0.2" />
           <path d="M50 75 L30 105 L70 105 Z" fill="#C94C4C" stroke="#2D2D2D" strokeWidth="2" />
           {/* Circle Hole */}
           <circle cx="100" cy="50" r="20" fill="#2D2D2D" opacity="0.2" />
           <circle cx="100" cy="48" r="20" fill="#5E8B7E" stroke="#2D2D2D" strokeWidth="2" />
           {/* Square Hole */}
           <rect x="130" y="70" width="40" height="40" fill="#2D2D2D" opacity="0.2" />
           <rect x="130" y="68" width="40" height="40" fill="#3B8686" stroke="#2D2D2D" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 relative z-20">
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-white px-4 py-1.5 border-2 border-marker-black border-messy-2 transform -rotate-1 mb-2 shadow-comic-pink">
              <Sparkles className="w-4 h-4 text-logo-red" />
              <span className="font-hand text-xl font-bold text-gray-800 tracking-wide">Educação & Diversão</span>
            </div>
            
            <h1 className="animate-on-scroll delay-100 text-5xl md:text-7xl font-hand font-bold text-gray-900 leading-[0.9]">
              Aprender brincando<br/> nunca foi tão
              <span className="relative inline-block mx-2 text-white">
                <span className="relative z-10 px-2">Divertido!</span>
                <div className="absolute inset-0 bg-logo-red -z-10 border-2 border-marker-black border-messy-1 transform -rotate-2"></div>
              </span>
            </h1>
            
            <p className="animate-on-scroll delay-200 text-xl text-gray-700 max-w-lg mx-auto md:mx-0 font-medium font-sans">
              Brinquedos educativos que estimulam a criatividade, cores que encantam e formas que ensinam.
            </p>
            
            <div className="animate-on-scroll delay-300 flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center md:justify-start">
              <button 
                onClick={onNavigate}
                className="group relative px-8 py-3 bg-logo-green text-white font-hand text-2xl font-bold border-2 border-marker-black border-messy-2 shadow-comic hover:shadow-comic-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block"
              >
                Ver Loja
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a href="#sobre" className="font-hand text-2xl text-gray-700 font-bold hover:text-logo-orange transition-colors flex items-center gap-2 group decoration-2 decoration-wavy underline underline-offset-4 justify-center md:justify-start">
                Nossa História
              </a>
            </div>
          </div>

          {/* Hero Image Frame */}
          <div className="flex-1 relative w-full max-w-lg mt-12 md:mt-0 animate-on-scroll animate-zoom delay-200">
            <div className="relative w-full aspect-square">
               
               {/* Background Blobs */}
               <div className="absolute inset-0 bg-logo-orange border-2 border-marker-black border-messy-3 rotate-6 scale-105"></div>
               <div className="absolute inset-0 bg-logo-teal border-2 border-marker-black border-messy-1 -rotate-3 scale-100"></div>

               {/* Main Image */}
               <div className="absolute inset-2 z-10 bg-white border-2 border-marker-black border-messy-2 overflow-hidden rotate-0">
                  <img 
                    src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80" 
                    alt="Criança brincando feliz" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
               </div>

               {/* Sticker Badge 1 */}
               <div className="absolute -top-6 -right-6 z-20 w-32 h-32 animate-float-delayed">
                 <div className="w-full h-full bg-white border-2 border-marker-black rounded-full flex items-center justify-center shadow-comic-red p-1">
                   <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-100">
                     <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=300&q=80" alt="Brinquedo" className="w-full h-full object-cover" />
                   </div>
                 </div>
               </div>

               {/* Sticker Badge 2 */}
               <div className="absolute -bottom-8 -left-4 z-20 bg-logo-wood text-white px-4 py-2 border-2 border-marker-black border-messy-1 shadow-comic transform -rotate-6 animate-wiggle">
                 <span className="font-hand text-xl font-bold">Aprender & Criar</span>
               </div>

            </div>
          </div>
        </div>
      </div>
      
      <SectionDivider color="#ffffff" variant="wave1" />
    </section>
  );
};

export default Hero;