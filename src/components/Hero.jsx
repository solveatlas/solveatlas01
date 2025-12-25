import React from 'react';
import { motion } from 'framer-motion';

// const BackgroundElements = () => {
//   const elements = Array.from({ length: 15 });

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       {elements.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute bg-accent/10 rounded-full blur-3xl"
//           initial={{
//             x: Math.random() * 100 + "%",
//             y: Math.random() * 100 + "%",
//             scale: Math.random() * 0.5 + 0.5,
//           }}
//           animate={{
//             x: [
//               Math.random() * 100 + "%",
//               Math.random() * 100 + "%",
//               Math.random() * 100 + "%",
//             ],
//             y: [
//               Math.random() * 100 + "%",
//               Math.random() * 100 + "%",
//               Math.random() * 100 + "%",
//             ],
//           }}
//           transition={{
//             duration: Math.random() * 20 + 15,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             width: Math.random() * 400 + 100 + "px",
//             height: Math.random() * 400 + 100 + "px",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary"
    >
      {/* Abstract Background Elements */}
      {/* <BackgroundElements /> */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div> */}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
           Creating <span className="text-accent">Digital Experiences</span>
          <br /> With Purpose
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          SolveAtlas is a modern web development agency crafting clean, responsive, and high-performance websites for forward-thinking brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
