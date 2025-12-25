// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     setIsOpen(false);

//     if (href.startsWith('#')) {
//       if (location.pathname !== '/') {
//         navigate('/');
//         setTimeout(() => {
//           const element = document.querySelector(href);
//           if (element) element.scrollIntoView({ behavior: 'smooth' });
//         }, 100);
//       } else {
//         const element = document.querySelector(href);
//         if (element) element.scrollIntoView({ behavior: 'smooth' });
//       }
//     } else {
//       navigate(href);
//     }
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Services', href: '#services' },
//     { name: 'Portfolio', href: '#portfolio' },
//     // { name: 'Clients', href: '#clients' },
//     { name: 'Testimonials', href: '#testimonials' },
//     { name: 'Pricing', href: '/pricing' },
//     { name: 'Team', href: '/team' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-2'
//         }`}
//     >
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <Link to="/" className="flex items-center justify-center">
//           <img src='./logo.svg' alt="SolveAtlas" className="h-16 w-auto" />
//           <p className='hidden lg:block text-3xl font-bold ml-[-1rem]'>olveAtlas</p>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleNavClick(e, link.href)}
//               className="relative group text-gray-600 hover:text-accent transition-colors duration-300 font-medium cursor-pointer py-1"
//             >
//               {link.name}
//               {/* The Underline Span */}
//               <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-900 focus:outline-none"
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-secondary overflow-hidden"
//           >
//             <div className="flex flex-col items-center py-8 space-y-6">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => {handleNavClick(e, link.href)
//                                       setIsOpen(false)
//                   }
//                   }

//               className="text-xl text-gray-700 hover:text-accent transition-colors duration-300 cursor-pointer"
//                 >
//               {link.name}
//             </a>
//               ))}
//           </div>
//           </motion.div>
//         )}
//     </AnimatePresence>
//     </nav >
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    // 1. Always close the mobile menu first
    setIsOpen(false);

    // 2. Handle Anchor Links (Internal Scrolling)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (location.pathname !== '/') {
        // If we are on /pricing or /team, go home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const offset = 80; // Account for fixed header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 150); // Small delay to allow home page to load
      } else {
        // We are already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    } else {
      // 3. Handle Regular Routes (No e.preventDefault() needed here usually, 
      // but since we called it in our custom logic, we use navigate)
      navigate(href);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src='./logo.svg' alt="SolveAtlas" className="h-12 md:h-16 w-auto transition-transform group-hover:scale-105" />
          <p className='hidden lg:block text-2xl font-bold ml-[-0.5rem] text-gray-900'>olveAtlas</p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative group text-gray-700 hover:text-accent transition-colors duration-300  cursor-pointer py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 p-2 focus:outline-none"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center py-10 space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl text-gray-800 hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;