import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './style1.css'; // Assuming the CSS is in the same folder or appropriately linked

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if SMTP.js is loaded
    if (!window.Email) {
      Swal.fire({
        title: "Error!",
        text: "SMTP.js is not loaded. Make sure the library is included.",
        icon: "error",
      });
      return;
    }

    // Send email using SMTP.js
    window.Email.send({
      SecureToken: '8f6ace82-8d7d-473c-8d08-1608a84373c7', // Replace with your valid SecureToken
      To: 'mjhonny14377@gmail.com', // Receiver email
      From: "mjhonny14377@gmail.com", // Sender email (must be the same as used with the SecureToken)
      Subject: "New contact for enquiry",
      Body: `
        Name: ${formData.name} <br>
        Email: ${formData.email} <br>
        Phone: ${formData.phone} <br>
        Message: ${formData.message}
      `,
    }).then((message) => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
        });
      }
    });

    // Reset form fields
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <div className="svg-1">
        <div className="focus">
          <div className="container mt-5 d-flex justify-content-center form-1">
            <form onSubmit={sendEmail} className="container-fluid">
              <h3 className="im text-center">GET IN TOUCH!</h3>

              <label htmlFor="name">
                <i className="fa-solid fa-user fa-fade"></i> Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />

              <label htmlFor="email">
                <i className="fa-solid fa-envelopes-bulk fa-bounce"></i> Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />

              <label htmlFor="phone">
                <i className="fa-solid fa-phone-volume fa-shake"></i> Contact number
              </label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{5}[-][0-9]{7}[-][0-9]{1}"
                title="Please enter a valid number"
                placeholder="Enter phone/mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="off"
              />

              <label htmlFor="message">
                <i className="fa-solid fa-message fa-beat-fade"></i> Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
              ></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
