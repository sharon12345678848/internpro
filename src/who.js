import React from 'react';
import './style.css';

function WhoWeAre() {
  return (
    <div className="who-we-are">
      <h1 className="title">WHO WE ARE?</h1>
      <p className="description">
        A mission to ‘inspire and empower dreams’, Wishes and Blessings is a registered NGO
        that has emerged as a unique platform for helping the underprivileged. We aim to spread blessings and fulfill
        wishes by linking beneficiaries with donors. We work across the spectrum of society surpassing age and gender
        barriers on diverse causes including education, health, skill development, and relief.
      </p>

      <div className="cards">
        {/* Our Story */}
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/images/mission.jpeg'} alt="Our Story" className="card-img" />
          <div className="card-content">
            <h3>Our Story</h3>
            <p>
              “An ambiguous mix of excitement and nervousness is what I recall to be the overwhelming sentiment when
              I first established Wishes and Blessings in April 2014.”
            </p>
            <a href="/our-story" className="read-more">Read More &#187;</a>
          </div>
        </div>

        {/* Our Vision */}
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/images/vision.jpeg'} alt="Our Vision" className="card-img" />
          <div className="card-content">
            <h3>Our Vision</h3>
            <p>
              Our vision is to build a world with equal opportunities where the word ‘underprivileged’ no longer exists...
            </p>
            <a href="/our-vision" className="read-more">Read More &#187;</a>
          </div>
        </div>

        {/* Our Values */}
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/images/values.jpeg'} alt="Our Values" className="card-img" />
          <div className="card-content">
            <h3>Our Values</h3>
            <p>
              Our core values include accountability, transparency, integrity, and personal involvement. We exercise these values in all our activities.
            </p>
            <a href="/our-values" className="read-more">Read More &#187;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
