import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div
        className="profile-picture-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <img 
          src={process.env.PUBLIC_URL + '/assets/profile.jpeg'} 
          alt="Profile" 
          className="profile-picture"
        />
      </motion.div>
      <h2>About Me</h2>
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        Your brief introduction goes here. Highlight your skills, experience, and what makes you unique.
      </motion.p>
    </motion.section>
  );
};

export default About;
