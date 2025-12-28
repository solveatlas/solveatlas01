import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCogs, FaBullhorn } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Robust and scalable web applications built with modern technologies.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Design',
    description: 'Websites that look perfect on all devices, from desktops to smartphones.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed for optimal user experience.',
  },
  {
    icon: <FaCogs />,
    title: 'Custom Solutions',
    description: 'Tailored software solutions to meet your unique business challenges.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Social Advertisement',
    description: 'Strategic social media campaigns to boost your brand visibility and reach.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 font-arvo"
        >
          <h2 className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-accent">
            Solutions for Modern <br />Business Growth
          </h3>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // ADD THIS LINE:
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              // REMOVE 'hover:-translate-y-10' and 'transform' from className:
              className="bg-primary p-8 shadow-lg transition-shadow duration-300 hover:shadow-accent/20 border border-gray-200 cursor-pointer"
            >
              <div className="text-4xl text-accent mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-arvo">{service.title}</h3>
              <p className="text-gray-600 text-md leading-relaxed font-open_sans">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
