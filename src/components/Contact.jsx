import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';

const InputField = ({ label, id, type, value, onChange, textarea }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label htmlFor={id} className="block text-xs text-gray-400 uppercase tracking-widest font-semibold mb-2">{label}</label>
      {textarea ? (
        <textarea
          id={id}
          rows="4"
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-dark-bg border border-dark-border outline-none px-4 py-3 text-white transition-colors rounded-none resize-none"
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-dark-bg border border-dark-border outline-none px-4 py-3 text-white transition-colors rounded-none"
          required
        />
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-scarlet pointer-events-none"
      />
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const transitionEase = [0.76, 0, 0.24, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: transitionEase }
    }
  };

  return (
    <section id="contact" className="py-32 bg-dark-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: transitionEase }}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6 text-white">Let's Work <br/><span className="text-gray-500">Together.</span></h2>
              <p className="text-xl text-gray-400 font-light">I'm currently open to new collaborations and projects. Let's build something unique.</p>
              <div className="w-24 h-1 bg-scarlet mt-8" />
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <Mail className="text-scarlet mb-2" size={24} />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Email</span>
                <a href="mailto:aldrinkjohni@gmail.com" className="text-white hover:text-scarlet transition-colors duration-300">aldrinkjohni@gmail.com</a>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <Globe className="text-scarlet mb-2" size={24} />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Website</span>
                <a href="https://www.aldrinkjohni.com" target="_blank" rel="noreferrer" className="text-white hover:text-scarlet transition-colors duration-300">www.aldrinkjohni.com</a>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <Phone className="text-scarlet mb-2" size={24} />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Phone</span>
                <a href="tel:+919207914471" className="text-white hover:text-scarlet transition-colors duration-300 font-mono">+91 920 791 4471</a>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col gap-2">
                <MapPin className="text-scarlet mb-2" size={24} />
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Location</span>
                <span className="text-white">Kerala, India</span>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-dark-surface p-8 md:p-10 border border-dark-border rounded-lg">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-col gap-6"
              >
                <motion.div variants={itemVariants}>
                  <InputField
                    label="Name"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <InputField
                    label="Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <InputField
                    label="Project Details"
                    id="details"
                    textarea
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <motion.button 
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ letterSpacing: "0.15em" }}
                    transition={{ duration: 0.3 }}
                    className="group w-full bg-white text-black font-bold uppercase tracking-wider py-4 mt-4 flex items-center justify-center gap-3 hover:bg-scarlet hover:text-white rounded-none"
                  >
                    Submit Request
                    <ArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" size={20} />
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
