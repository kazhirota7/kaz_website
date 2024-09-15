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
          <Link
            to={button.path}
            className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 transition duration-300"
          >
            {button.title}
          </Link>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ButtonSection;
