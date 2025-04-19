import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "https://tinyurl.com/agriimg01", caption: "Transforming Agriculture with AI" },
    { url: "https://tinyurl.com/agriimg02", caption: "Innovative Solutions for a Smarter Future" },
    { url: "https://tinyurl.com/agriimg03", caption: "Revolutionizing Farming with Data" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 opacity-80">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption}
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
            {images[currentIndex].caption}
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6">
            Leveraging technology for a smarter, sustainable future in agriculture.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Learn More
          </button>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-70 transition duration-300"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-70 transition duration-300"
        >
          &gt;
        </button>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Mission: Innovating for a Sustainable Future
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Our platform uses cutting-edge AI and data-driven solutions to help farmers make smarter decisions, increase crop yields, and reduce environmental impact. With a focus on sustainability, we're building the next generation of farming solutions.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Discover Our Technology
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            Key Features of Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">AI Crop Imaging</h3>
              <p className="text-gray-700">
                Leverage AI to analyze crop health, detect diseases early, and optimize yields.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Precision Agriculture</h3>
              <p className="text-gray-700">
                Optimize water usage and reduce resource wastage with real-time data analysis.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Crop Recommendation Engine</h3>
              <p className="text-gray-700">
                Receive crop recommendations based on local climate and soil conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Join Us in Shaping the Future of Agriculture</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Together, we can build a more sustainable, efficient, and technologically advanced future for farmers. Get involved today!
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
