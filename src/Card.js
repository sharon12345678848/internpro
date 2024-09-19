import React from 'react';

const Card = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-[1100px] flex items-center p-4">
      <img src={imgSrc} alt={imgAlt} className="w-[250px] h-[250px] rounded-md mr-4" />
      <p className="flex-1 text-gray-700">{text}</p>
    </div>
  );
};

export { Card };
