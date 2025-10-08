// src/components/HeroSection.tsx (Setelah Diperbarui)

import React from 'react';
import { Github, Linkedin, Instagram, Shield, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 md:pt-20">
      {/* -- PERUBAHAN -- Mengubah gap dan item alignment */}
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* -- PERUBAHAN -- Menambahkan perataan teks responsif */}
        <div className="space-y-6 animate-fadeIn text-center md:text-left">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
            <span className="text-indigo-600 font-medium">👋 Welcome to my portfolio</span>
          </div>
          
          {/* -- PERUBAHAN -- Membuat ukuran teks responsif */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Fatih
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              'Vibe Coder',
              2000, 
              'Network Security Enthusiast',
              2000,
            ]}
            wrapper="p"
            speed={50}
            // -- PERUBAHAN -- Membuat ukuran teks responsif
            className="text-xl md:text-2xl text-gray-600 h-8" // tambah tinggi (h-8) agar tidak 'loncat'
            repeat={Infinity}
          />

          <p className="text-lg text-gray-500 max-w-xl mx-auto md:mx-0">
            Passionate about creating secure and efficient solutions. Currently vibing in the intersection of code and cybersecurity.
          </p>

          {/* -- PERUBAHAN -- Mengatur posisi ikon sosial media */}
          <div className="flex gap-4 pt-0 justify-center md:justify-start">
            <a href="https://github.com/vibrush" target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-white/60 backdrop-blur-md rounded-full border border-white/40 hover:scale-110 transition-transform shadow-lg">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-fatih-alhakim-436683217" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/60 backdrop-blur-md rounded-full border border-white/40 hover:scale-110 transition-transform shadow-lg">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
            <a href="https://instagram.com/fatih_hakim.al" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/60 backdrop-blur-md rounded-full border border-white/40 hover:scale-110 transition-transform shadow-lg">
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>
          </div>
        </div>
        
        {/* Sisi Kanan (Gambar) */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* -- PERUBAHAN -- Membuat box gambar responsif */}
          <div className="relative w-full max-w-sm aspect-square bg-white/40 backdrop-blur-lg rounded-3xl border border-white/60 shadow-2xl flex items-center justify-center overflow-hidden">
            <img src="/hero-image2.png" alt="Fatih Alhakim" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/40">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-indigo-600" />
                <div>
                  <div className="font-semibold text-gray-800">Security First</div>
                  <div className="text-sm text-gray-600">Always coding with protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </button>
    </section>
  );
};

export default HeroSection;