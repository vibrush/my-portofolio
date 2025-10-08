// src/components/HeroSection.tsx

import React from 'react';
import { Github, Linkedin, Instagram, Shield, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fadeIn">
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white/40 shadow-lg">
            <span className="text-indigo-600 font-medium">👋 Welcome to my portfolio</span>
          </div>
          <h1 className="text-6xl font-bold leading-tight">
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
            className="text-2xl text-gray-600"
            repeat={Infinity}
          />

          <p className="text-lg text-gray-500 max-w-xl">
            Passionate about creating secure and efficient solutions. Currently vibing in the intersection of code and cybersecurity.
          </p>
          <div className="flex gap-4 pt-4">
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
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative w-96 h-96 bg-white/40 backdrop-blur-lg rounded-3xl border border-white/60 shadow-2xl flex items-center justify-center overflow-hidden">
            <div className="text-9xl"><img src="hero-image.png" alt="" /></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/40">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-indigo-600" />
      </button>
    </section>
  );
};

export default HeroSection;