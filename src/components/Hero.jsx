import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const transitionEase = [0.76, 0, 0.24, 1]; // Cinematic cubic-bezier ease

  const heroLines = ["ALDRIN K", "JOHNI"];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", rotate: 4 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: {
        duration: 1.1,
        ease: transitionEase,
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      },
    },
  };

  const metricContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.7,
      },
    },
  };

  const metricItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-dark-bg text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/40 via-dark-bg/80 to-dark-bg z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-scarlet/5 rounded-full blur-[120px] will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] will-change-transform"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="col-span-1 lg:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              variants={descVariants} 
              className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black leading-none mb-4 text-white">
              {heroLines.map((line, i) => (
                <span key={i} className="block overflow-hidden py-1">
                  <motion.span
                    className="inline-block origin-left"
                    variants={lineVariants}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            variants={descVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
              I bridge the gap between clean code and high-end visuals, with a specialized focus on AI-driven automation, UI/UX interface layout, and cinematic motion graphics.
            </p>
            <p className="text-sm text-gray-500 tracking-wide uppercase font-semibold">
              B.Tech Student, Amal Jyothi College of Engineering • Graduating 2029
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={metricContainerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 lg:col-span-4 flex flex-col gap-8 lg:items-end justify-center"
        >
          <motion.div variants={metricItemVariants} className="border-l-2 border-scarlet pl-6">
            <h3 className="text-4xl font-display font-bold mb-1 text-white">2+</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Years Technical<br />Journey</p>
          </motion.div>
          <motion.div variants={metricItemVariants} className="border-l-2 border-scarlet pl-6">
            <h3 className="text-4xl font-display font-bold mb-1 text-white">3+</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Major<br />Projects</p>
          </motion.div>
          <motion.div variants={metricItemVariants} className="border-l-2 border-scarlet pl-6">
            <h3 className="text-4xl font-display font-bold mb-1 text-white">5+</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Technical<br />Certifications</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
