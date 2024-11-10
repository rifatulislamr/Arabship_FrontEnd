import React from 'react';

const cardData = [
  {
    id: 1,
    image: 'https://i.ibb.co.com/SKGhmCj/homecard1.webp',
    title: 'Innovative Technologies in Shipbreaking',
    date: 'November 4, 2024',
  },
  {
    id: 2,
    image: 'https://i.ibb.co.com/KFCZk7y/homecard2.webp',
    title: 'Partnerships for Sustainable Practices',
    date: 'November 4, 2024',
  },
  {
    id: 3,
    image: 'https://i.ibb.co.com/XWqXth6/homecard3.webp',
    title: 'ASBRL Achieves ISO Certification',
    date: 'November 4, 2024',
  },
];

const RecentShip = () => {
  return (
    <div className='mx-4  lg:mx-40  lg:mb-40 mb-20 mt-10'>
      <div 
        className='grid gap-10 lg:gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {cardData.map((card) => (
          <div 
            key={card.id} 
            className='relative overflow-hidden rounded-lg w-4/5 lg:h-[160%] mx-auto'
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


