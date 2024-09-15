import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="flex justify-between items-center py-5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <nav>
        <ul className="flex space-x-4">
          <motion.li whileHover={{ scale: 1.1 }}><a href="#about" className="text-white hover:text-gray-300">About</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#projects" className="text-white hover:text-gray-300">Projects</a></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><a href="#contact" className="text-white hover:text-gray-300">Contact</a></motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
