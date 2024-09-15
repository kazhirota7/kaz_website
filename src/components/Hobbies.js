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
      <div className="flex items-center mb-8">
        <motion.div
          className="relative cursor-pointer w-64 h-64"
          onClick={handlePeel}
        >
          <motion.div
            className="absolute -right-24 top-1/2 transform -translate-y-1/2 text-sm font-bold text-white bg-black bg-opacity-50 p-1 rounded"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isPeeled ? 0 : 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            ← Peel here
          </motion.div>
          <motion.img
            src={process.env.PUBLIC_URL + '/assets/vu-banana.png'}
            alt="Vu Banana"
            className="w-full h-full object-cover"
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: isPeeled ? -15 : 0,
              x: isPeeled ? -50 : 0,
              y: isPeeled ? -50 : 0,
              scale: isPeeled ? 0.8 : 1,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
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
