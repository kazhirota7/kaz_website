import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/" className="text-white hover:text-gray-300">Home</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/resume" className="text-white hover:text-gray-300">Resume</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/hobbies" className="text-white hover:text-gray-300">Hobbies</Link></motion.li>
          <motion.li whileHover={{ scale: 1.1 }}><Link to="/thoughts" className="text-white hover:text-gray-300">Thoughts</Link></motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
