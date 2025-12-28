import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import FAQ_utils from '../utils/FAQ_utils';

const team = [
  {
    id: 1,
    name: 'Tilak Man Gubhaju',
    role: 'Full-Stack Developer, UI/UX Desiginer, Content Writer',
    image: './tilakgubhaju.jpg',
    social: { linkedin: '#', instagram: 'https://www.instagram.com/its_zorotz/', github: 'https://github.com/Tilak-csd/' },
  },
  {
    id: 2,
    name: 'Gaurab Lohani',
    role: 'Full-Stack Developer, Content Creator, Advertisor',
    image: './gaurablohani.jpeg',
    social: { linkedin: '#', instagram: 'https://www.instagram.com/gaurablohani.py/', github: 'https://github.com/gaurablohani01/' },
  }
];

const Team = () => {
  return (
    <section id="team" className="py-2 bg-secondary">
      <div className="container mx-auto px-8 md:px-16">

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              /* Below: w-full (1 col), sm:w-[calc(50%-2rem)] (2 cols), lg:w-[calc(25%-2rem)] (4 cols)
                 This mimics your grid but allows for perfect centering.
              */
              className="bg-primary overflow-hidden shadow-lg group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] max-w-[350px]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={member.social.linkedin} target='_blank' className="text-white hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
                  <a href={member.social.instagram} target='_blank' className="text-white hover:text-primary transition-colors text-xl"><FaInstagram /></a>
                  <a href={member.social.github} target='_blank' className="text-white hover:text-primary transition-colors text-xl"><FaGithub /></a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-arvo mb-1 font-arvo">{member.name}</h3>
                <p className="text-accent text-sm font-open_sans">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <FAQ_utils />
      </div>
    </section>
  );
};

export default Team;
