import React from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <p className="mb-4">Here you can list and describe your hobbies.</p>
      {/* Add more hobbies content here */}
    </motion.div>
  );
};

export default Hobbies;
