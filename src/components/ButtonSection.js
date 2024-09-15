import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ButtonSection = () => {
  const buttons = [
    { title: 'Resume', path: '/resume' },
    { title: 'Hobbies', path: '/hobbies' },
    { title: 'Thoughts', path: '/thoughts' },
  ];

  return (
    <motion.section
      className="my-10 flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {buttons.map((button) => (
        <motion.div
          key={button.title}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to={button.path}>
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-800 hover:bg-opacity-100 transition duration-300">
              <h3 className="text-xl font-semibold">{button.title}</h3>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ButtonSection;
