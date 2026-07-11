import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setScrolled(latest > 50);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuVariants = {
    closed: {
      clipPath: "circle(0px at 90% 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      clipPath: "circle(1500px at 90% 40px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-tight text-white">ALDRIN K JOHNI</span>
            <span className="text-xs text-gray-400 tracking-wider uppercase">Creative Technologist</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {links.map((link) => (
              <Magnetic key={link.label}>
                <a href={link.href} className="text-gray-300 hover:text-scarlet transition-colors duration-300 px-3 py-2 block">
                  {link.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scarlet opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-scarlet"></span>
              </span>
              <span className="hidden sm:inline-block">Available Worldwide</span>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 focus:outline-none hover:text-scarlet transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Circular Clip-Path Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center items-center md:hidden"
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-display font-bold">
          {links.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-gray-300 hover:text-scarlet transition-colors duration-300"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;
