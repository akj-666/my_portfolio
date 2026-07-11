import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Search, Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { id: "01", title: "DISCOVER", description: "Define problem, requirements, audience", icon: Search },
  { id: "02", title: "IDEATE", description: "Plan, wireframe, concept", icon: Lightbulb },
  { id: "03", title: "DESIGN", description: "Visual identity, UI/UX, atmospheric design", icon: PenTool },
  { id: "04", title: "DEVELOP", description: "Build, automate, AI integration", icon: Code2 },
  { id: "05", title: "DELIVER", description: "Test, optimize, launch", icon: Rocket },
];

const WorkProcess = () => {
  const transitionEase = [0.76, 0, 0.24, 1]; // Cinematic bezier
  const sectionRef = useRef(null);

  // Track scroll progress of the WorkProcess section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-32 bg-[#0a0a0a] border-y border-dark-border relative overflow-hidden">
      {/* Scroll Link: Vertical connecting progress line */}
      <div className="absolute left-1/2 top-48 bottom-48 w-[1px] bg-dark-border/60 -translate-x-1/2 z-0 hidden md:block">
        <motion.div
          style={{
            scaleY: scrollYProgress,
            originY: 0,
            willChange: "transform"
          }}
          className="w-full h-full bg-scarlet"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: transitionEase }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4 text-white">Work Process</h2>
          <div className="w-16 h-1 bg-scarlet mx-auto" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-24 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center mb-6 relative z-10 group-hover:border-scarlet transition-colors duration-300 cursor-pointer"
                style={{ willChange: "transform" }}
              >
                <step.icon size={32} className="text-gray-400 group-hover:text-scarlet transition-colors duration-300" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-scarlet flex items-center justify-center text-white text-xs font-bold">
                  {step.id}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-scarlet transition-colors duration-300">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-[200px] font-light">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: transitionEase }}
          className="mt-24 p-8 md:p-12 border border-scarlet/30 bg-scarlet/5 text-center max-w-4xl mx-auto rounded-lg"
          style={{ willChange: "transform, opacity" }}
        >
          <p className="text-2xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
            "The goal is not just how it looks, but how it works and feels."
          </p>
          <span className="text-scarlet font-semibold tracking-widest uppercase text-sm">
            - - ALDRIN K JOHNI
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
