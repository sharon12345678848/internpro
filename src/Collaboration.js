import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import your CSS file
import Navbar from './Navbar';

const Collaboration = () => {
    <Navbar/>
    const [visible, setVisible] = useState({});

    const toggleParagraphVisibility = (index) => {
        setVisible((prevVisible) => ({
            ...prevVisible,
            [index]: !prevVisible[index],
        }));
    };

    const sections = [
        {
            title: "Volunteer",
            description: "You can touch hearts, spread smiles and make life more meaningful for the underprivileged. It only needs is a bit of your time.",
        },
        {
            title: "Donate",
            description: "Help us in fulfilling wishes and making dreams come true by contributing for a cause. Your donations will go a long way in changing someone's life.",
        },
        {
            title: "Spread the word",
            description: "Tell your friends and family about Wishes and Blessings and promote us on your social media and networks.",
        },
        {
            title: "Corporate Partner",
            description: "We tailor all our projects and collaborations to accommodate the requirements of our corporate partners and promote creative ideas for change. Join hands with us to implement your CSR activities.",
        },
    ];

    return (
        <div>
            <nav>
   
</nav>


            <h1>How can you collaborate with us?</h1>
            <div className="collab">
                {sections.map((section, index) => (
                    <div key={index} className="c1">
                        <div className="view">
                            <h2>{section.title}</h2>
                            <button
                                className="toggle-btn"
                                type="button"
                                onClick={() => toggleParagraphVisibility(index)}
                            >
                                {visible[index] ? 'Hide Details' : 'Show Details'}
                            </button>
                        </div>
                        <div className={`hide ${visible[index] ? 'visible' : ''}`}>
                            <hr />
                            <p>{section.description}</p>
                            <button className="btn" type="button">
                                Click here for more details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collaboration;
