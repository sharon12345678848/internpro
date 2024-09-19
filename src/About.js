import React from 'react';
import { Card } from './Card'; // Ensure Card component is imported correctly
import MissionImg from './images/mission.jpeg'; // Check the path
import VisionImg from './images/vision.jpeg';
import ValuesImg from './images/values.jpeg'; // Ensure values.jpeg exists

import './about.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="card-container">
        <Card 
          imgSrc={MissionImg}
          imgAlt="Our Mission"
          text="We are dedicated to tackling the issues of food waste and hunger simultaneously. 
                Our mission is to create a sustainable solution where surplus food can be donated to those in need. 
                We connect generous donors with orphanages and charitable homes, ensuring that no food goes to waste 
                and every meal counts. By reducing food waste and providing for the less fortunate, we strive to make 
                a meaningful impact on our community."
        />
        <Card 
          imgSrc={VisionImg}
          imgAlt="Our Vision"
          text="Our vision is to create a world where no one has to suffer from hunger, 
                and where food waste is a thing of the past. We aim to achieve this by building a 
                community of like-minded individuals and organizations who share our passion for 
                reducing food waste and feeding the hungry. Together, we can make a difference and 
                create a better future for all."
        />
        <Card 
          imgSrc={ValuesImg}
          imgAlt="Our Values"
          text="At Food Waste Management, we believe in the importance of 
                integrity, compassion, and sustainability. We are committed to operating with 
                transparency and accountability, and to always putting the needs of our 
                beneficiaries first. We strive to be environmentally responsible and to 
                minimize our own waste and carbon footprint."
        />
      </div>
    </div>
  );
};

export default About;
