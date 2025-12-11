import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white bg-grid-paper">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-5xl font-hand font-bold text-gray-900">O que dizem os pais</h2>
          <div className="animate-on-scroll delay-100 w-32 h-2 bg-pastel-peach mx-auto mt-4 rounded-full border border-marker-black transform -rotate-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className={`
                animate-on-scroll animate-zoom delay-${(idx + 1) * 100}
                bg-[#FFF9F5] p-8 border-2 border-marker-black relative hover:-translate-y-2 transition-transform
                ${idx % 2 === 0 ? 'border-messy-1' : 'border-messy-2'}
                shadow-comic
              `}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-pastel-pink opacity-50 fill-current" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-marker-black overflow-hidden bg-white">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-hand text-xl font-bold text-gray-900">{t.name}</h4>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide bg-pastel-yellow/50 px-2 py-0.5 rounded-sm border border-marker-black">{t.role}</span>
                </div>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed font-hand text-lg">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;