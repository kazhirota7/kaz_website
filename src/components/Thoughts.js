import React from 'react';
import { motion } from 'framer-motion';

const Thoughts = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Thoughts</h1>
      <p className="mb-4">This is where you can share your thoughts, ideas, or blog posts.</p>
      {/* Add more thoughts content here */}
    </motion.div>
  );
};

export default Thoughts;
