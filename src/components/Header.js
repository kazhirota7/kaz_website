import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h1>Your Name</h1>
      <nav>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#about">About</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#projects">Projects</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#contact">Contact</a></motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
