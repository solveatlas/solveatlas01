import React from 'react';
import Team from '../components/Team';
import { motion } from 'framer-motion';

const TeamPage = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-secondary py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4 font-arvo">Our Team</h1>
          <p className="text-gray-500 max-w-2xl mx-auto px-8 md:px-16 font-open_sans">
            Meet the passionate experts dedicated to bringing your digital vision to life.
          </p>
        </div>
        <Team />
      </motion.div>
    </div>
  );
};

export default TeamPage;
