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
    // Add backend logic for form submission here
  };

  return (
    <div className="flex flex-col h-full">
      {/* Content section with custom height */}
      <div className="container mx-auto px-4 py-14 h-[695px] overflow-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>

        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact form card */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="p-3 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-full w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Info card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <img
              src="/assets/images/Contact.jpg"
              alt="Contact Us"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 text-sm mb-4">
              You can reach us at any of the following ways:
            </p>
            <div className="text-gray-800 mb-2">
              <strong>Phone:</strong> +91 91598 46594
            </div>
            <div className="text-gray-800 mb-2">
              <strong>Email:</strong> shyamrajsr2004@gmail.com
            </div>
            <div className="text-gray-800">
              <strong>Address:</strong> Athani Road , BIT Sathy, Erode - 638 401.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
