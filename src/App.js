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
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <Router>
      <div className="relative w-screen min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={
            <VideoBackground>
              <motion.div
                className="max-w-7xl mx-auto p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <About />
                <ButtonSection />
                <Projects />
                <Contact />
              </motion.div>
            </VideoBackground>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/thoughts" element={<Thoughts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
