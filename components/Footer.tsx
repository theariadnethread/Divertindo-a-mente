import React from 'react';
import { Instagram, Facebook, Twitter, Heart, Send, Star, Lock } from 'lucide-react';
import { PageType } from '../App';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-logo-green/10 pt-32 pb-12 overflow-hidden mt-12 border-t-2 border-marker-black">
      
      {/* Curved Top Edge Divider (Negative Space) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 bg-[#FFF9F5] h-20 md:h-28" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%', transform: 'scaleX(1.5)' }}></div>
      <div className="absolute top-20 md:top-28 left-0 w-full h-2 border-t-2 border-dashed border-marker-black opacity-20"></div>

      {/* Decorative Blocks for Footer */}
      <div className="absolute bottom-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <svg width="60" height="60" viewBox="0 0 100 100">
           <rect x="10" y="10" width="80" height="80" rx="10" fill="none" stroke="#2D2D2D" strokeWidth="4" />
           <circle cx="50" cy="50" r="25" fill="#2D2D2D" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Brand, Tagline & Newsletter (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
             <div className="space-y-4">
               <div className="sticker bg-white inline-block px-6 py-4 border-2 border-marker-black border-messy-1 transform -rotate-2 shadow-comic">
                  <Logo variant="footer" />
               </div>
               <p className="text-gray-800 font-medium text-lg leading-relaxed max-w-md">
                 Levando alegria e aprendizado para lares em todo o Brasil. 
                 <br />
                 <span className="font-hand text-2xl text-logo-green mt-2 block transform rotate-1">Porque brincar é coisa séria!</span>
               </p>
             </div>
             
             <div className="space-y-4 pt-4 border-t-2 border-marker-black/20">
               <h3 className="text-2xl font-hand font-bold text-gray-900">Entre para a brincadeira!</h3>
               <p className="text-gray-800 text-sm font-bold">Receba novidades e <span className="underline decoration-wavy decoration-logo-red decoration-2">10% OFF</span> na primeira compra.</p>
               
               <form className="flex flex-col gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail favorito..." 
                    className="w-full px-6 py-3 rounded-full border-2 border-marker-black bg-white focus:outline-none focus:shadow-comic transition-shadow text-gray-900 placeholder-gray-400 font-hand text-xl"
                  />
                  <button 
                    type="submit" 
                    className="w-full px-6 py-3 bg-logo-dark text-white font-bold rounded-full border-2 border-marker-black hover:bg-gray-800 transition-transform hover:scale-[1.02] shadow-comic flex items-center justify-center gap-2 font-hand text-xl tracking-wide"
                  >
                    Inscrever-se <Send className="w-5 h-5" />
                  </button>
               </form>
             </div>
          </div>

          {/* Middle Column: Links (Span 4) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-12 sm:gap-24 pt-4 lg:pl-12">
            <div>
              <h4 className="font-hand font-bold text-gray-900 mb-6 text-2xl uppercase tracking-wide">Explorar</h4>
              <ul className="space-y-3 font-medium text-gray-800 font-hand text-xl">
                <li><button onClick={() => onNavigate('products')} className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Novidades</button></li>
                <li><button onClick={() => onNavigate('products')} className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Mais Vendidos</button></li>
                <li><button onClick={() => onNavigate('products')} className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Por Idade</button></li>
                <li><button onClick={() => onNavigate('products')} className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Presentes</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-hand font-bold text-gray-900 mb-6 text-2xl uppercase tracking-wide">Suporte</h4>
              <ul className="space-y-3 font-medium text-gray-800 font-hand text-xl">
                <li><a href="#" className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Meus Pedidos</a></li>
                <li><a href="#" className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Devoluções</a></li>
                <li><a href="#" className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>Contato</a></li>
                <li><a href="#" className="hover:text-logo-red transition-colors flex items-center gap-2 group"><span className="w-2 h-2 rounded-full bg-logo-red opacity-0 group-hover:opacity-100 transition-opacity"></span>FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Floating Stickers (Span 3) - Centered Spin Effect */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
             <div className="relative w-80 h-80">
                
                {/* Spinning Text Ring Background */}
                <div className="absolute inset-0 w-full h-full animate-spin-slow opacity-25 pointer-events-none">
                   <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                      <text>
                        <textPath xlinkHref="#curve" className="text-[13px] font-black uppercase tracking-[0.2em] text-gray-900 fill-current font-hand font-bold">
                          • BRINCAR • APRENDER • CRESCER • SORRIR •
                        </textPath>
                      </text>
                   </svg>
                </div>

                {/* Stickers in the Center */}
                {/* Facebook - Top Left */}
                <div className="absolute top-[25%] left-[25%] animate-float sticker bg-logo-teal p-4 rounded-2xl border-2 border-marker-black border-messy-2 transform -rotate-12 hover:rotate-0 cursor-pointer group z-10 transition-transform shadow-comic">
                    <Facebook className="w-7 h-7 text-white group-hover:scale-110" />
                </div>
                
                {/* Instagram - Center Right */}
                <div className="absolute top-[35%] right-[15%] animate-float-delayed sticker bg-logo-red p-5 rounded-full border-2 border-marker-black transform rotate-6 hover:rotate-0 cursor-pointer group z-20 transition-transform shadow-comic">
                    <Instagram className="w-9 h-9 text-white group-hover:scale-110" />
                </div>

                {/* Twitter - Bottom Center */}
                <div className="absolute bottom-[25%] left-[35%] animate-wiggle sticker bg-logo-orange p-4 rounded-xl border-2 border-marker-black border-messy-1 transform -rotate-3 hover:rotate-6 cursor-pointer group z-10 transition-transform shadow-comic">
                    <Twitter className="w-6 h-6 text-white group-hover:scale-110" />
                </div>

                 {/* Decorative Stars */}
                <Star className="absolute top-[15%] right-[30%] w-6 h-6 text-white fill-current animate-pulse opacity-80 stroke-marker-black stroke-1" />
                <Star className="absolute bottom-[20%] right-[25%] w-5 h-5 text-logo-wood fill-current animate-bounce stroke-marker-black stroke-1" />

             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-marker-black/30 flex flex-col md:flex-row items-center justify-between text-sm font-bold text-gray-800 relative z-10 font-hand text-lg">
          <p>&copy; 2024 Divertindo a Mente. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <button 
                onClick={() => onNavigate('admin')}
                className="flex items-center gap-1 text-gray-500 hover:text-logo-red transition-colors text-xs font-sans uppercase tracking-widest opacity-60 hover:opacity-100"
             >
                <Lock className="w-3 h-3" /> Área Restrita
             </button>
             <p className="flex items-center gap-1">
               Feito com <Heart className="w-4 h-4 text-logo-red fill-current animate-bounce" /> para os pequenos.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;