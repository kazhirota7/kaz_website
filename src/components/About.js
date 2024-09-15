import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className="flex justify-center mb-5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <img 
          src={process.env.PUBLIC_URL + '/assets/profile.jpeg'} 
          alt="Profile" 
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
        />
      </motion.div>
      <h2 className="text-xl font-bold mb-4 text-center">Kazuma Hirota (Kaz)</h2>
      <h2 className="text-xl font-bold mb-4 text-center">廣田　和真</h2>
      <div className="flex justify-center space-x-4 mb-4">
        <motion.a
          href="https://github.com/kazhirota7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img 
            src={process.env.PUBLIC_URL + '/assets/github-logo.png'} 
            alt="GitHub" 
            className="w-8 h-8"
          />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/kazumahirota"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img 
            src={process.env.PUBLIC_URL + '/assets/linkedin-logo.webp'} 
            alt="LinkedIn" 
            className="w-8 h-8"
          />
        </motion.a>
      </div>
      <motion.p
        className="text-lg pt-5 text-center"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        I am a Software Engineer at Playstation with a Mechanical Engineering degree and research experience in Brain Computer Interfaces. I was born in Tokyo but am currently living in San Francisco.
      </motion.p>
    </motion.section>
  );
};

export default About;
