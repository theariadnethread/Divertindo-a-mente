import React, { useState, useMemo } from 'react';
import { Product, AgeCategory, SkillCategory } from '../types';
import { PRODUCTS } from '../constants';
import { Filter, ShoppingCart, Search, Minus, Plus, X } from 'lucide-react';
import SectionDivider from './SectionDivider';

interface ProductsPageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart }) => {
  const [activeAge, setActiveAge] = useState<AgeCategory | 'Todas'>('Todas');
  const [activeSkill, setActiveSkill] = useState<SkillCategory | 'Todas'>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 1;
      const newValue = Math.max(1, current + delta);
      return { ...prev, [id]: newValue };
    });
  };

  const getQuantity = (id: number) => quantities[id] || 1;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchAge = activeAge === 'Todas' || product.ageCategory === activeAge;
      const matchSkill = activeSkill === 'Todas' || product.skills.includes(activeSkill);
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchAge && matchSkill && matchSearch;
    });
  }, [activeAge, activeSkill, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFF9F5] pt-28 pb-20 bg-grid-paper">
      <div className="container mx-auto px-6">
        
        {/* Page Title */}
        <div className="mb-12 text-center">
            <h1 className="text-5xl font-hand font-bold text-gray-900 mb-4 animate-on-scroll">
                Nossa Loja
                <span className="text-pastel-pink text-6xl">.</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-on-scroll delay-100">
                Escolha os melhores brinquedos para o desenvolvimento do seu pequeno.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar Filters (Desktop) / Top Filters (Mobile collapsible could go here, keeping simple for now) */}
            <aside className="w-full lg:w-1/4 space-y-8 animate-on-scroll delay-200">
                
                {/* Search */}
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar brinquedo..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border-2 border-marker-black rounded-xl focus:outline-none focus:shadow-comic transition-shadow font-hand text-lg bg-white"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                {/* Filters Box */}
                <div className="bg-white p-6 border-2 border-marker-black border-messy-2 shadow-comic rounded-2xl">
                    <div className="flex items-center gap-2 mb-4 text-gray-900 border-b-2 border-dashed border-gray-200 pb-2">
                        <Filter className="w-5 h-5" />
                        <h3 className="font-hand font-bold text-2xl">Filtros</h3>
                    </div>

                    <div className="space-y-6">
                        {/* Age Filter */}
                        <div>
                            <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Idade</h4>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-5 h-5 border-2 border-marker-black rounded flex items-center justify-center ${activeAge === 'Todas' ? 'bg-pastel-pink' : 'bg-white'}`}>
                                        {activeAge === 'Todas' && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                    </div>
                                    <input type="radio" name="age" className="hidden" onChange={() => setActiveAge('Todas')} checked={activeAge === 'Todas'} />
                                    <span className="font-hand text-lg group-hover:text-pastel-pink transition-colors">Todas</span>
                                </label>
                                {Object.values(AgeCategory).filter(x => x !== 'Todas as idades').map((age) => (
                                    <label key={age} className="flex items-center gap-2 cursor-pointer group">
                                        <div className={`w-5 h-5 border-2 border-marker-black rounded flex items-center justify-center ${activeAge === age ? 'bg-pastel-pink' : 'bg-white'}`}>
                                            {activeAge === age && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
                                        </div>
                                        <input type="radio" name="age" className="hidden" onChange={() => setActiveAge(age)} checked={activeAge === age} />
                                        <span className="font-hand text-lg group-hover:text-pastel-pink transition-colors">{age}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Skill Filter */}
                        <div>
                            <h4 className="font-bold text-gray-700 mb-3 text-sm uppercase tracking-wider">Habilidade</h4>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setActiveSkill('Todas')}
                                    className={`px-3 py-1 border-2 border-marker-black rounded-lg text-sm font-bold transition-all ${activeSkill === 'Todas' ? 'bg-pastel-blue text-white shadow-comic-hover' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                >
                                    Todas
                                </button>
                                {Object.values(SkillCategory).map((skill) => (
                                    <button
                                        key={skill}
                                        onClick={() => setActiveSkill(skill)}
                                        className={`px-3 py-1 border-2 border-marker-black rounded-lg text-sm font-bold transition-all text-left ${activeSkill === skill ? 'bg-pastel-blue text-white shadow-comic-hover' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        {skill}
                                    </button>
                                ))}
                            </div>
                        </div>

                         {/* Clear Filters */}
                         {(activeAge !== 'Todas' || activeSkill !== 'Todas' || searchQuery !== '') && (
                            <button 
                                onClick={() => { setActiveAge('Todas'); setActiveSkill('Todas'); setSearchQuery(''); }}
                                className="w-full py-2 border-2 border-marker-black border-dashed rounded-lg text-gray-500 font-bold hover:text-red-500 hover:border-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <X className="w-4 h-4" /> Limpar Filtros
                            </button>
                         )}
                    </div>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product, idx) => (
                        <div 
                            key={product.id}
                            className="bg-white rounded-2xl border-2 border-marker-black shadow-comic flex flex-col overflow-hidden hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 animate-on-scroll"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            <div className="relative h-60 border-b-2 border-marker-black bg-gray-50 group">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border-2 border-marker-black shadow-sm flex items-center gap-1">
                                        <div className="w-2 h-2 rounded-full bg-pastel-green border border-marker-black"></div>
                                        {product.ageCategory}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-1 mb-2">
                                    {product.skills.slice(0, 2).map((skill, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wide bg-pastel-blue/20 text-gray-700 px-2 py-1 rounded border border-pastel-blue/50">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-hand font-bold text-xl text-gray-900 mb-2 leading-tight">{product.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>

                                <div className="mt-auto space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-hand font-bold text-2xl text-gray-900">
                                            R$ {product.price.toFixed(2).replace('.', ',')}
                                        </span>
                                    </div>

                                    {/* Action Row */}
                                    <div className="flex items-center gap-3 pt-4 border-t-2 border-dashed border-gray-100">
                                        {/* Quantity Selector */}
                                        <div className="flex items-center border-2 border-marker-black rounded-full px-2 h-10 bg-gray-50">
                                            <button 
                                                onClick={() => handleQuantityChange(product.id, -1)}
                                                className="p-1 hover:text-pastel-pink transition-colors disabled:opacity-30"
                                                disabled={getQuantity(product.id) <= 1}
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-bold text-sm">{getQuantity(product.id)}</span>
                                            <button 
                                                onClick={() => handleQuantityChange(product.id, 1)}
                                                className="p-1 hover:text-pastel-pink transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button 
                                            onClick={() => onAddToCart(product, getQuantity(product.id))}
                                            className="flex-1 bg-pastel-green text-gray-900 font-bold h-10 rounded-full border-2 border-marker-black hover:bg-white transition-colors shadow-[2px_2px_0px_#000] active:translate-y-[2px] active:shadow-none flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                                        >
                                            <ShoppingCart className="w-4 h-4" /> Adicionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white border-2 border-marker-black border-messy-3 rounded-3xl mt-8">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="font-hand text-2xl font-bold text-gray-800">Nenhum brinquedo encontrado</h3>
                        <p className="text-gray-500">Tente mudar os filtros ou sua busca.</p>
                        <button 
                            onClick={() => { setActiveAge('Todas'); setActiveSkill('Todas'); setSearchQuery(''); }}
                            className="mt-4 text-pastel-pink font-bold underline decoration-wavy"
                        >
                            Limpar tudo
                        </button>
                    </div>
                )}
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductsPage;