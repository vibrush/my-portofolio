// src/components/ProjectsSection.tsx

import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 pb-5 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;