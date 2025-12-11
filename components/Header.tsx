import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { PageType } from '../App';
import Logo from './Logo';

interface HeaderProps {
  cartCount: number;
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === '#produtos-page') {
      onNavigate('products');
    } else {
      onNavigate('home');
      // If we are already on home, scroll to section
      if (currentPage === 'home') {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Wait a bit for home to render then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: "Início", href: "#hero" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Loja", href: "#produtos-page" }, // Special link
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-4'}`}>
        <div className={`
          relative flex items-center justify-between 
          px-4 md:px-6 py-2 md:py-3 border-messy-2
          transition-all duration-300 bg-white border-2 border-marker-black
          ${isScrolled 
            ? 'w-[95%] md:w-[85%] shadow-comic-hover' 
            : 'w-[98%] md:w-[92%] shadow-comic'}
        `}>
          
          {/* Logo Component */}
          <div 
            className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => onNavigate('home')}
          >
             <Logo variant="header" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-hand text-xl transition-colors relative group ${
                  (link.href === '#produtos-page' && currentPage === 'products') 
                    ? 'text-pastel-pink font-bold' 
                    : 'text-gray-700 hover:text-pastel-pink'
                }`}
              >
                {link.name}
                <div className={`absolute -bottom-1 left-0 w-full h-1 bg-pastel-pink/40 -rotate-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                   (link.href === '#produtos-page' && currentPage === 'products') ? 'scale-x-100' : ''
                }`}></div>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 bg-pastel-blue/20 hover:bg-pastel-blue/40 border-2 border-marker-black border-messy-3 transition-all group active:scale-95">
              <ShoppingCart className="w-5 h-5 text-gray-800" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 bg-pastel-pink text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-marker-black animate-bounce-slow">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFF9F5] md:hidden flex flex-col items-center justify-center gap-8 animate-fade-in bg-grid-paper">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-hand text-4xl text-gray-800 hover:text-pastel-pink transition-colors transform hover:rotate-2"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;