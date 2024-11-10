// import React from 'react'
// import { motion } from 'framer-motion';




// const OurLocation = () => {
//   return (
//     <div className="w-screen bg-[#c7f0e8] py-10">
//         <div className="flex flex-col justify-center items-center max-w-7xl mx-auto mb-4">
//         <motion.h2
//                 className="mt-20 font-serif text-4xl text-center mb-6"
//                 initial={{ opacity: 0, y: 100 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//               >
//             Our Location
//               </motion.h2>
//         <motion.p
//               className="text-gray-600 text-base md:text-xl text-center"
//               initial={{ opacity: 0, y: 50 }} // Start state
//               whileInView={{ opacity: 1, y: 0 }} // End state when in view
//               transition={{ duration: 0.5 }} // Animation duration
//               viewport={{ once: true }} // Trigger animation once
//             >
//           Find us easily with the following details.
//             </motion.p>
        
//       </div>
//       {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 mx-4 lg:mx-28 mt-10">
//   {newData1.map((card) => (
//     <motion.div
//       key={card.id}
//       className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between items-center h-full"
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//     >
//       <motion.div className="flex flex-col items-center">
//         <motion.img
//           src={card.image}
//           alt={card.title}
//           className="w-full h-48 object-cover rounded-t-lg"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         />
//         <motion.h2
//           className="text-base font-semibold mt-4"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           {card.title}
//         </motion.h2>
//         <motion.p
//           className="text-gray-600 text-center mt-2 text-sm"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           {card.description}
//         </motion.p>
//       </motion.div>
//       <motion.button
//         className="bg-[#1c6758] text-white px-2  py-2 rounded-md hover:bg-[#0f493e] font-serif mt-4 self-stretch text-center"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         {card.buttonText}
//       </motion.button>
//     </motion.div>
//   ))}
// </div> */}
//     <section className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24 rounded-lg shadow-md">
//       <div className="text-center mb-8">
        
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="text-center mb-4">
//           <h3 className="text-xl font-semibold text-gray-700">Address</h3>
//           <p className="text-gray-500">
//             Arab Shipyard and Recycling Limited<br />
//             Your Full Address Here
//           </p>
//         </div>
//         <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-6">
//           <a
//             href="tel:+8801876980021"
//             className="text-white bg-blue-600 px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Call Us
//           </a>
//           <a
//             href="mailto:rifat.islam.cse@gmail.com"
//             className="text-white bg-green-600 px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
//           >
//             Email Us
//           </a>
//           <a
//             href="https://www.google.com/maps/search/atlas+rangs+plaza+office/@22.3256459,91.811879,17z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white bg-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
//           >
//             Find Us on the Map
//           </a>
//         </div>
//       </div>
//     </section>

//     </div>
 
//   )
// }

// export default OurLocation


// import React from 'react';
// import { motion } from 'framer-motion';

// const OurLocation = () => {
//   return (
//     <div className="w-screen bg-gradient-to-b from-[#c7f0e8] to-[#a8d5c8] py-10">
//       <div className="flex flex-col justify-center items-center max-w-7xl mx-auto mb-4">
//         <motion.h2
//           className="mt-20 font-serif text-5xl font-bold text-center text-gray-800 mb-6"
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Our Location
//         </motion.h2>
//         <motion.p
//           className="text-gray-700 text-lg md:text-xl text-center max-w-2xl"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Discover our office and find us easily with the following contact details.
//         </motion.p>
//       </div>

//       <section className="bg-white py-12 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg mx-auto max-w-4xl">
//         <div className="text-center mb-8">
//           <motion.h3
//             className="text-2xl font-bold text-gray-800 mb-4"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Our Office
//           </motion.h3>
//           <p className="text-gray-500">
//             Arab Shipyard and Recycling Limited<br />
//             Your Full Address Here
//           </p>
//         </div>
        
//         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
//           <motion.a
//             href="tel:+8801876980021"
//             className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Call Us
//           </motion.a>
//           <motion.a
//             href="mailto:rifat.islam.cse@gmail.com"
//             className="text-white bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Email Us
//           </motion.a>
//           <motion.a
//             href="https://www.google.com/maps/search/atlas+rangs+plaza+office/@22.3256459,91.811879,17z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 rounded-full shadow-lg hover:from-gray-800 hover:to-black transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Find Us on the Map
//           </motion.a>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default OurLocation;

import React from 'react';
import { motion } from 'framer-motion';

const OurLocation = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-[#c7f0e8] to-[#a8d5c8] py-10 ">
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto mb-4">
        <motion.h2
          className="mt-20 font-serif text-5xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Location
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg md:text-xl text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Discover our office and find us easily with the following contact details.
        </motion.p>
      </div>

      <section className="bg-white py-12 px-6 md:px-12 lg:px-24 rounded-lg shadow-lg mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <motion.h3
            className="text-2xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Office
          </motion.h3>
          <p className="text-gray-500">
            Arab Shipyard and Recycling Limited<br />
            Your Full Address Here
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <motion.a
            href="tel:+8801876980021"
            className="text-white bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Call Us
          </motion.a>
          <motion.a
            href="mailto:rifat.islam.cse@gmail.com"
            className="text-white bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Email Us
          </motion.a>
          <motion.a
            href="https://www.google.com/maps/search/atlas+rangs+plaza+office/@22.3256459,91.811879,17z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 rounded-full shadow-lg hover:from-gray-800 hover:to-black transition"
            whileHover={{ scale: 1.05 }}
          >
            Find Us on the Map
          </motion.a>
        </div>

        <section className="mt-12 bg-gray-100 py-8 px-6 rounded-lg shadow-lg">
          <motion.h3
            className="text-xl font-semibold text-gray-800 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Ambassador Visit to Arab Shipyard and Recycling Limited
          </motion.h3>
          <p className="text-gray-700 text-lg text-center mt-4">
            On December 31, 2024, the Norwegian Ambassador to Bangladesh, <span className="font-bold">Mr. Håkon Arald Gulbrandsen</span>, visited Arab Shipyard and Recycling Limited. He was accompanied by Deputy Head of Mission <span className="font-bold">Ms. Marianne Rave Knaevalsrud</span> and <span className="font-bold">Mr. Morshed Ahmed</span>, Senior Advisor at the Royal Norwegian Embassy. During the visit, Ambassador Gulbrandsen explored the shipyard's facilities and expressed his satisfaction with the infrastructure and services provided by the shipyard.
          </p>
        </section>
      </section>
    </div>
  );
}

export default OurLocation;

