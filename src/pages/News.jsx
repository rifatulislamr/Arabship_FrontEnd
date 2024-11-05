import React from 'react';
import NewsNavbar from '../components/News/NewsNav';
import RecentShip from '../components/News/RecentShip';
import Sustainable from '../components/News/Sustainable';

const News = () => {
  return (
     <div>
      <NewsNavbar/>
       <RecentShip/>
      <Sustainable/>
     
     </div>
  );
};

export default News;
