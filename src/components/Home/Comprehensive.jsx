import React from 'react';
import { motion } from 'framer-motion';

const newData = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'State-of-the-Art Facility',
    description: 'Our facility spans over 18,000 square meters and is equipped with advanced technology for efficient recycling of ships, ensuring minimal environmental impact.',
    
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/KFCZk7y/homecard2.webp',
    title: 'ISO Certified Processes',
    description: 'We adhere to international standards, including ISO 9001, ISO 14001, and ISO 45001, demonstrating our commitment to quality and safety in every aspect of our operations.',
    
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/XWqXth6/homecard3.webp',
    title: 'Expert Team',
    description: 'Our skilled workforce is trained in best practices for ship recycling and waste management, ensuring that we achieve our sustainability goals with expertise and efficiency.',
    
  },
];
const newData1 = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Environmental Responsibility',
    description: 'We are committed to sustainable practices that minimize our ecological footprint. Our operations align with major international conventions and guidelines, ensuring that we contribute positively to global environmental efforts.',
    buttonText: 'Read More',
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Safety First',
    description: 'Our facility prioritizes safety for both our workers and the surrounding community. We implement stringent safety protocols and continuously train our staff to handle materials responsibly and safely.',
    buttonText: 'Read More',
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Proven Track Record',
    description: 'With a reputation as one of the finest ship recycling facilities in Bangladesh, we have successfully managed numerous projects, earning the trust of clients through our dedication to quality and compliance with industry standards.',
       buttonText: 'Read More',
  },
];

const Comprehensive = () => {
  return (
    <div className="w-screen bg-[#77dac6] py-10">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
               Comprehensive Ship Recycling Services
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              Offering a full suite of services tailored to meet the needs of the shipping industry while safeguarding the environment.
            </motion.p>
        
      </div>


      
      <div className="flex flex-col space-y-8 mx-4 sm:mx-10 md:mx-32 lg:mx-40 mt-10 ">
        {newData.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row items-center mx-8 ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }  rounded-lg overflow-hidden  p-4`}
          >
            <motion.img
              src={card.image}
              alt={`Description ${card.id}`}
              className="w-full md:w-1/6 object-cover"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="p-4 flex-1">
              <motion.h2
                className="text-2xl md:text-xl font-sans mb-4 font-bold"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {card.title}
              </motion.h2>
              <motion.p
                className="text-gray-600 text-md md:text-lg"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {card.description}
              </motion.p>
            </div>
          </div>
        ))}
      </div>

<div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
              Your Trusted Partner in Ship Recycling
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
             Discover the advantages of choosing ASBRL for your ship recycling requirements.
            </motion.p>
        
      </div>
      

      {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        

      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:mx-28 mt-10">
  {newData1.map((card) => (
    <motion.div
      key={card.id}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center h-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col items-center">
        <motion.img
          src={card.image}
          alt={card.title}
          className="w-full h-48 object-cover rounded-t-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.h2
          className="text-base font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {card.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mt-2 text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {card.description}
        </motion.p>
      </motion.div>
      <motion.button
        className="bg-[#1c6758] text-white px-2  py-2 rounded-md hover:bg-[#0f493e] font-serif mt-4 self-stretch text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {card.buttonText}
      </motion.button>
    </motion.div>
  ))}
</div>



    </div>
  );
};

export default Comprehensive;

