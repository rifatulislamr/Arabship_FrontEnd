import React from 'react';
import { motion } from 'framer-motion';

const newData = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/p2fQBJR/state-of-the-art.jpg',
    title: 'State-of-the-Art Facility',
    description: 'Our facility, covering over 18,000 square meters, is equipped with state-of-the-art technology to enable efficient and environmentally responsible ship recycling. We utilize specialized processes to handle hazardous materials, oily substances, ferrous, and non-ferrous materials separately, ensuring safety and compliance. Our facility is fully equipped to dismantle a range of vessels, including oil tankers, roll-on/roll-off ships, container ships, and various other types, adhering to the highest standards of safety and sustainability.',
    
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/KFCZk7y/homecard2.webp',
    title: 'ISO Certified Processes',
    description:'We are an ISO-certified facility, holding ISO 9001, ISO 14001, and ISO 45001 certifications, reflecting our commitment to quality, environmental stewardship, and workplace safety in every aspect of our operations. Additionally, we adhere to the SKC 2009 standard for shipbreaking, ensuring compliance with stringent international guidelines for responsible and safe dismantling practices.',
    
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
    image: 'https://i.ibb.co.com/GQPsQs7/environment-res.jpg',
    title: 'Environmental Responsiblity',
    description: 'At our facility, we adhere strictly to government rules and regulations for ship recycling. Upon the ship&apos;s arrival, we conduct an Inventory of Hazardous Materials (IHM) to identify and catalog any potential risks. Using the IHM data, we then develop a Ship Recycling Plan (SRP) and an Environmental Management Plan (EMP), which are submitted to the Ministry for approval prior to the recycling process. We prioritize worker and environmental safety by taking stringent precautions to minimize hazardous material exposure. Our Integrated Management System (IMS) policy mandates regular training for all workers and employees, provided both by external experts and our in-house teams.Once the IHM is completed, all identified hazardous materials are carefully removed and securely stored in our dedicated hazardous material storage facilities, which are approved by the Department of Environment. From there, materials are transported to government-approved Treatment, Storage, and Disposal Facilities (TSDF) in compliance with regulatory standards.',
    buttonText: 'Read More',
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/xh187vf/work-facilities.jpg',
    title: 'Employee Facilities',
    description: 'Our commitment to employee well-being is reflected in the comprehensive facilities and benefits we provide. All employees receive wages in full compliance with government labor laws. We offer access to medical facilities and ensure that each worker is equipped with job-specific personal protective equipment to promote safety. Additionally, we provide recreational areas, access to pure drinking water, and a range of training opportunities, both internal and external, to support skill development and ensure a safe, fulfilling work environment.',
    buttonText: 'Read More',
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/zrfMSBy/Safety-First.jpg',
    title: 'Safety First',
    description: 'Our facility is dedicated to maintaining the highest safety standards through comprehensive protective measures and protocols. Access to the site is strictly restricted to individuals wearing appropriate safety gear. All office staff, workers, and visitors are provided with basic safety familiarization before entering the yard, with visitors receiving a specific briefing to ensure safe conduct. Risks are managed proactively through detailed risk assessment analyses, both for the facility and incoming vessels. We conduct regular mock drills as part of an established plan, reinforcing emergency preparedness for all staff. Our fire safety protocols include strategically placed fire extinguishers, dedicated fire pumps with water tanks, and clearly marked hydrants to enable a rapid response. Emergency evacuation routes are available throughout the facility to ensure swift and safe egress in case of an incident. Additionally, we follow specific operational control procedures (OCPs) tailored to various job functions, ensuring that all tasks are performed under strict safety controls and regulations.',
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
              className="text-gray-600 text-base md:text-xl text-center mx-3"
              initial={{ opacity: 0, y: 50 }} // Start state
              whileInView={{ opacity: 1, y: 0 }} // End state when in view
              transition={{ duration: 0.5 }} // Animation duration
              viewport={{ once: true }} // Trigger animation once
            >
              Offering a full suite of services tailored to meet the needs of the shipping industry while safeguarding the environment.
            </motion.p>
        
      </div>


      
      <div className="flex flex-col space-y-10  md:mx-32 lg:mx-20 mt-10 mx-auto">
        {newData.map((card, index) => (
          <div
            key={card.id}
            className={`flex flex-col md:flex-row items-center mx-auto lg:mx-20  ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }  rounded-lg overflow-hidden  p-4`}
          >
            <motion.img
              src={card.image}
              alt={`Description ${card.id}`}
              className="w-full md:w-1/6 object-cover "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            />
            <div className="p-4 flex-1 ">
              <motion.h2
                className="text-2xl md:text-xl font-sans mb-4 font-semibold"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {card.title}
              </motion.h2>
              <motion.p
                className="text-gray-600 text-md md:text-lg"
                initial={{ opacity: 0, y: 50 }}
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
                className="mt-20 font-serif text-4xl text-center mb-6 "
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
              Your Trusted Partner in Ship Recycling
              </motion.h2>
        <motion.p
              className="text-gray-600 text-base md:text-xl text-center mx-3"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mx-6 lg:mx-32 mt-10">
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
          className="w-full h-52 object-cover rounded-t-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.h2
          className="lg:text-xl text-2xl font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {card.title}
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mt-2 lg:text-md md:text-lg text-lg"
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

