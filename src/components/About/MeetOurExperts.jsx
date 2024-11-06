import React from 'react'
import { motion } from 'framer-motion';



const newData = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Leadership',
    description: 'Our leadership team comprises seasoned professionals with extensive experience in ship recycling and environmental management, guiding ASBRL towards achieving its strategic goals.',
    
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




const MeetOurExperts = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
               Meet Our Experts
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              Driven by passion and expertise
            </motion.p>
        
      </div>


       <div className="flex flex-col space-y-8 mx-4 sm:mx-10 md:mx-32 lg:mx-28 mt-10 ">
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
              className="w-full md:w-1/4 object-cover"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="p-4 flex-1">
              <motion.h2
                className="text-2xl md:text-xl font-sans mb-2 font-semibold"
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

    </div>
  )
}

export default MeetOurExperts