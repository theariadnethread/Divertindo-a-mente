import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import About from './components/About';
import TestimonialScroll from './components/TestimonialScroll';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import { CartItem, Product } from './types';

export type PageType = 'home' | 'products' | 'admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add item to cart
  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    handleNavigate('home');
  };

  useEffect(() => {
    document.documentElement.classList.add('js-enabled');
    
    if (currentPage !== 'admin') {
      // Re-trigger scroll animations when page changes (only for public pages)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.observe(el));
      }, 100);

      return () => observer.disconnect();
    }
  }, [currentPage]);

  // Admin Route Logic
  if (currentPage === 'admin') {
    if (!isAuthenticated) {
      return <Login onLogin={handleLogin} onCancel={() => handleNavigate('home')} />;
    }
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="font-sans text-gray-900 selection:bg-pastel-pink selection:text-white">
      <Header 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={() => handleNavigate('products')} />
            <Features />
            <Methodology />
            <ProductSection onNavigate={() => handleNavigate('products')} />
            <About />
            <TestimonialScroll />
            <FAQ />
            <Newsletter />
          </>
        ) : (
          <ProductsPage onAddToCart={addToCart} />
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;