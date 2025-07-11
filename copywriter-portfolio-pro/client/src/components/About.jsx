import React from 'react';
import { motion } from 'framer-motion';
import { copywriterData } from '../data';

function About() {
  return (
    <section className="bg-gray-800 text-white dark:bg-gray-900 dark:text-white py-16 px-6 max-w-4xl mx-auto rounded-lg shadow-lg my-12">
      <motion.h2
        className="text-4xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {copywriterData.about}
      </motion.p>
    </section>
  );
}

export default About;
