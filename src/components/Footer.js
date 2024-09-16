import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Kazuma Hirota. All rights reserved.</p>
      <div className='flex justify-center items-center space-x-2 my-4'>
        <p>Source code avilable at</p>
        <motion.a
            href="https://github.com/kazhirota7/kaz_website"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=''
          >
          <img 
            src={process.env.PUBLIC_URL + '/assets/github-logo.png'} 
            alt="GitHub" 
            className="w-8 h-8"
          />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;
