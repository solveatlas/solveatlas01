import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=E-Commerce',
    description: 'A full-featured e-commerce platform with cart, checkout, and payment integration.',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=Dashboard',
    description: 'A clean and intuitive dashboard for tracking financial data and analytics.',
  },
  {
    id: 3,
    title: 'Travel Agency Site',
    category: 'Web Design',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=Travel',
    description: 'An immersive website for a travel agency featuring stunning visuals and booking system.',
  },
  {
    id: 4,
    title: 'Health App',
    category: 'Mobile App',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=Health+App',
    description: 'A mobile application for tracking health metrics and workout routines.',
  },
  {
    id: 5,
    title: 'Corporate Portal',
    category: 'Custom Solution',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=Corporate',
    description: 'A secure internal portal for employee management and resource sharing.',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Marketing',
    image: 'https://via.placeholder.com/600x400/1E2A47/4F79FF?text=Marketing',
    description: 'A successful social media campaign that increased brand engagement by 200%.',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Check out some of our recent work and see how we help businesses thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-accent font-medium">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-secondary rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-900 hover:text-accent z-10 bg-white/50 p-2 rounded-full transition-colors"
              >
                <FaTimes size={20} />
              </button>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                <p className="text-accent font-medium mb-6">{selectedProject.category}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  View Project <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
