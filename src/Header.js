import React from 'react';
import './style.css';

function Header() {
  return React.createElement(
    'header',
    { className: 'd-flex justify-content-between align-items-center p-3' },
    React.createElement(
      'div',
      { className: 'logo-section' },
      React.createElement('img', {
        src: `${process.env.PUBLIC_URL}/logo.jpg`,
        alt: 'Logo',
        className: 'imglog',
      })
      // Optionally, you can add the commented-out h3 here using createElement if needed:
      // React.createElement('h3', { className: 'logo-text' }, 'Wishes & Blessings')
    ),
    React.createElement(
      'div',
      { className: 'button-section' },
      React.createElement(
        'a',
        { href: './FormPage', className: 'btn btn-success mx-2' },
        'Donate'
      ),
      React.createElement(
        'a',
        { href: './Volunteer', className: 'btn btn-success mx-2' },
        'Volunteer'
      ),
      React.createElement(
        'a',
        { href: './Organisation', className: 'btn btn-success mx-2' },
        'Donate'
      ),
    )
  );
}

export default Header;
