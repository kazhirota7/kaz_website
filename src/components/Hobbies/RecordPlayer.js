import React from 'react';
import { motion } from 'framer-motion';

const RecordPlayer = () => {
  return (
    <svg width="125" height="125" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#A1662F" />
      <circle cx="50" cy="50" r="45" fill="#333" />
      <circle cx="50" cy="50" r="20" fill="#666" />
      <circle cx="50" cy="50" r="5" fill="#999" />
      <motion.g
        width="100" height="100"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '50px 50px' }}
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="45" fill="transparent" />
        <rect x="85" y="45" width="15" height="10" fill="#666" />
      </motion.g>
    </svg>
  );
};

export default RecordPlayer;
