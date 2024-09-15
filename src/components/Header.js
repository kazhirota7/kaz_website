import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <motion.div
        className="bg-gray-800 rounded-full p-2 m-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleExpand}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-4 rounded-lg mt-2 ml-4"
          >
            <ul className="space-y-2">
              <motion.li whileHover={{ scale: 1.1 }}><Link to="/" className="text-white hover:text-gray-300" onClick={toggleExpand}>Home</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }}><Link to="/resume" className="text-white hover:text-gray-300" onClick={toggleExpand}>Resume</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }}><Link to="/hobbies" className="text-white hover:text-gray-300" onClick={toggleExpand}>Hobbies</Link></motion.li>
              <motion.li whileHover={{ scale: 1.1 }}><Link to="/thoughts" className="text-white hover:text-gray-300" onClick={toggleExpand}>Thoughts</Link></motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
