import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
            <HelpCircle className="w-12 h-12 text-pastel-blue mx-auto mb-4 stroke-marker-black stroke-2 animate-bounce-slow" />
            <h2 className="animate-on-scroll text-5xl font-hand font-bold text-gray-900">Dúvidas Frequentes</h2>
            <p className="animate-on-scroll delay-100 text-gray-500 mt-2 font-medium">Estamos aqui para ajudar em cada etapa.</p>
        </div>

        <div className="space-y-4">
            {FAQS.map((faq, idx) => (
                <div 
                    key={idx} 
                    className={`
                        animate-on-scroll delay-${idx * 100}
                        border-2 border-marker-black bg-white transition-all duration-300
                        ${openIndex === idx ? 'shadow-comic border-messy-1' : 'hover:bg-gray-50 rounded-xl'}
                    `}
                >
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                    >
                        <span className="font-hand font-bold text-xl text-gray-900">{faq.question}</span>
                        <div className={`
                            w-8 h-8 rounded-full border-2 border-marker-black flex items-center justify-center transition-colors
                            ${openIndex === idx ? 'bg-pastel-pink text-white' : 'bg-white text-gray-900'}
                        `}>
                            {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                    </button>
                    
                    <div 
                        className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                        `}
                    >
                        <div className="p-6 pt-0 text-gray-700 font-medium leading-relaxed border-t-2 border-dashed border-gray-100 mt-2">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;