import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Trophy, Briefcase } from 'lucide-react';

const EducationAchievements = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  // Dynamic transforms for node activation based on scroll progress intersection
  const node1Color = useTransform(scrollYProgress, [0, 0.25], ["#4b5563", "#FF2400"]);
  const node1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.2]);

  const node2Color = useTransform(scrollYProgress, [0.75, 0.98], ["#4b5563", "#FF2400"]);
  const node2Scale = useTransform(scrollYProgress, [0.75, 0.98], [1, 1.2]);

  const transitionEase = [0.76, 0, 0.24, 1];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: transitionEase }
    }
  };

  const cardLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: transitionEase }
    }
  };

  const cardRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: transitionEase }
    }
  };

  return (
    <section className="py-32 bg-[#050505] border-y border-dark-border relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* Education & Opportunities */}
          <div>
            <motion.div 
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4 text-white">
                <GraduationCap className="text-scarlet" size={40} /> Education
              </h2>
            </motion.div>

            <div ref={timelineRef} className="flex flex-col gap-12 mb-16 relative">
              {/* Animated Timeline line */}
              <div className="absolute left-3 top-2 bottom-2 w-[1px] bg-dark-border">
                <motion.div 
                  style={{ 
                    scaleY: scrollYProgress, 
                    originY: 0, 
                    willChange: "transform" 
                  }}
                  className="w-full h-full bg-scarlet"
                />
              </div>
              
              <motion.div 
                variants={cardLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="relative pl-10"
              >
                <motion.div 
                  style={{ borderColor: node1Color, scale: node1Scale }}
                  className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 z-10"
                />
                <h3 className="text-xl font-display font-bold text-white mb-1">B.Tech (Bachelor of Technology)</h3>
                <h4 className="text-scarlet font-semibold text-sm mb-2">Amal Jyothi College of Engineering, Kanjirappally</h4>
                <p className="text-gray-400 text-sm">2nd Year • Expected Graduation: 2029</p>
              </motion.div>

              <motion.div 
                variants={cardLeftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="relative pl-10"
              >
                <motion.div 
                  style={{ borderColor: node2Color, scale: node2Scale }}
                  className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-dark-bg border-2 z-10"
                />
                <h3 className="text-xl font-display font-bold text-white mb-1">Higher Secondary Education</h3>
                <h4 className="text-gray-400 font-semibold text-sm mb-2">Carmel CMI Public School, Puliyanmala, Idukki, Kerala</h4>
              </motion.div>
            </div>

            <motion.div 
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4 text-white">
                <Briefcase className="text-scarlet" size={40} /> Applied Opportunities
              </h2>
            </motion.div>
            
            <motion.div 
              variants={cardLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-dark-surface border border-dark-border p-6 rounded-lg"
              style={{ willChange: "transform" }}
            >
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Actively applied technical and creative problem-solving skills for roles at <span className="text-white font-semibold">Fuel Flux</span>, <span className="text-white font-semibold">NayePankh Foundation</span>, <span className="text-white font-semibold">YugaYatra Retail</span>, and <span className="text-white font-semibold">Axlero Solutions</span>.
              </p>
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div 
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4 flex items-center gap-4 text-white">
                <Trophy className="text-scarlet" size={40} /> Achievements
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                variants={cardRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-dark-surface p-6 border-l-4 border-scarlet rounded-r-lg"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">Technical Certifications</h3>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div> Coursera Certifications
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-scarlet rounded-full"></div> Google Career Certificates
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={cardRightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-dark-surface p-6 border-l-4 border-gray-600 rounded-r-lg"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">Open Source Contributions</h3>
                <p className="text-sm text-gray-400 font-light">
                  Actively contributed to the open-source GitHub project <span className="text-scarlet font-semibold">"Plantoraa"</span>.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationAchievements;
