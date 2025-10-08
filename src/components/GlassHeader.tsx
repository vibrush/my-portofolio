// src/components/GlassHeader.tsx

import React, { useState } from 'react'; // 1. Impor useState
import { Menu, X } from 'lucide-react';    // 2. Impor ikon

interface GlassHeaderProps {
  scrollY: number;
  activeSection: string;
  scrollToSection: (id: string) => void;
  navItems: string[];
}

const GlassHeader: React.FC<GlassHeaderProps> = ({ scrollY, activeSection, scrollToSection, navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backdropFilter: scrollY > 50 ? 'blur(5px)' : 'blur(20px)',
        backgroundColor: scrollY > 50 || isMenuOpen ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        borderBottom: scrollY > 50 || isMenuOpen ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        boxShadow: scrollY > 50 || isMenuOpen ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Fatih
        </div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? 'text-indigo-600 font-semibold'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col items-center gap-4 py-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className={`transition-all duration-300 text-lg ${
                activeSection === item.toLowerCase()
                  ? 'text-indigo-600 font-semibold'
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default GlassHeader;