import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-background relative py-20 flex items-center justify-center overflow-hidden">
      
      {/* Background Glow - Reduced intensity for mobile performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-surface/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl"
        >
            <div className="text-center mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Ranjith K S</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                    Connect with me regarding hiring opportunities, technical discussions, or professional collaborations.
                </p>
            </div>

            <form action="https://formspree.io/f/xwvqgzqg" method="POST" className="space-y-6 max-w-lg mx-auto">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                    <input type="text" name="name" required 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
                        placeholder="John Doe"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                    <input type="email" name="email" required 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                    <textarea name="message" rows="5" required 
                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-base"
                        placeholder="I have a project..."
                    ></textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 relative overflow-hidden group touch-manipulation"
                >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
            </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;