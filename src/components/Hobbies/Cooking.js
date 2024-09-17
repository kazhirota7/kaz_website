import React from 'react';
import { motion } from 'framer-motion';

const Cooking = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Cooking</h1>
      <p className="text-xl">Coming soon...</p>
    </motion.div>
  );
};

export default Cooking;
