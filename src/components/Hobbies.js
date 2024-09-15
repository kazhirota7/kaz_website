import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hobbies = () => {
  const [isPeeled, setIsPeeled] = useState(false);

  const handlePeel = () => {
    setIsPeeled(!isPeeled);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Hobbies</h1>
      <p className="mb-4">Here you can list and describe your hobbies.</p>
      <div className="flex justify-center mb-8">
        <motion.div
          className="relative w-64 h-64 cursor-pointer"
          onClick={handlePeel}
          animate={{ rotateY: isPeeled ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <motion.img
            src={process.env.PUBLIC_URL + '/assets/vu-banana.png'}
            alt="Vu Banana"
            className="w-full h-full object-cover"
            initial={{ opacity: 1 }}
            animate={{ opacity: isPeeled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-yellow-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPeeled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl font-bold text-center">Peeled!</p>
          </motion.div>
        </motion.div>
      </div>
      {/* Add more hobbies content here */}
    </motion.div>
  );
};

export default Hobbies;
