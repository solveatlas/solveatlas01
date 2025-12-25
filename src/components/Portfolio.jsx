import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Golden Future Academy Website',
    category: 'Web Development',
    image: './portfolio/golden_future_website.png',
    description: 'A full-featured school website, with all features like adding the blog page, contact sections.',
    view_page: "https://www.lamjunggfa.edu.np/"
  },
  {
    id: 2,
    title: 'Journey International Consultancy Website',
    category: 'Consutancy Website',
    image: './portfolio/journey_international_consultancy.png',
    description: 'A clean and responsive PHP website, with all functional and live features.',
    view_page: "https://journeyinteducation.com/"
  },
  {
    id: 3,
    title: 'Shrestha Cafe Website',
    category: 'Dynamic Website',
    image: './portfolio/shrestha_cafe_website.png',
    description: 'An immersive website of a cafe & restaurant, with multiple features like making a reservation, contacting, adding new menus and News.',
    view_page: "https://shresthacafe.vercel.app/"
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            Crafting Digital <br />Experiences.
          </h3>
        </motion.div>

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
                  href={selectedProject.view_page} target='_blank'
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

