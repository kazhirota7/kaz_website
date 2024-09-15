import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-screen min-h-screen">
      <video autoPlay loop muted playsInline className="fixed right-0 bottom-0 min-w-full min-h-full w-auto h-auto z-[-1] object-cover">
        <source src={process.env.PUBLIC_URL + '/assets/autumn.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="relative z-10 max-w-7xl mx-auto p-5 bg-black bg-opacity-50 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
