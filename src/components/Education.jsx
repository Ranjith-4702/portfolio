import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';

// --- ANIMATED CARD COMPONENT ---
const EducationCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative w-full max-w-4xl mx-auto border border-white/10 bg-slate-900/40 rounded-3xl overflow-hidden backdrop-blur-md"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* 1. Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. Animated Border Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.4),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        
        {/* Left: Content Info */}
        <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-wider uppercase">
                <FaUniversity /> Academic Background
            </div>
            
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
                    Bachelor's Degree in <br/> Computer Science Engineering
                </h3>
                <p className="text-xl text-gray-400 font-light">
                    Global Academy of Technology
                </p>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primary" />
                    <span>2020 – 2024</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaAward className="text-yellow-500" />
                    <span>Focus on Scalable Systems & Web Tech</span>
                </div>
            </div>
        </div>

        {/* Right: CGPA Stat Badge */}
        <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full"></div>
            <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative bg-surface border border-white/10 p-6 rounded-2xl text-center min-w-[140px] shadow-2xl"
            >
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">CGPA</p>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                    7.59
                </div>
                <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "76%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                </div>
            </motion.div>
        </div>

      </div>

      {/* Floating Icon Decoration */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 text-white/5 text-9xl pointer-events-none z-0"
      >
        <FaGraduationCap />
      </motion.div>

    </motion.div>
  );
};

const Education = () => {
  return (
    <div name="education" className="w-full bg-background py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <EducationCard />
      </div>
    </div>
  );
};

export default Education;