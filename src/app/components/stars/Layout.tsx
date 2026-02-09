import React, { ReactNode, useState } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import starsLogo from 'figma:asset/c5c4217966ccd203a12edf1e6f2fac93e291c0f9.png';

interface LayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'project', label: 'Project' },
    { id: 'partners', label: 'Partners' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => onNavigate('home')}
            >
              <ImageWithFallback 
                src={starsLogo} 
                alt="STARS Logo" 
                className="w-10 h-10 rounded-lg" 
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-none">STARS</h1>
                <p className="text-xs text-teal-700 font-semibold tracking-wider">ERASMUS+</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'text-teal-700 border-b-2 border-teal-700' 
                      : 'text-slate-600 hover:text-teal-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Involved
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-teal-700"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left py-2 px-4 rounded-lg font-medium ${
                      currentPage === item.id 
                        ? 'bg-teal-50 text-teal-700' 
                        : 'text-slate-600 hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => {
                    onNavigate('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium shadow-md mt-4"
                >
                  Get Involved
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* European Sponsor */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-700 flex items-center justify-center rounded-sm">
                 {/* Simplified EU Flag representation */}
                 <span className="text-yellow-400 font-bold text-xs">EU</span>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-white">Co-funded by the</p>
                <p>European Union</p>
              </div>
            </div>

            {/* Acknowledgement */}
            <div className="text-center md:text-left">
              <p className="text-xs text-slate-400 max-w-md mx-auto md:mx-0">
                STARS Erasmus+ is a collaborative capacity-building project. 
                Views and opinions expressed are however those of the author(s) only 
                and do not necessarily reflect those of the European Union.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} STARS Erasmus+ Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
