import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="mb-4">This is where you can put your resume content.</p>
      {/* Add more resume content here */}
    </motion.div>
  );
};

export default Resume;
