import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <a href="#" className="flex items-center mb-2">
            <img src={logo} alt="SolveAtlas" className="h-10 w-auto" />
          </a>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} SolveAtlas. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-500 hover:text-accent transition-colors text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors text-xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-accent transition-colors text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
