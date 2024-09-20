/*import React, { useState } from 'react';

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
          {/* Name Field */
          /*<label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Phone Number Field */
          /*<label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          {/* Email Field */
          /*<label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Date Field */
          /*<label htmlFor="date">When can you join?</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* Dropdown for Role Selection */
          /*<label htmlFor="role">What would you like to join as?</label>
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

          {/* Message Box */
          /*<label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */
          /*<button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerForm;*/







import React, { useState } from 'react';
import './style.css';

function VolunteerForm() {
  const [formData, setFormData] = useState({
    honorific: '',
    name: '',
    phone: '',
    email: '',
    date: '',
    role: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.role) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Handle submission logic (e.g., sending data to a server)
    console.log('Volunteer Form Data Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-dark">Volunteer Registration</h1>
      <div className="form-container p-5">
        {submitted ? (
          <div className="alert alert-success" role="alert">
            Thank you,  Your volunteer form has been submitted successfully<br/>{'Name: '+ formData.name} <br/>{'Email: '+formData.email}<br/> {'Date: '+formData.date}<br/>{'Role: '+formData.role}<br/>{'Phone: '+formData.phone}!.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                {/* Honorific */}
                <div className="form-group">
                  <label htmlFor="honorific">Honorific</label>
                  <select
                    className="form-control"
                    id="honorific"
                    value={formData.honorific}
                    onChange={handleChange}
                  >
                    <option value="">Select Honorific</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </div>

                {/* Joining Date */}
                <div className="form-group">
                  <label htmlFor="date">When can you join?</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="col-md-6">
               
                
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Role */}
                <div className="form-group">
                  <label htmlFor="role">What would you like to join as?</label>
                  <select
                    className="form-control"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a role</option>
                    <option value="Event Coordinator">Event Coordinator</option>
                    <option value="Fundraiser">Fundraiser</option>
                    <option value="Support Staff">Support Staff</option>
                    <option value="Volunteer">Volunteer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && <div className="alert alert-danger" role="alert">{error}</div>}

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default VolunteerForm;
