import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if the screen is mobile size

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Handle link click to set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isOpen) toggleSidebar(); // Close sidebar on link click for mobile
  };

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 490) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Update mobile state on resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);


  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]); // Trigger on route path change



  return (
    <div className="relative h-screen overflow-hidden bg-[#c7f0e8]">
      {/* Cover Image Section */}
      <div
        className="absolute inset-0 h-[80vh] bg-cover bg-no-repeat brightness-95"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/Lz9N8Bz/servicecover.jpg')", // Replace with your image URL
          backgroundPosition: 'center', // Center the image
          backgroundSize: 'cover', // Ensure the image covers the area
          backgroundAttachment: 'fixed',
          
        }}
      >
       {/* Hamburger Icon */}
<button
  onClick={toggleSidebar}
  className="absolute top-4 left-4 z-50 text-white bg-transparent p-2 rounded-md"
  
>
  
  <FaBars size={24} />
</button>


        {/* Title and Contact Button */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
         <motion.h1
      className="text-3xl md:text-4xl mb-4 font-serif mt-20 text-center bg-black bg-opacity-10 p-4 rounded-3xl text-white font-bold border-4 border-hidden border-gray-200"
      initial={{ opacity: 0, y: 100 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 0.7 }} // Animation duration
      viewport={{ once: true }} // Trigger animation once
    >
              Comprehensive Services
    </motion.h1>
          {/* Framer Motion Contact Button */}
           <motion.div
          initial={{ opacity: 0, y: 50 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state when in view
      transition={{ duration: 0.5 }} // Animation duration
      viewport={{ once: true }} // Trigger animation once
       whileHover={{ scale: 1.2 }}
          >
           <p>Dedicated to Sustainable Ship Recycling and Waste Management</p>
          </motion.div>
        </div>
      </div>

      {/* Sidebar for medium and large screens */}
      <div
        className={`hidden md:block fixed top-0 left-0 h-screen w-64 bg-white text-black p-4 transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute  top-4 right-4 text-black mt-16"
        >
          <FaTimes size={24} />
        </button>

        <nav className="flex flex-col space-y-4 my-16 font-serif">
          {['/',  '/about','/services', '/news', '/contact'].map((link) => (
            <Link
              to={link}
              key={link}
              className={`hover:text-green-400 ${activeLink === link ? 'text-green-500 font-bold' : ''}`}
              onClick={() => handleLinkClick(link)}
            >
              {link === '/' ? 'Home' : link.charAt(1).toUpperCase() + link.slice(2)}
            </Link>
          ))}
        </nav>
      </div>

      {/* Full-screen sidebar for small screens */}
      {/* Sidebar */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-full bg-white text-black transform ${
    isOpen ? 'translate-y-0' : '-translate-y-full'
  } transition-transform duration-700 ease-in-out overflow-y-auto`}
>
  {/* Close Button */}
  <div className="fixed top-4 right-4">
    <button onClick={toggleSidebar} className="text-black mt-16 border-2 rounded-full p-2">
      <FaTimes size={24} />
    </button>
  </div>

  {/* Navigation Links */}
  <nav className="flex flex-col space-y-4 my-8 font-serif pt-16 p-4">
    {['/',  '/about','/services', '/news', '/contact'].map((link) => (
      <Link
        to={link}
        key={link}
        className={`hover:text-green-400 ${activeLink === link ? 'text-green-500 font-bold' : ''}`}
        onClick={() => handleLinkClick(link)}
      >
        {link === '/' ? 'Home' : link.charAt(1).toUpperCase() + link.slice(2)}
      </Link>
    ))}
  </nav>
</div>


      {/* Navbar visible when scrolled on md and lg screens */}
     {/* Navbar visible when scrolled on md and lg screens */}
      {(
       <div className={`fixed top-0 left-0 w-full bg-white transition-transform duration-500 z-10 ${isScrolled ? 'translate-y-0' : '-translate-y-full'} shadow-2xl`}>
  <nav className="relative flex items-center p-6">
    {/* Hamburger Icon on the Left */}
    <button onClick={toggleSidebar} className="z-20">
      <FaBars size={20} />
    </button>

    {/* Centered Text */}
    <span className="absolute left-1/2 transform -translate-x-1/2 lg:text-lg md:text-sm sm:text-xs font-semibold">
      Arab Shipbreaking And Recycling Limited
    </span>
  </nav>
</div>


      )}
    </div>
  );
};

export default ServicesNavbar;
