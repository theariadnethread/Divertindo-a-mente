import React from 'react';
import { Send, Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#FFF9F5]">
      <div className="container mx-auto">
        <div className="bg-pastel-blue/20 rounded-[40px] border-2 border-marker-black border-messy-2 p-8 md:p-16 text-center relative overflow-hidden shadow-comic">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pastel-blue rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-marker-black"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-pastel-pink rounded-full translate-x-1/3 translate-y-1/3 border-2 border-marker-black"></div>
          
          {/* Floating Icon */}
          <div className="absolute top-10 right-10 animate-float hidden md:block">
            <Mail className="w-12 h-12 text-white stroke-marker-black stroke-2 fill-pastel-yellow" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-hand font-bold text-gray-900 mb-6">Entre para o clube da diversão!</h2>
            <p className="text-gray-800 font-medium mb-8 text-lg">
              Receba dicas de atividades pedagógicas, novidades e <span className="font-bold bg-pastel-yellow px-1 border border-marker-black transform -rotate-1 inline-block">10% de desconto</span> na sua primeira compra.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu melhor e-mail..." 
                className="flex-1 px-6 py-4 rounded-full border-2 border-marker-black bg-white focus:outline-none focus:shadow-comic transition-shadow text-gray-900 placeholder-gray-400 shadow-sm font-hand text-xl"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-pastel-pink text-gray-900 font-bold font-hand text-xl rounded-full border-2 border-marker-black hover:bg-white transition-all shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000] flex items-center justify-center gap-2"
              >
                Inscrever <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-6 font-bold uppercase tracking-wide">Zero spam. Apenas coisas boas e brincadeiras!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;