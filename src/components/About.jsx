import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full bg-background text-white py-24 relative overflow-hidden">
      
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-primary">About</p>
        </div>

        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-gray-300 mt-5 leading-relaxed"
        >
          I am a product-focused software engineer specializing in the design and development of scalable, high-performance web applications using modern frontend and backend technologies. With a strong emphasis on clean architecture, system reliability, and user-centered design, I aim to build solutions that deliver measurable business value and exceptional digital experiences.
        </motion.p>

        <br />

        <motion.p 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          With hands-on experience in the MERN stack and systems programming (C/C++), I have contributed to the development of B2B platforms and interactive learning systems, optimizing performance, improving data flow, and collaborating closely with cross-functional teams to deliver production-ready features. I bring a detail-oriented, analytical approach to problem-solving, ensuring that every solution is maintainable, efficient, and aligned with long-term product goals.
        </motion.p>
      </div>
    </div>
  );
};

export default About;