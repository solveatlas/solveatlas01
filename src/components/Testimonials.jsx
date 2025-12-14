import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'SolveAtlas transformed our online presence. Their attention to detail and modern design approach helped us increase our conversion rates significantly.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with the team was a breeze. They understood our vision perfectly and delivered a product that exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Marketing Director, CreativeCo',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Professional, responsive, and incredibly talented. The new website is fast, beautiful, and easy to manage. Highly recommended!',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it. Here's what our partners have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-2xl relative shadow-sm"
            >
              <FaQuoteLeft className="text-accent/20 text-6xl absolute top-6 left-6" />
              <p className="text-gray-700 mb-8 relative z-10 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
