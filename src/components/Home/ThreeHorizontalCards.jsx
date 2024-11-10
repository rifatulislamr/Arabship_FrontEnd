import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/p2fQBJR/state-of-the-art.jpg',
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

const HomeCardList = () => {
  return (
    <div className="flex flex-col space-y-8 mt-10 mx-auto  md:mx-32 lg:mx-64  mb-10 ">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden "
        >
          <motion.img
            src={card.image}
            alt={`Description ${card.id}`}
            className="w-full lg:h-96 md:w-2/4 md:h-72 object-cover rounded-md"
            initial={{ opacity: 0, y: 100 }} // Start state
            whileInView={{ opacity: 1, y: 0 }} // End state when in view
            transition={{ duration: 0.5 }} // Animation duration
            viewport={{ once: true }} // Trigger animation once
          />
          <div className="p-4 flex-1">
            <motion.h2
              className="text-2xl md:text-4xl lg:5xl font-serif mb-4"
              initial={{ opacity: 0, y: 100 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              {card.title}
            </motion.h2>
            <motion.p
              className="text-gray-600 text-md lg:text-lg"
              initial={{ opacity: 0, y: 100 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              {card.description}
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCardList;
