import React from 'react';
import { motion } from 'framer-motion';
import { copywriterData } from '../data';

function Projects() {
  return (
    <section className="bg-gray-800 text-white dark:bg-gray-900 dark:text-white py-16 px-6 max-w-5xl mx-auto rounded-lg shadow-lg my-12">
      <motion.h2
        className="text-4xl font-extrabold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {copywriterData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="mb-6">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
