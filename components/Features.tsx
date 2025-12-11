import React from 'react';
import { Brain, Heart, Smile, Sun, Stars } from 'lucide-react';
import SectionDivider from './SectionDivider';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-gray-900" />,
    title: "Mentes Brilhantes",
    desc: "Estimula o raciocínio lógico e a resolução de problemas desde cedo.",
    color: "bg-pastel-blue",
    rotation: "rotate-2"
  },
  {
    icon: <Heart className="w-8 h-8 text-gray-900" />,
    title: "100% Seguro",
    desc: "Materiais atóxicos, sustentáveis e bordas arredondadas.",
    color: "bg-pastel-pink",
    rotation: "-rotate-2"
  },
  {
    icon: <Smile className="w-8 h-8 text-gray-900" />,
    title: "Pura Alegria",
    desc: "Aprender não precisa ser chato. Nossos brinquedos arrancam gargalhadas!",
    color: "bg-pastel-peach",
    rotation: "rotate-1"
  },
  {
    icon: <Sun className="w-8 h-8 text-gray-900" />,
    title: "Livre Brincar",
    desc: "Design pensado para mãos pequenas explorarem o mundo com autonomia.",
    color: "bg-pastel-green",
    rotation: "-rotate-3"
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden bg-grid-paper">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="animate-on-scroll flex items-center justify-center gap-2 mb-2">
            <Stars className="w-6 h-6 text-pastel-pink fill-current" />
            <span className="font-hand text-2xl text-gray-600 font-bold">Por que escolher?</span>
          </div>
          <h2 className="animate-on-scroll delay-100 text-4xl md:text-6xl font-hand font-bold text-gray-900 mt-2 mb-6">
            Brincar é a melhor forma de <br />
            <span className="relative inline-block px-4 pt-1 mt-2">
               <span className="relative z-10">crescer</span>
               <div className="absolute inset-0 bg-pastel-beige -rotate-2 -z-10 border-2 border-marker-black border-messy-3"></div>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`
                animate-on-scroll delay-${(idx + 1) * 100}
                group p-6 ${feature.color} border-2 border-marker-black 
                ${idx % 2 === 0 ? 'border-messy-1' : 'border-messy-2'}
                shadow-comic hover:shadow-comic-hover transition-all duration-300 text-center
                hover:-translate-y-1 transform ${feature.rotation} hover:rotate-0
                relative
              `}
            >
              <div className="w-16 h-16 mx-auto bg-white border-2 border-marker-black rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-hand font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-800 font-medium leading-relaxed">{feature.desc}</p>
              
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 border-l border-r border-white/60 rotate-1 backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
      </div>
      <SectionDivider color="#FFF9F5" variant="curve" />
    </section>
  );
};

export default Features;