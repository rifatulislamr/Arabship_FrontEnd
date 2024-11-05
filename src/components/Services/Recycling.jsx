import React from 'react'
import { motion } from 'framer-motion';


const newData = [
  {
    id: 1,
    
    description: 'At ASBRL, we prioritize the safety of our workforce and the surrounding environment. Our shipbreaking processes adhere to the highest safety standards, ensuring that all operations are conducted with minimal risk. We implement comprehensive training programs for our staff, equipping them with the skills and knowledge needed to navigate potentially hazardous situations. Regular safety audits and inspections further reinforce our commitment to a secure working environment.',
  },
  {
    id: 2,
   
    description: 'Our shipbreaking services are rooted in a commitment to environmental sustainability. We utilize advanced techniques to minimize waste and prevent pollution during the dismantling process. By employing eco-friendly methods, we ensure that all recyclable materials are handled responsibly, effectively reducing our carbon footprint and conserving natural resources. Our operations are designed to comply with international environmental standards.',
  },
  {
    id: 3,
 
    description: 'ASBRL specializes in the recovery of valuable metals from decommissioned vessels. Our state-of-the-art facilities enable us to efficiently extract ferrous and non-ferrous metals, which are then processed and prepared for reuse. This not only contributes to a circular economy but also helps reduce the demand for virgin materials. Our commitment to quality ensures that all recovered materials meet industry standards for reuse.',

  },
];



const Recycling = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto mt-10">
        <motion.h2
                className="mt-20 font-serif text-4xl text-center mb-6"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
        Efficient Recycling Process
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
          Transforming Waste into Valuable Resources
            </motion.p>
        
      </div>

        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 mx-28 mt-10">
  {newData.map((card) => (
    <motion.div
      key={card.id}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-start h-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col items-start">
        
        <motion.p
          className="text-gray-600 text-start mt-2 text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {card.description}
        </motion.p>
      </motion.div>
      
    </motion.div>
  ))}
</div> */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 lg:mx-28 mt-10">
  {newData.map((card, index) => (
    <motion.div
      key={card.id}
      className={`bg-white border-2 rounded-lg shadow-lg p-6 flex flex-col justify-between items-start h-full ${
        index === 2 ? 'lg:col-span-2 lg:w-1/2 lg:mx-auto' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div className="flex flex-col items-start">
        <motion.p
          className="text-gray-600 text-start mt-2 text-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {card.description}
        </motion.p>
      </motion.div>
    </motion.div>
  ))}
</div>





    </div>
  )
}

export default Recycling