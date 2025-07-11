import React from 'react';
import { motion } from 'framer-motion';
import { copywriterData } from '../data';

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center min-h-screen px-6 py-12 overflow-hidden">
      <img
        src="/landscape1.jpg"
        alt="Landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl w-full text-center"
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
          {copywriterData.name}
        </h1>
        <p className="text-2xl text-gray-300 mb-8 drop-shadow-md">
          {copywriterData.headline}
        </p>
        <a
          href="https://github.com/your-github-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
        >
          Live Demo
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
