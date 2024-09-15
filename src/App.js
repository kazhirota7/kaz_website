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
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <VideoBackground>
                  <motion.div
                    className="max-w-7xl mx-auto p-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <About />
                  </motion.div>
                </VideoBackground>
                <div className="max-w-7xl mx-auto p-5">
                  <ButtonSection />
                </div>
              </>
            } />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/thoughts" element={<Thoughts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
