import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const TestimonialScroll: React.FC = () => {
  // Triple the list to ensure smooth infinite scroll
  const scrollList = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden relative border-t-2 border-marker-black">
      
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="animate-on-scroll text-5xl font-hand font-bold text-gray-900">Famílias que Amam</h2>
        <p className="animate-on-scroll delay-100 text-lg text-gray-600 mt-2 font-medium">Veja o que dizem quem já comprou</p>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#F2A0A8_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      <div className="relative w-full">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {scrollList.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`} 
              className="w-[300px] md:w-[400px] mx-4 flex-shrink-0"
            >
              <div 
                className={`
                  bg-[#FFF9F5] p-6 border-2 border-marker-black rounded-2xl relative
                  ${idx % 2 === 0 ? 'rotate-1 border-messy-1 shadow-comic' : '-rotate-1 border-messy-2 shadow-comic-blue'}
                  hover:scale-[1.02] transition-transform duration-300
                `}
              >
                <div className="flex gap-1 mb-3">
                    {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 text-pastel-yellow fill-current stroke-marker-black stroke-1" />
                    ))}
                </div>
                
                <p className="text-gray-800 font-medium font-hand text-lg mb-6 leading-relaxed line-clamp-4">"{t.text}"</p>
                
                <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-gray-200">
                  <div className="w-12 h-12 rounded-full border-2 border-marker-black overflow-hidden bg-white shrink-0">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none">{t.name}</h4>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialScroll;