import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smart Hide/Show Logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide if scrolling down > 150px, Show if scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = ['about', 'skills', 'experience', 'projects', 'education', 'achievements', 'contact'];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed w-full h-16 md:h-20 z-50 top-0 left-0 border-b border-white/5 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          
          {/* Brand */}
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ranjith.
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-100}
                    className="capitalize text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="w-px h-6 bg-gray-700 mx-4"></div>

            <div className="flex space-x-4">
               <a href="https://github.com/Ranjith-4702" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
               <a href="https://www.linkedin.com/in/ranjith-ks-09ba9b381" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Mobile Hamburger (Larger Touch Area) */}
          <div className="lg:hidden p-2 -mr-2 text-gray-300 cursor-pointer active:scale-95 transition-transform" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 lg:hidden"
          >
            {/* 🛠️ FIX: Reduced text size from text-3xl to text-xl */}
            {links.map((link) => (
              <Link 
                key={link} 
                to={link} 
                smooth 
                duration={500} 
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium capitalize text-gray-200 hover:text-primary transition-colors py-2 px-6 active:scale-95"
              >
                {link}
              </Link>
            ))}
            
            <div className="flex gap-8 mt-6 pt-6 border-t border-white/10">
               <a href="https://github.com/Ranjith-4702" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={28} /></a>
               <a href="https://www.linkedin.com/in/ranjith-ks-09ba9b381" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={28} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;