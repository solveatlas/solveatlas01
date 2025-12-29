import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import StatusModal from '../utils/StatusModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState({ open: false, error: false, msg: '' });

  //! Validation for the Contact form
  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here

    if (!validate()) return;

    //! adding the backend api to send the mail and store in the database
    try {
      setLoading(true)

      const result = await axios.post(
        "https://solveatlasapi.vercel.app/api/v1/contactmail",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setModal({
        open: true,
        error: false,
        msg: 'Your message has been received. We will get back to you shortly!'
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});

    } catch (err) {
      setModal({
        open: true,
        error: true,
        msg: err.response?.data?.message || 'Something went wrong. Please check your connection and try again.'
      });
    } finally {
      setLoading(false)
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-5 sm:px-8 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-4 font-arvo">Get In Touch</h2>
          <p className="text-gray-600 max-w-xl mx-auto font-open_sans">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-secondary/50 p-5 sm:p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-arvo">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className="bg-accent/20 p-3  text-accent">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1 font-arvo">Email Us</h4>
                    <p className="text-gray-600 font-open_sans">solveatlas.agency@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className="bg-accent/20 p-3  text-accent">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1 font-arvo">Call Us</h4>
                    <p className="text-gray-600 font-open_sans">+977 9826197196 / 9762748494</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-4">
                  <div className="bg-accent/20 p-3  text-accent">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1 font-arvo">Visit Us</h4>
                    <p className="text-gray-600 font-open_sans">Machapokhari, Kathmandu</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-4 sm:p-8 shadow-lg border border-gray-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full bg-white border border-gray-300 px-2 sm:px-4 py-3 text-gray-900 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors  ${errors.name ? "border-red-500" : "border-gray-300"}
`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full bg-white border px-2 sm:px-4 py-3 text-gray-900
                    ${errors.email ? "border-red-500" : "border-gray-300"}
                     focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent`}

                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className={`w-full bg-white border px-2 sm:px-4 py-3 text-gray-900
                ${errors.message ? "border-red-500" : "border-gray-300"}
                focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent`}

                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 px-8 text-sm transform hover:scale-105 transition-all duration-300 
                flex items-center justify-center gap-2 group 
                 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-accent hover:bg-gray-800 text-white"}`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && (
                  <FaPaperPlane />
                )}
              </button>

              {/* Status Modal */}
              <StatusModal
                isOpen={modal.open}
                isError={modal.error}
                title={modal.error ? "Submission Failed" : "Message Sent"}
                message={modal.msg}
                onClose={() => setModal({ ...modal, open: false })}
              />

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
