import React from 'react';
import SectionDivider from './SectionDivider';

const About: React.FC = () => {
  return (
    <section id="sobre" className="relative py-24 bg-pastel-green/20">
      <SectionDivider color="#FFF9F5" position="top" variant="wave2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Collage - Hand Drawn Frames */}
          <div className="lg:w-1/2 relative h-[500px] w-full max-w-lg mx-auto lg:mx-0 animate-on-scroll animate-fade-right">
             {/* Back Image */}
             <div className="absolute top-0 right-0 w-3/4 h-3/4 transform rotate-3 z-10">
                <div className="absolute inset-0 bg-pastel-pink border-2 border-marker-black border-messy-3 translate-x-2 translate-y-2"></div>
                <div className="relative w-full h-full bg-white border-2 border-marker-black border-messy-3 overflow-hidden p-2">
                   <img 
                    src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&w=600&q=80" 
                    alt="Pai brincando com filho" 
                    className="w-full h-full object-cover rounded-[30px]" 
                  />
                </div>
             </div>
             
             {/* Front Image */}
             <div className="absolute bottom-0 left-0 w-3/5 h-3/5 transform -rotate-2 z-20">
                <div className="absolute inset-0 bg-pastel-blue border-2 border-marker-black border-messy-1 translate-x-2 translate-y-2"></div>
                 <div className="relative w-full h-full bg-white border-2 border-marker-black border-messy-1 overflow-hidden p-2">
                    <img 
                      src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=500&q=80" 
                      alt="Criança explorando" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                </div>
                
                {/* Decorative sticker */}
                <div className="absolute -top-4 -right-4 bg-white p-3 border-2 border-marker-black rounded-full shadow-comic animate-bounce">
                  <span className="text-2xl">❤️</span>
                </div>
             </div>

             {/* Doodle Arrow */}
             <svg className="absolute bottom-10 right-0 w-24 h-24 text-gray-800 transform rotate-12 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M10 10 Q 50 50 90 20" strokeDasharray="10,5" />
                <path d="M90 20 L 80 25 M 90 20 L 85 30" />
             </svg>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left animate-on-scroll animate-fade-left">
            <h2 className="text-5xl lg:text-6xl font-hand font-bold text-gray-900">
              Nossa missão é <br/>
              <span className="text-pastel-pink underline decoration-wavy decoration-gray-800 decoration-2 underline-offset-8">
                encantar e educar
              </span>
            </h2>
            
            <div className="space-y-4 text-xl text-gray-800 leading-relaxed font-hand font-bold">
              <p>
                A <strong>Divertindo a Mente</strong> nasceu do sonho de dois pais apaixonados por educação. Acreditamos que o brinquedo certo na hora certa pode transformar a maneira como a criança enxerga o mundo.
              </p>
              <p>
                Fugimos das telas e do excesso de estímulos digitais. Queremos trazer de volta a interação real, a alegria de montar, pintar, resolver desafios e imaginar sem limites.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="group p-4 bg-white border-2 border-marker-black border-messy-2 shadow-comic hover:scale-105 transition-transform">
                <span className="block text-5xl font-hand font-bold text-pastel-green mb-1 text-stroke-sm">5k+</span>
                <span className="block text-sm text-gray-600 font-bold uppercase tracking-wider">Famílias Felizes</span>
              </div>
              <div className="group p-4 bg-white border-2 border-marker-black border-messy-1 shadow-comic hover:scale-105 transition-transform">
                <span className="block text-5xl font-hand font-bold text-pastel-blue mb-1 text-stroke-sm">100%</span>
                <span className="block text-sm text-gray-600 font-bold uppercase tracking-wider">Pedagógico</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <SectionDivider color="#FFFFFF" position="bottom" variant="wave1" />
    </section>
  );
};

export default About;