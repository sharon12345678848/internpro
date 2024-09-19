import React from 'react';
import './style.css';

function Navbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-content d-flex justify-content-between align-items-center">
        <div className="logo-and-title d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt="Logo"
            className="imglog"
          />
          <h3 className="navbar-brand ml-2">Kind Meal Connect</h3>
        </div>

        <nav className="navbar-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./collab">Colab</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        <div className="button-section">
          <a href="./FormPage" className="btn btn-success mx-2">Donate</a>
          <a href="./volunteer" className="btn btn-success mx-2">Volunteer</a>
          <a href="./Organisation" className="btn btn-success mx-2">Organisation</a>
        </div>

        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse d-lg-none" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./collab">Colab</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="./contact">Contact Us</a>
          </li>
          <li className="nav-item">
            <a href="./FormPage" className="nav-link btn btn-success">Donate</a>
          </li>
          <li className="nav-item">
            <a href="./volunteer" className="nav-link btn btn-success">Volunteer</a>
          </li>
          <li className="nav-item">
            <a href="./Organisation" className="nav-link btn btn-success">Organisation</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
