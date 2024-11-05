import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white text-center py-20 mt-8  shadow-2xl">
      <motion.div
          initial={{ opacity: 0, y: 50 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: true }} // Trigger animation once
       whileHover={{ scale: 1.2 }}
          >
            <p className="text-gray-600">
        ©2024 - Proudly built with Strikingly
      </p>
          </motion.div>
     
    </footer>
  );
};

export default Footer;
