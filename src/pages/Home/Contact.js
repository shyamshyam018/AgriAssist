// src/pages/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you can add logic to send the form data to a backend or an email service
  };

  return (
    <div className="container mx-auto px-4 py-1">
       <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full mb-1"
            required
          />
        </div>
        <div >
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full mb-1"
            required
          />
        </div>
        <div >
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded w-full mb-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mb-1"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
