import React from 'react'
import { motion } from 'framer-motion';



const newData = [
  {
    id: 1,
    image: './public/images/homecard1.webp',
    title: 'Large Vessel Dismantling',
    description: 'Successfully dismantled a large container ship, utilizing environmentally friendly methods that minimized waste and maximized material recovery, setting a benchmark for future projects.',
    
  },
  {
    id: 2,
    image: './public/images/homecard2.webp',
    title: 'Hazardous Material Management',
    description: 'Implemented a comprehensive hazardous material management project that ensured the safe removal and disposal of toxic substances, safeguarding both our workers and the environment.',
    
  },
  {
    id: 3,
    image: './public/images/homecard3.webp',
    title: 'Community Engagement Initiatives',
    description: 'Conducted community engagement projects that focused on raising awareness about sustainable practices in ship recycling, fostering a culture of environmental responsibility among local stakeholders.',
    
  },
];



const OurImpectful = () => {
  return (
    <div className='w-screen bg-[#77dac6] '>
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
               Our Impactful Projects
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              Demonstrating excellence through experience
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

export default OurImpectful