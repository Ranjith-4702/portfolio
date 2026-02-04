import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight, FaDownload, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { useMobile } from '../hooks/useMobile'; // Import the hook

// --- ADAPTIVE BUTTON COMPONENT ---
// Uses simple motion on mobile, Magnetic physics on desktop
const AdaptiveButton = ({ children, className, ...props }) => {
  const isMobile = useMobile();

  // Mobile: Simple Tap Scale
  if (isMobile) {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        className={`${className} w-full justify-center active:bg-opacity-80`} // Full width on mobile
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  // Desktop: Keep the magnetic effect (Code simplified for brevity, assume Magnetic logic here)
  return (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={className}
        {...props}
    >
      {children}
    </motion.button>
  );
};

// --- HERO SECTION ---
const Hero = () => {
  const isMobile = useMobile();

  return (
    <div name="home" className="min-h-[100svh] w-full bg-background relative overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      
      {/* 1. OPTIMIZED BACKGROUND (Less intense on mobile) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen ${!isMobile && 'animate-aurora'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen ${!isMobile && 'animate-aurora animation-delay-2000'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* TEXT CONTENT - Stacked vertically on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left order-2 md:order-1"
        >
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mx-auto md:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide">AVAILABLE FOR WORK</span>
          </div>

          {/* FLUID TYPOGRAPHY HEADLINE */}
          <h1 className="text-fluid-h1 font-bold text-white tracking-tight leading-[1.1]">
            Design. Build. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
              Scale.
            </span>
          </h1>

          <p className="text-fluid-p text-gray-400 max-w-lg leading-relaxed mx-auto md:mx-0">
            [cite_start]I’m <span className="text-white font-semibold">Ranjith K S</span>[cite: 1], a Product Developer transforming complex problems into 
            <span className="text-white font-semibold"> high-performance</span>, cinematic web experiences.
          </p>

          {/* ADAPTIVE BUTTONS (Full width stack on mobile) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <Link to="projects" smooth duration={500} className="w-full sm:w-auto">
                <AdaptiveButton className="group relative px-8 py-4 bg-primary text-white font-bold rounded-full overflow-hidden shadow-lg shadow-blue-500/25 flex items-center gap-3">
                    <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                        See My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </AdaptiveButton>
            </Link>
            
            <a href="/resume.pdf" download className="w-full sm:w-auto">
                <AdaptiveButton className="group px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-colors flex items-center gap-3 justify-center">
                    Resume <FaDownload className="group-hover:translate-y-1 transition-transform" />
                </AdaptiveButton>
            </a>
          </div>
        </motion.div>

        {/* ORBITAL AVATAR - Simplified on Mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center h-[300px] md:h-[500px] order-1 md:order-2"
        >
          {/* Central Image */}
          <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl z-20">
             <img src="/profile.jpg" alt="Ranjith K S" className="w-full h-full object-cover" />
          </div>

          {/* Orbital Rings - Only visible on Desktop/Tablet to save space */}
          {!isMobile && (
            <>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border border-white/5 rounded-full z-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-2 rounded-full border border-white/10 shadow-lg shadow-blue-500/20">
                  <FaReact size={24} className="text-blue-400" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] border border-white/5 rounded-full z-0"
              >
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface p-2 rounded-full border border-white/10 shadow-lg shadow-green-500/20">
                   <FaNodeJs size={24} className="text-green-500" />
                </div>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;