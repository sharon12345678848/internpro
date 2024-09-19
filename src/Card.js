import React from 'react';
import './about.css'; // Import the CSS file for Card component

const Card = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={imgAlt} className="card-image" />
      <div className="card-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export { Card };
