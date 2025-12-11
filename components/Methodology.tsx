import React from 'react';
import { METHODOLOGY } from '../constants';
import SectionDivider from './SectionDivider';

const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-pastel-yellow/20 relative">
      <SectionDivider color="#FFF9F5" position="top" variant="curve" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Text Side */}
            <div className="lg:w-1/3">
                <div className="animate-on-scroll inline-block bg-white px-4 py-1 border-2 border-marker-black border-messy-3 transform -rotate-2 mb-4 shadow-sm">
                    <span className="font-hand font-bold text-gray-900">Nossa Filosofia</span>
                </div>
                <h2 className="animate-on-scroll delay-100 text-5xl font-hand font-bold text-gray-900 mb-6 leading-tight">
                    Mais que brinquedos,<br/>
                    <span className="text-pastel-pink">ferramentas de vida.</span>
                </h2>
                <p className="animate-on-scroll delay-200 text-gray-700 text-lg font-medium leading-relaxed mb-8">
                    Baseamos nossa curadoria em estudos pedagógicos comprovados. Cada peça é selecionada pensando no desenvolvimento cognitivo, motor e emocional da criança, longe das telas e do consumismo excessivo.
                </p>
                <button className="animate-on-scroll delay-300 px-6 py-3 bg-white border-2 border-marker-black rounded-full font-bold shadow-comic hover:shadow-comic-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    Ler sobre nossos especialistas
                </button>
            </div>

            {/* Grid Side */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {METHODOLOGY.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`
                            animate-on-scroll delay-${(idx + 1) * 100}
                            bg-white p-6 border-2 border-marker-black rounded-2xl shadow-comic
                            flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300
                        `}
                    >
                        <div className={`p-3 rounded-xl border-2 border-marker-black ${item.color} shrink-0`}>
                            <item.icon className="w-8 h-8 text-gray-900" />
                        </div>
                        <div>
                            <h3 className="font-hand font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
      </div>
      
      <SectionDivider color="#FFFFFF" position="bottom" variant="wave2" />
    </section>
  );
};

export default Methodology;