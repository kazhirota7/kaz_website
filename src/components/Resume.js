import React from 'react';
import { motion } from 'framer-motion';

const ResumeEntry = ({ children }) => (
  <motion.div
    className="bg-white bg-opacity-90 p-4 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    {children}
  </motion.div>
);

const Resume = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-5 text-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-8">Resume</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResumeEntry>
            <div className="flex flex-col items-center mb-4">
              <img 
                src={process.env.PUBLIC_URL + '/assets/ut-austin.png'} 
                alt="University of Texas, Austin logo" 
                className="h-20 mb-2 object-contain"
              />
              <h3 className="text-xl font-semibold">University of Texas, Austin</h3>
              <p>B.S. in Mechanical Engineering Honors</p>
              <p>Graduation: May 2023</p>
              <p>Graduated with Highest Honors</p>
              <p className="font-semibold">GPA: 3.99</p>
            </div>
            {/* <p>B.S. in Mechanical Engineering Honors</p>
            <p>Graduation: May 2023</p>
            <p>GPA: 3.99</p> */}
          </ResumeEntry>
          <ResumeEntry>
            <div className="flex flex-col items-center mb-4">
                <img 
                  src={process.env.PUBLIC_URL + '/assets/jesuit.png'} 
                  alt="Jesuit Dallas logo" 
                  className="h-20 mb-2 object-contain"
                />
              <h3 className="text-xl font-semibold">Jesuit Dallas</h3>
              <p>High School Diploma</p>
              <p>Graduation: May 2019</p>
            </div>
          </ResumeEntry>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResumeEntry>
            <div className="flex flex-col items-center">
              <img 
                src={process.env.PUBLIC_URL + '/assets/playstation.svg'} 
                alt="Playstation logo" 
                className="h-20 mb-2 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p>PlayStation - San Francisco, CA</p>
            <p>May 2022 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed automation tools and frameworks for QA</li>
              <li>Used reinforcement learning to enable automated agentic UI testing</li>
              <li>Created tools using Large Language Models to accelerate internal workflows</li>
              <li>Led an effort for delivering a proof of concept involving 7 QA teams and achieved success in a prompt manner</li>
            </ul>
          </ResumeEntry>
          <ResumeEntry>
          <div className="flex flex-col items-center">
              <img 
                src={process.env.PUBLIC_URL + '/assets/cii.webp'} 
                alt="CII logo" 
                className="h-20 mb-2 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Student Technician</h3>
            <p>CII - Austin, TX</p>
            <p>April 2021 - May 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Backend development using Django for a custom construction data-management system</li>
              <li>Conducted data analytics using machine learning for benchmarking real-time construction projects</li>
              <li>Published a paper in the 9th International Conference on Constructino Engineering and Project Management</li>
            </ul>
          </ResumeEntry>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResumeEntry>
            <div className="flex flex-col items-center">
              <img 
                src={process.env.PUBLIC_URL + '/assets/lu-research.png'} 
                alt="Lu research logo" 
                className="h-20 my-3 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Lu Research Group</h3>
            <p className='text-gray-500'>Brain Machine Interface • Human Computer Interface • Machine Learning • Soft Robotics</p>
            <p>University of Texas, Austin</p>
            <p>December 2020 - May 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Conducted research on new designs for non-invasive BCI technologies like EEG to optimize confort and longevity of data quality </li>
              <li>Designed, laser cut, and manufactured ultrathin e-tattoo electrodes for long term monitoring of EEG and EMG</li>
              <li>Designed and conducted an experiment to collect EEG data while subjects are playing simulation games of varying difficulty levels</li>
              <li>From the collected data, built mental workload and vigilance classifiers using neural networks</li>
            </ul>
          </ResumeEntry>
          <ResumeEntry>
          <div className="flex flex-col items-center">
              <img 
                src={process.env.PUBLIC_URL + '/assets/asu.png'} 
                alt="ASU logo" 
                className="h-20 my-3 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold">Neuro-Symbiolic Intelligent Cyber-physical Systems Lab</h3>
            <p className='text-gray-500'>Machine Learning • Neural Networks</p>
            <p>Arizona State University</p>
            <p>May 2021 - November 2021</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led the software development effort for a human-interpretable neural network model</li>
              <li>Enhanced the interpretability of neural networks by using a weighted graph-based signal temporal logic</li>
              <li>Published by IEEE Control Systems Letters</li>
            </ul>
          </ResumeEntry>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResumeEntry>
            <h3 className="text-xl font-semibold">Weighted Graph-Based Signal Temporal Logic Inference Using Neural Networks</h3>
            <p>IEEE Control Systems Letters</p>
            <p>December 2021</p>
            <div className="mt-2 h-64 w-full">
              <iframe
                src="https://ieeexplore.ieee.org/document/9662049"
                title="IEEE Publication"
                className="w-full h-full border-0 cursor-pointer"
                sandbox='allow-scripts allow-modal'
                onClick={() => window.open("https://ieeexplore.ieee.org/document/9662049", "_blank")}
              ></iframe>
            </div>
          </ResumeEntry>
          <ResumeEntry>
            <h3 className="text-xl font-semibold">Incorporating Machine Learning into a Data Warehouse for
            Real-Time Construction Projects Benchmarking </h3>
            <p>ICCEPM 2022</p>
            <p>June 2022</p>
            <div className="mt-2 h-64 w-full">
              <iframe
                src="/assets/cii-publication.pdf"
                title="ICCEPM Publication"
                className="w-full h-full border-0 cursor-pointer"
                sandbox='allow-modal'
                onClick={() => window.open("/assets/cii-publication.pdf", "_blank")}
              ></iframe>
            </div>
          </ResumeEntry>
          <ResumeEntry>
            <h3 className="text-xl font-semibold">Robust, Compact Forehead EEG with E-Tattoo Electrodes</h3>
            <p>Longhorn Research Poster Session</p>
            <p>April 2022</p>
            <div className="mt-2 h-64 w-full">
              <iframe
                src="/assets/lrps-poster.pdf"
                title="ICCEPM Publication"
                width={50}
                className="w-full h-full border-0 cursor-pointer"
                onClick={() => window.open("/assets/lrps-poster.pdf", "_blank")}
              ></iframe>
            </div>
          </ResumeEntry>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ResumeEntry>
            <h3 className="text-xl font-semibold">First Place Presentation Award</h3>
            <p>2022 Longhorn Research Poster Session</p>
            <p>April 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Won the first place award out of over 180 posters</li>
            </ul>
          </ResumeEntry>
          <ResumeEntry>
            <h3 className="text-xl font-semibold">Audience Award</h3>
            <p>2022 Longhorn Research Poster Session</p>
            <p>April 2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Won the audience award out of over 180 posters</li>
            </ul>
          </ResumeEntry>
          <ResumeEntry>
            <h3 className="text-xl font-semibold">Distinguished College Scholar</h3>
            <p>University of Texas, Austin</p>
            <p>2019 - 2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Maintained a GPA in the top 4% of the graduating class from the Cockrell School of Engineering</li>
            </ul>
          </ResumeEntry>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;
