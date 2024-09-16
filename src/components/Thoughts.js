import React from 'react';
import { motion } from 'framer-motion';

const Thoughts = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
              <img 
                src={process.env.PUBLIC_URL + '/assets/meme.jpg'} 
                alt="Not a single thought behind those eyes" 
                className="w-full my-3 object-contain"
              />
            </div>
    </motion.div>
  );
};

export default Thoughts;
