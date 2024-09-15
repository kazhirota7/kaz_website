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
      <div className="flex items-center mb-8">
        <motion.div
          className="relative cursor-pointer"
          onClick={handlePeel}
        >
          <motion.div
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-950"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isPeeled ? 0 : 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
          >
            ← Peel here
          </motion.div>
          <motion.img
            src={process.env.PUBLIC_URL + '/assets/vu-banana.png'}
            alt="Vu Banana"
            className="w-full h-full object-cover"
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: isPeeled ? -75 : 0,
              x: isPeeled ? -250 : 0,
              y: isPeeled ? -150 : 0,
              scale: isPeeled ? 1 : 0.7,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPeeled ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isPeeled ? 0.5 : 0 }}
          >
            <p className="text-xl font-bold text-center text-gray-900">Peeled!</p>
          </motion.div>
        </motion.div>
      </div>
      {/* Add more hobbies content here */}
    </motion.div>
  );
};

export default Hobbies;
