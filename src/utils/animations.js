// src/utils/animations.js

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  export const glowHover = {
    rest: { scale: 1, boxShadow: "0px 0px 0px rgba(59, 130, 246, 0)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 } 
    }
  };