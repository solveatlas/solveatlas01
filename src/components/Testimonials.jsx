// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaQuoteLeft } from 'react-icons/fa';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'CEO, TechStart',
//     image: 'https://randomuser.me/api/portraits/women/44.jpg',
//     text: 'SolveAtlas transformed our online presence. Their attention to detail and modern design approach helped us increase our conversion rates significantly.',
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Founder, InnovateLab',
//     image: 'https://randomuser.me/api/portraits/men/32.jpg',
//     text: 'Working with the team was a breeze. They understood our vision perfectly and delivered a product that exceeded our expectations.',
//   },
//   {
//     id: 3,
//     name: 'Emily Davis',
//     role: 'Marketing Director, CreativeCo',
//     image: 'https://randomuser.me/api/portraits/women/68.jpg',
//     text: 'Professional, responsive, and incredibly talented. The new website is fast, beautiful, and easy to manage. Highly recommended!',
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-primary">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Don't just take our word for it. Here's what our partners have to say about working with us.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-secondary p-8 rounded-2xl relative shadow-sm"
//             >
//               <FaQuoteLeft className="text-accent/20 text-6xl absolute top-6 left-6" />
//               <p className="text-gray-700 mb-8 relative z-10 italic leading-relaxed">
//                 "{testimonial.text}"
//               </p>
//               <div className="flex items-center gap-4">
//                 <img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover border-2 border-accent"
//                 />
//                 <div>
//                   <h4 className="text-gray-900 font-bold">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Arjun Sharma",
      role: "CEO, TravelNest",
      image: "https://i.pravatar.cc/150?u=arjun",
      text: "Our Travel and Tours website turned out better than we imagined. The booking system is seamless and our conversion rate increased by 40% in the first month!",
      size: "large"
    },
    {
      name: "Priya Patel",
      role: "Editor, City News",
      image: "https://i.pravatar.cc/150?u=priya",
      text: "The News Portal is incredibly fast. Handling thousands of daily visitors is no longer a headache for us.",
      size: "small"
    },
    {
      name: "Rohan Verma",
      role: "Founder, TechStart",
      image: "https://i.pravatar.cc/150?u=rohan",
      text: "Affordable, professional, and very responsive. The 40% off deal was the best investment we made this year.",
      size: "small"
    },
    {
      name: "Sita Gurung",
      role: "Director, EcoStay",
      image: "https://i.pravatar.cc/150?u=sita",
      text: "Their team understood our vision for a dynamic site perfectly. The admin dashboard is so easy to use.",
      size: "medium"
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Delay between each card's animation
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id='testimonials' className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">Client Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            Trusted by businesses <br /> across the country.
          </h3>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:bg-white transition-colors duration-300 flex flex-col justify-between ${
                review.size === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              <Quote className="absolute top-8 right-8 text-slate-200" size={40} />
              
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className={`text-slate-700 font-medium leading-relaxed mb-8 ${
                  review.size === 'large' ? 'text-2xl' : 'text-lg'
                }`}>
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;