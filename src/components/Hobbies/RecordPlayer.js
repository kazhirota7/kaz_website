import React from 'react';
import { motion } from 'framer-motion';

const RecordPlayer = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="50" r="45" fill="#333" />
      <circle cx="50" cy="50" r="20" fill="#666" />
      <circle cx="50" cy="50" r="5" fill="#999" />
      <rect x="85" y="45" width="15" height="10" fill="#666" />
    </motion.svg>
  );
};

export default RecordPlayer;
