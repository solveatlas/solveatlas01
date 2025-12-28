import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

const StatusModal = ({ isOpen, onClose, title, message, isError }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Card Animation */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 overflow-hidden"
          >
            {/* Top Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Icon Logic */}
              <div className={`p-3 rounded-full mb-4 ${isError ? 'bg-red-50' : 'bg-emerald-50'}`}>
                {isError ? (
                  <AlertCircle className="text-red-500" size={40} />
                ) : (
                  <CheckCircle2 className="text-emerald-500" size={40} />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 leading-tight">
                {title}
              </h3>
              
              <p className="mt-3 text-gray-600 leading-relaxed">
                {message}
              </p>

              <button
                onClick={onClose}
                className={`mt-8 w-full py-3 px-4 rounded-xl font-semibold text-white shadow-lg transition-all active:scale-95 ${
                  isError 
                    ? 'bg-red-500 hover:bg-red-600 shadow-red-200' 
                    : 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-200'
                }`}
              >
                {isError ? 'Try Again' : 'Awesome'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;