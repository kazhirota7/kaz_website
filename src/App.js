import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import ButtonSection from './components/ButtonSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';
import Thoughts from './components/Thoughts';

function App() {
  return (
    <Router>
      <div className="relative w-screen min-h-screen">
        <div className="relative">
          <video autoPlay loop muted playsInline className="absolute right-0 top-0 min-w-full min-h-full w-auto h-auto object-cover">
            <source src={process.env.PUBLIC_URL + '/assets/autumn.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="relative z-10 max-w-7xl mx-auto p-5 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header />
            <Routes>
              <Route path="/" element={
                <>
                  <About />
                  <ButtonSection />
                  <Projects />
                  <Contact />
                </>
              } />
              <Route path="/resume" element={<Resume />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/thoughts" element={<Thoughts />} />
            </Routes>
          </motion.div>
        </div>
      </div>
    </Router>
  );
}

export default App;
