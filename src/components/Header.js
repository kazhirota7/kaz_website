import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h1 style={{ color: '#fff' }}>Kazuma Hirota (Kaz)</h1>
      <nav>
        <ul>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#about" style={{ color: '#fff' }}>About</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" style={{ color: '#fff' }}>Projects</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" style={{ color: '#fff' }}>Contact</a></motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
