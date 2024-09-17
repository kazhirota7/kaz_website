import React from 'react';
import { motion } from 'framer-motion';

const RecordPlayer = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#A1662F" />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '50px 50px' }}
      >
        <circle cx="50" cy="50" r="45" fill="#333" />
        <circle cx="50" cy="50" r="20" fill="#666" />
        <circle cx="50" cy="50" r="5" fill="#999" />
        <rect x="85" y="45" width="15" height="10" fill="#666" />
      </motion.g>
    </svg>
  );
};

export default RecordPlayer;
