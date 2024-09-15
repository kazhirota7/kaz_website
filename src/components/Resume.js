import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">University of California, Berkeley</h3>
          <p>B.S. in Mechanical Engineering</p>
          <p>Graduation: May 2022</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p>PlayStation - San Francisco, CA</p>
          <p>June 2022 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed and maintained core gaming features</li>
            <li>Collaborated with cross-functional teams to improve user experience</li>
          </ul>
        </div>
        {/* Add more experience items here */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research/Awards</h2>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">Brain-Computer Interface Research</h3>
          <p>UC Berkeley Neuroscience Lab</p>
          <p>January 2021 - May 2022</p>
          <ul className="list-disc list-inside mt-2">
            <li>Conducted research on non-invasive BCI technologies</li>
            <li>Published findings in the Journal of Neural Engineering</li>
          </ul>
        </div>
        {/* Add more research/awards items here */}
      </section>
    </motion.div>
  );
};

export default Resume;
