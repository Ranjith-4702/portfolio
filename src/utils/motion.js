export const getResponsiveVariants = (isMobile) => ({
    hidden: { 
      opacity: 0, 
      y: isMobile ? 20 : 50 // Slide less on mobile
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  });