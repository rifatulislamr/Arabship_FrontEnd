import React from 'react';
import { useParams } from 'react-router-dom';
import ContactNavbar from './NewsNav';

const cardData = [
    {
        id: 1,
        image: 'https://i.ibb.co/PGwHTsq/contactcoverimg.jpg',
        title: 'Ambassador Visit to Arab Shipyard and Recycling Limited',
        date: 'On December 31, 2024',
        content: 'On December 31, 2024, the Norwegian Ambassador to Bangladesh, Mr. Håkon Arald Gulbrandsen, visited Arab Shipyard and Recycling Limited. He was accompanied by Deputy Head of Mission Ms. Marianne Rave Knaevalsrud and Mr. Morshed Ahmed, Senior Advisor at the Royal Norwegian Embassy. During the visit, Ambassador Gulbrandsen explored the shipyard`s facilities and expressed his satisfaction with the infrastructure and services provided by the shipyard.',
    },
    // You can add more cards here with different content.
];

const NewsDetails = () => {
    const { id } = useParams(); // Get the news id from the URL

    // Find the corresponding news article based on the `id`
    const newsItem = cardData.find((item) => item.id === parseInt(id));

    if (!newsItem) {
        return <div>News not found</div>;
    }

    return (
        <div>
            <ContactNavbar />

            {/* News Cover Image */}
            <div className="p-4 lg:mr-10   relative w-full h-[50vh] rounded-lg">
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover mt-10 mb-4 "
                />
            </div>

            {/* News Title, Date, and Content */}
            <div className="px-4 lg:px-40 mt-10">
                <h1 className="text-3xl font-bold">{newsItem.title}</h1>
                <p className="text-lg text-gray-600 mt-2">{newsItem.date}</p>
                <div className="mt-6 text-lg text-gray-800">
                    <p>{newsItem.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
