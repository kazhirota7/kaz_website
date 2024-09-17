import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      <div className="flex items-center my-10">
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
            alt="VU Banana"
            className="w-full h-full object-cover"
            initial={{ rotate: 0 }}
            animate={{ 
              rotate: isPeeled ? -75 : 0,
              x: isPeeled ? -250 : 0,
              y: isPeeled ? -150 : 0,
              scale: isPeeled ? 1 : 0.6,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 15, delay: isPeeled ? 0 : 0.1  }}
          />
          {isPeeled && 
          <motion.div
            className="absolute inset-0 flex flex-col items-end justify-center mr-10 pr-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isPeeled ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isPeeled ? 0 : 0.1 }}
          >
            <Link to="/music">
              <motion.div
                className="mb-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-800 hover:bg-opacity-100 transition duration-300 text-center">
                  <h3 className="text-xl font-semibold">Music</h3>
                </div>
              </motion.div>
            </Link>
            <Link to="/cooking">
              <motion.div
                className=""
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-800 hover:bg-opacity-100 transition duration-300 text-center">
                  <h3 className="text-xl font-semibold">Cooking</h3>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        }
        </motion.div>
      </div>
      {/* Add more hobbies content here */}
    </motion.div>
  );
};

export default Hobbies;
