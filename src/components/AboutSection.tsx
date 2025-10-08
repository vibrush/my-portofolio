// src/components/AboutSection.tsx

import React from 'react';
import type { Experience, Skill } from '../data/portfolioData';

interface AboutSectionProps {
  experiences: Experience[];
  skills: Skill[];
}

const ExperienceItem: React.FC<{ exp: Experience }> = ({ exp }) => (
  <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/40 shadow-xl hover:scale-105 transition-transform">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl text-white">
        {exp.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
        <p className="text-indigo-600 font-medium">{exp.company}</p>
        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
        <p className="text-gray-600">{exp.description}</p>
      </div>
    </div>
  </div>
);

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <span className="text-3xl">{skill.icon}</span>
      <span className="text-xl font-semibold text-gray-800">{skill.name}</span>
    </div>
    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </div>
);

const AboutSection: React.FC<AboutSectionProps> = ({ experiences, skills }) => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;