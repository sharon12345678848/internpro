import React, { useState, useEffect } from 'react';
import './style.css';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/img1.jpg`,
      captionTitle: 'Welcome to Our Website',
      captionText: 'Discover our amazing features and content.',
      btnText: 'Donate',
      btnLink: './FormPage',
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/img2.jpg`,
      captionTitle: 'Explore Our Services',
      captionText: 'We provide a wide range of solutions tailored for you.',
      btnText: 'Volunteer',
      btnLink: './volunteer',
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/img3.jpg`,
      captionTitle: 'Join Our Community',
      captionText: 'Be part of something greater and connect with others.',
      btnText: 'Organization',
      btnLink: './organisation',
    },
    {
      imgSrc: `${process.env.PUBLIC_URL}/images/img4.jpg`,
      captionTitle: 'Join Our Community',
      captionText: 'Be part of something greater and connect with others.',
      btnText: 'Organization',
      btnLink: './organisation',
    },
  ];

  // Change slides automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div id="carouselExample" className="carousel slide carousel-fade">
      {/* Carousel Inner */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <img
              src={slide.imgSrc}
              className="d-block w-100"
              alt={slide.captionTitle}
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>{slide.captionTitle}</h1>
              <p>{slide.captionText}</p>
              <a href={slide.btnLink} className="btn">
                {slide.btnText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
