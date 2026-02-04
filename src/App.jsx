import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ⚠️ STEP 1: Make sure these files exist in src/components/ folder!
// If the site is blank, keep these commented out until you create the files.
import Education from './components/Education';
import Achievements from './components/Achievements'; 

function App() {
  return (
    <div className="bg-background min-h-screen text-slate-300 selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="scroll-mt-24">
            <About />
        </section>

        <section id="skills" className="scroll-mt-24">
            <Skills />
        </section>

        <section id="experience" className="scroll-mt-24">
            <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
            <Projects />
        </section>

        {/* ⚠️ STEP 2: Uncomment this ONLY if Education.jsx exists */}
        <section id="education" className="scroll-mt-24">
            <Education />
        </section>

        {/* ⚠️ STEP 3: Uncomment this ONLY if Achievements.jsx exists */}
        <section id="achievements" className="scroll-mt-24">
            <Achievements />
        </section>
        
        <section id="contact" className="scroll-mt-24">
            <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;