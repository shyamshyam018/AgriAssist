// src/pages/AboutUs.js
import React from "react";

const AboutUs = () => (
  <div className="flex flex-col h-full">
    {/* Content section with custom height */}
    <div className="container mx-auto px-4 py-14 h-[695px] overflow-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">About Us</h1>
      
      {/* First card with image and text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <img
            src="/assets/images/AboutUs2.jpg"
            alt="Farmers at work"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h2>
          <p className="text-gray-600 text-sm mb-4">
            We are a team of passionate individuals dedicated to helping farmers and the agricultural community.
            Our goal is to provide the best crop recommendations, weather insights, and practical agricultural advice
            through cutting-edge technologies like machine learning and data analysis.
          </p>
        </div>

        {/* Second card with image and text */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <img
            src="/assets/images/AboutUs3.jpg"
            alt="Technology in agriculture"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600 text-sm">
            Our mission is to create a smarter and more efficient agricultural ecosystem, empowering farmers to
            make informed decisions and maximize their productivity. We aim to bring the best in technology to agriculture.
          </p>
        </div>
      </div>

      {/* Third section for general information */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-800 mb-4">
          Our innovative platform uses machine learning and data analysis to deliver tailored insights and forecasts
          to farmers, helping them grow healthier crops, reduce waste, and increase yield.
        </p>
        <p className="text-lg text-gray-800">
          Join us in building a smarter, more sustainable future for agriculture.
        </p>
      </div>
    </div>

    {/* Footer will be fixed at the bottom */}
  </div>
);

export default AboutUs;
