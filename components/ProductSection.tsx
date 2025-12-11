import React, { useState, useMemo } from 'react';
import { Product, AgeCategory, SkillCategory } from '../types';
import { PRODUCTS } from '../constants';
import { Filter, ShoppingCart, Star } from 'lucide-react';

interface ProductSectionProps {
  onNavigate: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ onNavigate }) => {
  const [activeAge, setActiveAge] = useState<AgeCategory>(AgeCategory.ALL);
  const [activeSkill, setActiveSkill] = useState<SkillCategory | 'Todas'>('Todas');

  // Show only 4 items on the landing page teaser
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchAge = activeAge === AgeCategory.ALL || product.ageCategory === activeAge;
      const matchSkill = activeSkill === 'Todas' || product.skills.includes(activeSkill);
      return matchAge && matchSkill;
    }).slice(0, 4); // Limit to 4 for the teaser section
  }, [activeAge, activeSkill]);

  return (
    <section id="produtos" className="py-24 bg-[#FFF9F5] bg-grid-paper">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-on-scroll inline-block bg-pastel-yellow px-6 py-2 border-2 border-marker-black border-messy-1 shadow-comic mb-6 transform -rotate-2">
             <span className="font-hand text-xl font-bold text-gray-900 tracking-wide">Para todas as idades</span>
          </div>
          <h2 className="animate-on-scroll delay-100 text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-hand">Nossa Coleção Mágica</h2>
          <p className="animate-on-scroll delay-200 text-gray-700 max-w-xl mx-auto font-medium text-lg">
            Uma pequena amostra do nosso mundo de diversão.
          </p>
        </div>

        {/* Filters Container - Simplified for Teaser */}
        <div className="animate-on-scroll bg-white p-6 border-2 border-marker-black border-messy-2 shadow-comic mb-12 relative max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
             <span className="font-hand font-bold text-xl text-gray-500 uppercase">Filtrar Destaques:</span>
             <div className="flex flex-wrap gap-2 justify-center">
                {Object.values(AgeCategory).slice(0, 3).map((age) => (
                  <button
                    key={age}
                    onClick={() => setActiveAge(age === activeAge ? AgeCategory.ALL : age)}
                    className={`
                      px-4 py-1.5 font-hand font-bold text-lg transition-all duration-200 border-2 rounded-full
                      ${activeAge === age 
                        ? 'bg-pastel-pink text-gray-900 border-marker-black shadow-comic-hover transform -translate-y-1' 
                        : 'bg-white text-gray-600 border-gray-200 hover:border-marker-black'}
                    `}
                  >
                    {age}
                  </button>
                ))}
             </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className={`
                animate-on-scroll delay-${(idx % 4) * 100}
                group bg-white p-3 border-2 border-marker-black 
                ${idx % 2 === 0 ? 'border-messy-2 rotate-1' : 'border-messy-1 -rotate-1'}
                hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-comic hover:shadow-comic-hover
                flex flex-col h-full cursor-pointer
              `}
              onClick={onNavigate}
            >
              {/* Image Frame */}
              <div className="relative h-64 overflow-hidden rounded-xl border-2 border-gray-100 group-hover:border-marker-black transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-900 border border-marker-black shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-pastel-green border border-marker-black"></span>
                  {product.ageCategory}
                </div>
              </div>

              {/* Content */}
              <div className="pt-4 px-2 pb-2 flex flex-col flex-grow">
                <h3 className="text-xl font-hand font-bold text-gray-900 mb-1 leading-tight">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow font-sans">{product.description}</p>
                
                <div className="flex items-center justify-between pt-3 border-t-2 border-dashed border-gray-200 mt-auto">
                  <span className="text-2xl font-hand font-bold text-gray-900">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <div className="text-pastel-pink text-sm font-bold group-hover:underline">Ver detalhes</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll text-center">
            <button 
              onClick={onNavigate}
              className="px-10 py-4 bg-pastel-blue text-gray-900 rounded-full font-hand text-xl font-bold border-2 border-marker-black hover:bg-white transition-all shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000]"
            >
              Ver todos os brinquedos na Loja
            </button>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;