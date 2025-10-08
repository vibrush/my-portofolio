// src/components/GlassHeader.tsx

import React from 'react';

interface GlassHeaderProps {
  scrollY: number;
  activeSection: string;
  scrollToSection: (id: string) => void;
  navItems: string[];
}

const GlassHeader: React.FC<GlassHeaderProps> = ({ scrollY, activeSection, scrollToSection, navItems }) => {
  return (
    <header 
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'blur(0px)',
        backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        borderBottom: scrollY > 50 ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Fatih
        </div>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
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
      </nav>
    </header>
  );
};

export default GlassHeader;