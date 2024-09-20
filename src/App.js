// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';  // Ensure Home.js exists in the same directory
import About from './About';  // Ensure About.js exists in the same directory
import Collaboration from './Collaboration';  // Ensure Collaboration.js exists in the same directory
import ContactUs from './ContactUs';  // Ensure ContactUs.js exists in the same directory
import Navbar from './Navbar';
import FormPage from './FormPage';
import VolunteerForm from './Volunteer';
import Organisation  from './Organisation';
import Footer from './Footer';


const App = () => {
    return (
        <Router>
            
            <Navbar />
            
{/* <Header/> */}

            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collab" element={<Collaboration />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/formPage" element={<FormPage />} />
                <Route path="/volunteer" element={<VolunteerForm />} />
                <Route path="/Organisation" element={<Organisation />} />

            </Routes>
            <Footer/>
        </Router>
        
    );
};

export default App;
