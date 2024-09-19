// Home.js
import React from 'react';
import Carousel from './Carousel';
import WhoWeAre from './who';
//import ContactUs from './ContactUs';

const Home = () => {
    return (
        <>
       {/* <Header/>*/}
        <Carousel />
        <WhoWeAre/>
      
        <div> 
            
            <nav>
{/*
                <Link to="/about">About</Link> | 
                <Link to="/collab">Collaboration</Link> | 

*/}                
            </nav>

        </div>
        </>
    );
};

export default Home;
