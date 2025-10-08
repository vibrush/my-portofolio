// src/App.tsx (atau Portfolio.tsx)

import React, { useState, useEffect, useCallback } from 'react';
import GlassHeader from './components/GlassHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { 
  projectsData, 
  skillsData, 
  experiencesData,
  navItems
} from './data/portfolioData'; // Ambil data dari file data

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Logic untuk smooth scroll
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Logic untuk tracking active section saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
            
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Cek apakah bagian atas elemen berada di antara 0px dan 200px dari viewport
          // Ini menentukan bagian mana yang sedang aktif
          return rect.top <= 200 && rect.bottom >= 200; 
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Jalankan sekali saat mount untuk set posisi awal
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <GlassHeader 
        scrollY={scrollY} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        navItems={navItems.map(item => item)}
      />

      <main>
        {/* Home Section */}
        <HeroSection scrollToSection={scrollToSection} />
        
        {/* About Section */}
        <AboutSection 
          experiences={experiencesData} 
          skills={skillsData} 
        />
        
        {/* Projects Section */}
        <ProjectsSection projects={projectsData} />
        
        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;