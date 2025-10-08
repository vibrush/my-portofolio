// src/components/ProjectCard.tsx (Sub-komponen)

import React from 'react';
import type { Project } from '../data/portfolioData';
import { SquareArrowOutUpRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const statusStyle = project.status === 'Completed'
    ? 'bg-emerald-500/80 text-white'
    : 'bg-indigo-500/80 text-white';

  return (
    <a 
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative"
      >
      <div className="group bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity`}></div>
          <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full uppercase transition-opacity duration-300 ${statusStyle}`}>
            {project.status}
          </span>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 bg-white/50 backdrop-blur-md rounded-full">
              <SquareArrowOutUpRight className="w-8 h-8 text-gray-800" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600 border border-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;