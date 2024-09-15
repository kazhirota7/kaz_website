import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={process.env.PUBLIC_URL + '/assets/autumn.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className="content"
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
