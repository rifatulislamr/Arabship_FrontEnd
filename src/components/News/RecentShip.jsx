// import React from 'react';
// import { motion } from 'framer-motion';

// const cardData = [
//   {
//     id: 1,
//     image: './public/images/homecard1.webp',
//     title: 'Innovative Technologies in Shipbreaking',
//     date: 'November 4, 2024',
//   },
//   {
//     id: 2,
//     image: './public/images/homecard2.webp',
//     title: 'Partnerships for Sustainable Practices',
//     date: 'November 4, 2024',
//   },
//   {
//     id: 3,
//     image: './public/images/homecard3.webp',
//     title: 'ASBRL Achieves ISO Certification',
//     date: 'November 4, 2024',
//   },
// ];

// const RecentShip = () => {
//   return (
//     <div className='lg:mx-10 mb-40 lg:p-20'
//       style={{ 
//         display: 'grid', 
//         gap: '5px', 
        
//       }}
//     >
//       {cardData.map((card) => (
//         <motion.div 
//           key={card.id} 
//           whileHover={{ scale: 1.05 }} 
//           whileTap={{ scale: 0.95 }} 
//           initial={{ opacity: 0, y: 20 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//           style={{
//             position: 'relative',
//             overflow: 'hidden',
//             borderRadius: '2px',
//             width: '80%',        // Set card width to 80%
//             height: '160%',      // Set card height to be more than width
//             margin: '0 auto',    // Center the card
//           }}
//         >
//           {/* Full Card as Image */}
//           <img
//             src={card.image}
//             alt={card.title}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />

//           {/* Dark Overlay for Text Visibility */}
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
//               display: 'flex',
//               justifyContent: 'start',
//               alignItems: 'flex-end',
//               paddingBottom: '20px',
//               transition: 'background-color 0.3s',
//             }}
//           >
//             <div style={{ color: 'white', textAlign: 'start' }}>
//               <h3 style={{ margin: '5px', fontSize: '24px' }}>{card.title}</h3>
//               <p className='ml-20' style={{ margin: '5px', fontSize: '16px'}}>{card.date}</p>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default RecentShip;





import React from 'react';

const cardData = [
  {
    id: 1,
    image: './public/images/homecard1.webp',
    title: 'Innovative Technologies in Shipbreaking',
    date: 'November 4, 2024',
  },
  {
    id: 2,
    image: './public/images/homecard2.webp',
    title: 'Partnerships for Sustainable Practices',
    date: 'November 4, 2024',
  },
  {
    id: 3,
    image: './public/images/homecard3.webp',
    title: 'ASBRL Achieves ISO Certification',
    date: 'November 4, 2024',
  },
];

const RecentShip = () => {
  return (
    <div className='mx-10 mb-40 lg:p-16'>
      <div 
        className='grid gap-32 lg:gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className='relative overflow-hidden rounded-lg w-4/5 h-[160%] mx-auto'
          >
            {/* Full Card as Image */}
            <img
              src={card.image}
              alt={card.title}
              className='w-full h-full object-cover'
            />

            {/* Dark Overlay for Text Visibility */}
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-start items-end p-5'>
              <div className='text-white text-start'>
                <h3 className='m-0 text-xl sm:text-2xl md:text-2xl lg:text-xl'>{card.title}</h3>
                <p className='ml-2 m-0 text-sm sm:text-base md:text-lg lg:text-sm'>{card.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentShip;


