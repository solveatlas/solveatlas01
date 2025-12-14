import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const team = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 2,
    name: 'Jessica Lee',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/29.jpg',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    id: 4,
    name: 'Sophia Martinez',
    role: 'Marketing Specialist',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    social: { linkedin: '#', twitter: '#', github: '#' },
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            The talented individuals behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={member.social.linkedin} className="text-white hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
                  <a href={member.social.twitter} className="text-white hover:text-primary transition-colors text-xl"><FaTwitter /></a>
                  <a href={member.social.github} className="text-white hover:text-primary transition-colors text-xl"><FaGithub /></a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
