/*import React from 'react';
import './style.css';

function FormPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Donate Now</h1>
      <div className="form-container p-5">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="selectProject">Honorific</label>
                <select className="form-control" id="selectProject">
                  <option>Select Honorific</option>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="email *" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" className="form-control" id="address" placeholder="address *" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <input type="text" className="form-control" id="country" placeholder="country *" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" className="form-control" id="phone" placeholder="phone *" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State:</label>
                <input type="text" className="form-control" id="state" placeholder="State *" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input type="text" className="form-control" id="city" placeholder="city *" />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;*/



/*import React from 'react';
import './style.css';

function FormPage() {
  return React.createElement(
    'div',
    { className: 'container mt-5 bg-dark ' },
    React.createElement(
      'h1',
      { className: 'text-center' },
      'Donate Now'
    ),
    React.createElement(
      'div',
      { className: 'form-container p-5 ' },
      React.createElement(
        'form',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'selectProject' }, 'Honorific'),
              React.createElement(
                'select',
                { className: 'form-control', id: 'selectProject' },
                React.createElement('option', null, 'Select Honorific'),
                React.createElement('option', null, 'Mr'),
                React.createElement('option', null, 'Mrs'),
                React.createElement('option', null, 'Ms')
              )
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'email' }, 'Email:'),
              React.createElement('input', {
                type: 'email',
                className: 'form-control',
                id: 'email',
                placeholder: 'email *'
              })
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'address' }, 'Address:'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'address',
                placeholder: 'address *'
              })
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'country' }, 'Country:'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'country',
                placeholder: 'country *'
              })
            )
          ),
          React.createElement(
            'div',
            { className: 'col-md-6' },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'name' }, 'Name:'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'name',
                placeholder: 'Name',
                required: true
              })
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'phone' }, 'Phone:'),
              React.createElement('input', {
                type: 'tel',
                className: 'form-control',
                id: 'phone',
                placeholder: 'phone *'
              })
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'state' }, 'State:'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'state',
                placeholder: 'State *'
              })
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement('label', { htmlFor: 'city' }, 'City:'),
              React.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'city',
                placeholder: 'city *'
              })
            )
          )
        ),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary' },
          'Submit'
        )
      )
    )
  );
}

export default FormPage;*/




import React, { useState } from 'react';
import './style.css';

function FormPage() {
  const [formData, setFormData] = useState({
    honorific: '',
    email: '',
    address: '',
    country: '',
    name: '',
    phone: '',
    state: '',
    city: ''
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

    // Form validation (simple example)
    if (!formData.email || !formData.name || !formData.phone || !formData.address) {
      setError('Please fill out all required fields.');
      return;
    }

    // Simulate form submission process
    setError('');
    setSubmitted(true);

    // You can send the data to a server or perform other actions here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-dark">Donate Now</h1>
      <div className="form-container p-5">
        {submitted ? (
          <div className="alert alert-success" role="alert">
            Thank you, {formData.name}! Your form has been submitted successfully.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
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
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="address "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="country "
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
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="phone "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State "
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="city "
                  />
                </div>
              </div>
            </div>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default FormPage;


