import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaGithub, FaCode, FaArrowRight } from 'react-icons/fa';

// --- PREMIUM 3D CARD COMPONENT ---
const ProjectCard = ({ title, desc, tags, repo }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative border border-white/10 bg-slate-900/40 rounded-3xl overflow-hidden backdrop-blur-md h-full"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. DYNAMIC SPOTLIGHT EFFECT */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. GLOWING BORDER REVEAL */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.4),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative h-full p-8 md:p-12 flex flex-col z-10">
        
        {/* Header: Icon + Status */}
        <div className="flex items-center justify-between mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/5 text-primary shadow-lg shadow-blue-500/10">
                <FaCode size={32} />
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">Live Project</span>
            </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
            {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed mb-10 text-lg md:text-xl font-light flex-grow border-l-2 border-white/5 pl-6 group-hover:border-primary/50 transition-colors">
            {desc}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-10">
            <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                    <span key={tag} className="text-sm font-bold px-4 py-2 rounded-xl bg-surface border border-white/5 text-gray-300 shadow-sm group-hover:border-white/20 group-hover:shadow-blue-500/20 transition-all">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <a href={repo} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base font-bold text-white hover:text-primary transition-colors group/link">
                View Source Code <FaGithub size={18} className="group-hover/link:scale-110 transition-transform"/>
            </a>
            
            <a href={repo} target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:-rotate-45 border border-white/5 group-hover:border-primary">
                <FaArrowRight size={16} />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div name="projects" className="w-full bg-background py-32 relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
        >
           <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work</span>
           </h2>
           <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
             A showcase of my passion for performance, design, and scalability.
           </p>
        </motion.div>

        {/* Single Featured Card Layout */}
        <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-4xl">
                <ProjectCard 
                    title="Online Coding Platform"
                    desc="A full-stack IDE for C/C++ development featuring real-time code validation, secure authentication, and a gamified leaderboard system designed to enhance peer learning."
                    tags={["React", "Node.js", "MongoDB", "Framer Motion"]}
                    repo="https://github.com/Ranjith-4702"
                />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;