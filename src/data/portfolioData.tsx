// src/data/portfolioData.ts

import { Briefcase, GraduationCap } from 'lucide-react';
import React from 'react';

// Definisikan Tipe Data (Bisa dipindahkan ke src/components/types.ts)
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  link: string;
  status: 'In Progress' | 'Completed';
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  icon: React.ReactNode;
  description: string;
}


// Data Projects
export const projectsData: Project[] = [
  {
    title: "Ajaib Automation 0.2",
    description: "Automasi trading dan cek riwayat saham dari ratusan akun dalam waktu singkat dengan tampilan GUI sederhana.",
    tech: ["Python"],
    image: "../public/preview-ajaibAutomation.jpg",
    color: "from-blue-500 to-cyan-500",
    link : "https://github.com/vibrush/ajaib-automation",
    status: "In Progress"
  }
];

// Data Skills
export const skillsData: Skill[] = [
  { name: "Java", level: 90, icon: "☕" },
  { name: "HTML", level: 85, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "C++", level: 80, icon: "⚙️" },
  { name: "Python", level: 60, icon: "🐍" },
  { name: "MSSQL", level: 80, icon: "🗄️" }
];

// Data Experiences
export const experiencesData: Experience[] = [
  {
    title: "Vibe Coder",
    company: "Perusahaan Jual Beli Saham",
    period: "Present",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Mengembangkan sistem jual beli saham yang efisien"
  },
  {
    title: "Tutor SNBT | Penalaran Kuantitatif",
    company: "Karya Salemba Empat Universitas Brawijaya",
    period: "Past",
    icon: <GraduationCap className="w-5 h-5" />,
    description: "Membimbing siswa dalam persiapan SNBT"
  }
];

// Data Navigasi
export const navItems = ['Home', 'About', 'Projects', 'Contact'];