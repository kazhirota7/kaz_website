import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="my-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <motion.form
        className="flex flex-col space-y-4"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <input type="text" placeholder="Your Name" required className="p-2 bg-white bg-opacity-10 rounded" />
        <input type="email" placeholder="Your Email" required className="p-2 bg-white bg-opacity-10 rounded" />
        <textarea placeholder="Your Message" required className="p-2 bg-white bg-opacity-10 rounded h-32"></textarea>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
