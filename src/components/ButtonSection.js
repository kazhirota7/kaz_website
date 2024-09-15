import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ButtonSection = () => {
  const buttons = [
    { title: 'Resume', path: '/resume', description: 'My professional experiences, education, awards, and skills' },
    { title: 'Hobbies', path: '/hobbies', description: 'What I like to do outside of work' },
    { title: 'Thoughts', path: '/thoughts', description: 'Random thoughts' },
  ];

  return (
    <motion.section
      className="my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="grid grid-cols-3 gap-4">
        {buttons.map((button) => (
          <motion.div
            key={button.title}
            className="w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={button.path} className="block w-full">
              <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md text-gray-800 hover:bg-opacity-100 transition duration-300 text-center">
                <h3 className="text-xl font-semibold">{button.title}</h3>
                <p className="text-base text-gray-400 font-semibold">{button.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ButtonSection;
