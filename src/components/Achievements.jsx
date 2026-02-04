import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaChalkboardTeacher, FaTrophy, FaMedal } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';

const achievements = [
  {
    id: 1,
    category: "Tech Leadership",
    title: "Workshop Organizer",
    desc: "Organized and conducted university-level technical workshops and coding events.",
    icon: <HiUserGroup className="text-blue-400" size={28} />,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20"
  },
  {
    id: 2,
    category: "Teaching & Mentorship",
    title: "Lead Instructor",
    desc: "Conducted a 30-Hour MySQL Technical Workshop, mentoring students in database management.",
    icon: <FaChalkboardTeacher className="text-purple-400" size={28} />,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/20"
  },
  {
    id: 3,
    category: "Sports Achievement",
    title: "Best Bowler",
    desc: "Awarded Best Bowler in the U-16 Inter-Club Cricket Tournament.",
    icon: <MdSportsCricket className="text-green-400" size={28} />,
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/20"
  },
  {
    id: 4,
    category: "National Champion",
    title: "Yoga Competitions",
    desc: "Multiple district-level wins. National & State Champion in Yoga competitions.",
    icon: <GiMeditation className="text-orange-400" size={28} />,
    color: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/20"
  }
];

// --- HOLOGRAPHIC CARD COMPONENT ---
const AchievementCard = ({ item, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative border border-white/10 bg-slate-900/40 rounded-2xl overflow-hidden backdrop-blur-md h-full"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* 1. Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 2. Gradient Border Reveal */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative p-8 h-full flex flex-col z-10">
        
        {/* Header: Icon + Category */}
        <div className="flex justify-between items-start mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 border border-white/5 shadow-lg ${item.glow}`}>
                {item.icon}
            </div>
            {index % 2 === 0 && <FaTrophy className="text-yellow-500/20 group-hover:text-yellow-500/50 transition-colors" size={20} />}
            {index % 2 !== 0 && <FaMedal className="text-white/10 group-hover:text-white/30 transition-colors" size={20} />}
        </div>

        {/* Content */}
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{item.category}</span>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/5 pl-3 group-hover:border-white/20 transition-colors">
            {item.desc}
        </p>

        {/* Micro-Interaction Shine */}
        <div className="absolute top-0 right-0 -mr-12 -mt-12 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <div name="achievements" className="w-full bg-background py-24 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
        >
           <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
             Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Code</span>
           </h2>
           <p className="text-lg text-gray-400 max-w-2xl font-light">
             Leadership, mentorship, and competitive spirit define my journey outside of engineering.
           </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
                <AchievementCard key={item.id} item={item} index={index} />
            ))}
        </div>

      </div>
    </div>
  );
};

export default Achievements;