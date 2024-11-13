import React from 'react';
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    image: 'https://i.ibb.co/PGwHTsq/contactcoverimg.jpg',
    title: 'Ambassador Visit to Arab Shipyard and Recycling Limited',
    date: 'On December 31, 2024',
    description: 'This article explores the cutting-edge technologies that are revolutionizing the shipbreaking industry, improving safety, and environmental impact.',
  },
  // You can add more cards here with different descriptions.
];

const RecentShip = () => {
  return (
    <div className='mx-4 lg:mx-40 lg:mb-40 mb-20 mt-10'>
      <div className='grid gap-10 lg:gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {cardData.map((card) => (
          <div
            key={card.id}
            className='relative overflow-hidden rounded-lg w-4/5 lg:h-[160%] mx-auto hover:brightness-150 hover:scale-105 duration-1000'
          >
            {/* Use Link to wrap the image and text for navigation */}
            <Link to={`/news-details/${card.id}`} className='block'>
              {/* Full Card as Image */}
              <img
                src={card.image}
                alt={card.title}
                className='w-full h-full object-cover '
              />

              {/* Dark Overlay for Text Visibility */}
              <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-start items-end p-5'>
                <div className='text-white text-start'>
                  <h3 className='m-0 text-xl sm:text-2xl md:text-2xl lg:text-xl'>{card.title}</h3>
                  <p className='ml-2 m-0 text-sm sm:text-base md:text-lg lg:text-sm'>{card.date}</p>

                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentShip;




