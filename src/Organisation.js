import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Organisation = () => {
  const [orgname, setOrgname] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

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
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={sendEmail}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Register Your Organisation</h2>

        <div className="mb-4">
          <label htmlFor="orgname" className="block text-gray-700 font-medium mb-2">Organisation Name</label>
          <input
            type="text"
            id="orgname"
            name="orgname"
            placeholder="Enter organisation name"
            className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            value={orgname}
            onChange={(e) => setOrgname(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="owner" className="block text-gray-700 font-medium mb-2">Owner/Organizer Name</label>
          <input
            type="text"
            id="owner"
            name="owner"
            placeholder="Enter owner name"
            className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit number"
            placeholder="Enter phone number"
            className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mail" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="Enter email address"
            className="w-full bg-transparent border-b-2 border-gray-400 outline-none py-2 focus:border-blue-500"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Organisation;
