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
        <VideoBackground>
          <motion.div
            className="max-w-7xl mx-auto p-5 bg-black bg-opacity-50"
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
                </>
              } />
              <Route path="/resume" element={<Resume />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/thoughts" element={<Thoughts />} />
            </Routes>
          </motion.div>
        </VideoBackground>
        <div className="max-w-7xl mx-auto p-5">
          <Routes>
            <Route path="/" element={
              <>
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
