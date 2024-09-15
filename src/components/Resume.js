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
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">University of California, Berkeley</h3>
          <p>B.S. in Mechanical Engineering</p>
          <p>Graduation: May 2022</p>
        </div>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Tokyo Metropolitan Kokusai High School</h3>
          <p>High School Diploma</p>
          <p>Graduation: March 2018</p>
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
            <li>Implemented performance optimizations resulting in 30% faster load times</li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
          <p>Google - Mountain View, CA</p>
          <p>May 2021 - August 2021</p>
          <ul className="list-disc list-inside mt-2">
            <li>Worked on the Android development team</li>
            <li>Contributed to the design and implementation of new features</li>
            <li>Participated in code reviews and agile development processes</li>
          </ul>
        </div>
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
            <li>Presented research at the International BCI Meeting 2022</li>
          </ul>
        </div>
        <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">Dean's Honor List</h3>
          <p>University of California, Berkeley</p>
          <p>2019 - 2022</p>
          <ul className="list-disc list-inside mt-2">
            <li>Maintained a GPA above 3.75 for 6 consecutive semesters</li>
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
