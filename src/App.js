import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import ButtonSection from './components/ButtonSection';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies';
import Thoughts from './components/Thoughts';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <Router>
      <div className="relative w-screen min-h-screen">
        <Header />
        <VideoBackground>
          <motion.div
            className="max-w-7xl mx-auto p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Routes>
              <Route path="/" element={<About />} />
            </Routes>
          </motion.div>
        </VideoBackground>
        <div className="max-w-7xl mx-auto p-5">
          <Routes>
            <Route path="/" element={<ButtonSection />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/thoughts" element={<Thoughts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
