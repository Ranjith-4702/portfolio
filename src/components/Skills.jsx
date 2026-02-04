import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = [
    { name: "React", icon: <FaReact size={40} className="text-blue-400"/> },
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500"/> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400"/> },
    { name: "Express", icon: <SiExpress size={40} className="text-gray-400"/> },
    { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600"/> },
    { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400"/> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-sky-400"/> },
    { name: "C++", icon: <SiCplusplus size={40} className="text-blue-500"/> },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <div name="skills" className="w-full bg-background py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
           <p className="text-gray-400 max-w-2xl">Tools and technologies I use to craft high-performance digital experiences.</p>
        </div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
            {skills.map((skill) => (
                <motion.div 
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: "rgba(59,130,246,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-slate-800/50 transition-colors cursor-default"
                >
                    <div className="p-4 bg-white/5 rounded-full">{skill.icon}</div>
                    <span className="font-semibold text-gray-300">{skill.name}</span>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;