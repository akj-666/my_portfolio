import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, BrainCircuit, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: "Software Development",
    icon: Code,
    skills: ["Python", "Bash", "VS Code", "Git", "GitHub"]
  },
  {
    title: "Environments",
    icon: Terminal,
    skills: ["Linux", "Termux", "TCP/IP", "Wi-Fi Networking"]
  },
  {
    title: "Automation & AI",
    icon: BrainCircuit,
    skills: ["n8n", "AI Pipelines (Face Recognition)", "Teachable Machine", "Prompt Engineering (Claude, ChatGPT)"]
  },
  {
    title: "Creative Design",
    icon: Palette,
    skills: ["UI/UX Layouts", "Minimalist Branding", "Dashboards & SPAs", "Cinematic Motion Graphics", "Visual Effects"]
  }
];

const MagneticCard = ({ children }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Magnetic pull
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.15, y: y * 0.15 });

    // Light tracking overlay coordinates
    setGlowPos({
      x: clientX - left,
      y: clientY - top
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 120, damping: 15, mass: 0.1 }}
      className="p-8 bg-dark-surface border border-dark-border hover:border-scarlet/40 transition-colors duration-500 rounded-lg group relative overflow-hidden cursor-pointer shadow-lg"
      style={{ willChange: "transform" }}
    >
      {/* Scarlet Red cursor-tracking glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full bg-scarlet/10 blur-[50px] w-56 h-56 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            left: `${glowPos.x}px`,
            top: `${glowPos.y}px`,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const transitionEase = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: transitionEase
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: transitionEase
      }
    }
  };

  return (
    <section id="skills" className="py-32 bg-dark-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: transitionEase }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
            Core Competencies <br/>
            <span className="text-gray-500">& Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-scarlet mt-6" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="h-full"
            >
              <MagneticCard>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-black border border-dark-border flex items-center justify-center group-hover:bg-scarlet group-hover:border-scarlet transition-colors duration-500">
                    <category.icon className="text-gray-400 group-hover:text-white transition-colors duration-500" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-scarlet transition-colors duration-300">{category.title}</h3>
                </div>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <motion.li 
                      key={skill} 
                      variants={itemVariants}
                      className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-scarlet flex-shrink-0"></div>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
