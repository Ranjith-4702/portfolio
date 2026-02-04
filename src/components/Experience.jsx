import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Product Developer Intern',
      company: 'AbStream',
      period: 'March 2025 – Present',
      desc: [
        'Built and optimized the complete product UI in React.js, ensuring seamless cross-platform performance.',
        'Led mobile-friendly development and collaborated in full-stack integration with backend teams.',
        'Delivered new features, debugging, and enhancements for a highly visible B2B product.',
        'Improved state and data flow for smooth user experience.'
      ]
    },
    {
      id: 2,
      role: 'Web Intern',
      company: 'Naalvar Solutions',
      period: 'Nov 2024 – Feb 2025',
      desc: [
        'Engineered responsive interfaces with React.js, HTML, CSS, and JavaScript for internal and client platforms.',
        'Improved user experience through performance enhancement while collaborating with design and backend teams.',
        'Utilized Node.js for backend logic, APIs, and integration tasks.'
      ]
    }
  ];

  return (
    <div name="experience" className="w-full bg-gradient-to-b from-surface to-background text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary">Experience</p>
        </div>

        <div className="mt-10 space-y-8">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-primary shadow-lg hover:bg-slate-800 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-xl text-primary">{exp.company}</h4>
                </div>
                <p className="text-gray-400 italic mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;