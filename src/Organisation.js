import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Make sure SweetAlert2 is installed via npm
import'./styles.css';

const Organisation = () => {
  const [orgname, setOrgname] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // SMTPJS usage without import
    window.Email.send({
      SecureToken: "8f6ace82-8d7d-473c-8d08-1608a84373c7",
      To: 'mjhonny14377@gmail.com',
      From: "mjhonny14377@gmail.com",
      Subject: "New contact for enquiry",
      Body: `Organisation: ${orgname}<br> Owner: ${owner}<br> Phone: ${phone}<br> Mail: ${mail}`
    }).then(message => {
      if (message === "OK") {
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send the message. Please try again later.",
          icon: "error"
        });
      }
    });
  };

  return (
    <div className="reg">
      <form className="org" onSubmit={sendEmail}>
        <h2>Register your organisation</h2>
        <label htmlFor="orgname"><strong>Name of the organisation :</strong></label><br />
        <input
          type="text"
          id="orgname"
          name="orgname"
          placeholder="Enter name of the organisation here"
          value={orgname}
          onChange={(e) => setOrgname(e.target.value)}
          required
        /><br />
        <label htmlFor="owner"><strong>Name of proprietor/Organiser :</strong></label><br />
        <input
          type="text"
          id="owner"
          name="owner"
          placeholder="Enter name of the organiser"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          required
        /><br />
        <label htmlFor="phone"><strong>Contact Number :</strong></label><br />
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit number"
          placeholder="Enter your mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br />
        <label htmlFor="mail"><strong>Email :</strong></label><br />
        <input
          type="email"
          id="mail"
          name="mail"
          placeholder="Enter your email here"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        /><br />
        <button id="btn-submit" type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default Organisation;
/*import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    proprietorName: "",
    contactNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.organizationName) {
      formErrors.organizationName = "Organization name is required";
    }
    if (!formData.proprietorName) {
      formErrors.proprietorName = "Proprietor name is required";
    }
    if (!formData.contactNumber || !phoneRegex.test(formData.contactNumber)) {
      formErrors.contactNumber = "Valid contact number is required (10 digits)";
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = "Valid email is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission (e.g., send data to the server)
      console.log("Form submitted", formData);
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h3>Organization Registration</h3>

        <div className="form-group">
          <label htmlFor="organizationName">Organization Name</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleInputChange}
            className={`form-control ${errors.organizationName && "is-invalid"}`}
          />
          {errors.organizationName && <small className="text-danger">{errors.organizationName}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="proprietorName">Proprietor/Organizer Name</label>
          <input
            type="text"
            id="proprietorName"
            name="proprietorName"
            value={formData.proprietorName}
            onChange={handleInputChange}
            className={`form-control ${errors.proprietorName && "is-invalid"}`}
          />
          {errors.proprietorName && <small className="text-danger">{errors.proprietorName}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={`form-control ${errors.contactNumber && "is-invalid"}`}
          />
          {errors.contactNumber && <small className="text-danger">{errors.contactNumber}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-control ${errors.email && "is-invalid"}`}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;*/

