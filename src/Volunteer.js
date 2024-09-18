import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    role: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, date, role, message } = formData;

    if (name && phone && email && date && role) {
      // Show alert with form data
      alert(`Thank you, ${name}, for volunteering!\n\nDetails:\n- Phone: ${phone}\n- Email: ${email}\n- Joining Date: ${date}\n- Role: ${role}\n- Message: ${message}`);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        role: '',
        message: '',
      });
    }
  };

  return (
    <div className="volreg">
      <div className="container">
        <h1>Volunteer Registration</h1>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone Number Field */}
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Email Field */}
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Date Field */}
          <label htmlFor="date">When can you join?</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Dropdown for Role Selection */}
          <label htmlFor="role">What would you like to join as?</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="Event Coordinator">Event Coordinator</option>
            <option value="Fundraiser">Fundraiser</option>
            <option value="Support Staff">Support Staff</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          {/* Message Box */}
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;
