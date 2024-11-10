import React from 'react';
import HomeCardList from '../components/Home/ThreeHorizontalCards';
import Comprehensive from '../components/Home/Comprehensive';
import Navbar from '../components/Navbar';


const Home = () => {
  return(

   <div className='space-y-4'>
     <Navbar/>
   
     
      <div className='mx-14'>
        <HomeCardList />
       
      </div>
       <Comprehensive/>
    
    
    </div>

  
  );
};

export default Home;
