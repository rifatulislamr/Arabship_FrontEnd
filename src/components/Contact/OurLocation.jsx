import React from 'react'
import { motion } from 'framer-motion';


const newData1 = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Foundation of Excellence',
    description: 'Founded on December 15, 2020, Arab Shipbreaking and Recycling Limited emerged from a vision to redefine ship recycling in Bangladesh. With a commitment to environmental sustainability, our facility was established to meet the growing demand for responsible ship dismantling and waste management.',
    buttonText: 'Read More',
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/KFCZk7y/homecard2.webp',
    title: 'Commitment to Sustainability',
    description: 'ASBRL prioritizes safe and environmentally sound practices, ensuring that our operations adhere to international standards. We have implemented a robust Integrated Management System compliant with ISO certifications, positioning us as a leader in green ship recycling and waste management.',
    buttonText: 'Read More',
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/XWqXth6/homecard3.webp',
    title: 'Rapid Growth and Innovation',
    description: 'Since our inception, ASBRL has rapidly expanded its capabilities, achieving an impressive annual recycling capacity of 150,000 MT. Our innovative approaches and dedication to quality have earned us recognition as one of the finest ship recycling facilities in Bangladesh.',
       buttonText: 'Read More',
  },
];

const OurLocation = () => {
  return (
    <div className="w-screen bg-[#c7f0e8] py-10">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
            Our Location
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
          Find us easily with the following details.
            </motion.p>
        
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mx-4 lg:mx-28 mt-10">
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
 
  )
}

export default OurLocation