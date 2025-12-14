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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We offer a comprehensive range of digital services to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-8 rounded-2xl shadow-lg hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 border border-gray-200"
            >
              <div className="text-4xl text-accent mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
