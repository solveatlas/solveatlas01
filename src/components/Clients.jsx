import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaAmazon, FaMicrosoft, FaApple, FaSpotify, FaSlack } from 'react-icons/fa';

const clients = [
  { name: 'Google', icon: <FaGoogle /> },
  { name: 'Amazon', icon: <FaAmazon /> },
  { name: 'Microsoft', icon: <FaMicrosoft /> },
  { name: 'Apple', icon: <FaApple /> },
  { name: 'Spotify', icon: <FaSpotify /> },
  { name: 'Slack', icon: <FaSlack /> },
];

const Clients = () => {
  return (
    <section id="clients" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-5xl text-gray-400 hover:text-gray-900 transition-colors duration-300 cursor-pointer grayscale hover:grayscale-0"
              title={client.name}
            >
              {client.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
