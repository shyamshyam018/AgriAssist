import React, { useState, useEffect } from "react";


const HomeContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImages = [
    "/assets/images/HomeHero1.jpg",
    "/assets/images/HomeHero3.jpg",
    "/assets/images/HomeHero6.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-100">
      <div
        className="relative bg-cover bg-center h-[70vh]"
        style={{
          backgroundImage: `url(${bgImages[currentIndex]})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold text-center">
            Empowering Agriculture with Knowledge and Technology
          </h1>
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-800">Welcome to AgriAssist</h2>
        <p className="text-lg mt-4 text-gray-600 max-w-4xl mx-auto">
          AgriAssist is committed to enhancing the productivity and sustainability of Indian farmers through modern technology, research, and personalized farming recommendations. We strive to bring the latest agricultural news, provide actionable insights, and offer expert guidance to help farmers thrive.
        </p>
      </div>

      <div className="py-12 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800">Latest Agricultural Insights</h2>
          <p className="text-lg mt-4 text-gray-600">Stay updated with the latest news in agriculture.</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex justify-center space-x-2 animate__animated animate__fadeIn animate__delay-2s">
            <div
              className="flex-shrink-0 w-72 h-60 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
              style={{ backgroundImage: "url('/assets/images/CropDiversity.jpg')" }}
            >
              <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg absolute bottom-0 w-full">
                <h3 className="text-xl font-semibold">Crop Diversity in India</h3>
                <p className="mt-2">Exploring the benefits of diverse crops in Indian agriculture.</p>
              </div>
            </div>
            <div
              className="flex-shrink-0 w-72 h-60 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
              style={{ backgroundImage: "url('/assets/images/SustainableFarming.jpg')" }}
            >
              <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg absolute bottom-0 w-full">
                <h3 className="text-xl font-semibold">Sustainable Farming</h3>
                <p className="mt-2">Understanding sustainable methods to improve farm productivity.</p>
              </div>
            </div>
            <div
              className="flex-shrink-0 w-72 h-60 bg-cover bg-center rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
              style={{ backgroundImage: "url('/assets/images/Conservation.jpg')" }}
            >
              <div className="text-white p-4 bg-black bg-opacity-50 rounded-lg absolute bottom-0 w-full">
                <h3 className="text-xl font-semibold">Conservation Techniques</h3>
                <p className="mt-2">Learn about water-saving techniques for better crop yields.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-green-50">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800">How AgriAssist Helps You</h2>
          <p className="text-lg mt-4 text-gray-600">Bringing knowledge and technology together for the betterment of Indian farmers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-green-700">Agricultural News</h3>
            <p className="mt-4 text-gray-700">
              Stay informed with the latest updates and trends in agriculture, including market prices, weather forecasts, and farming innovations.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-green-700">Farming Recommendations</h3>
            <p className="mt-4 text-gray-700">
              Receive personalized crop and fertilizer recommendations based on your region's weather and conditions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold text-green-700">Plant Research</h3>
            <p className="mt-4 text-gray-700">
              Discover new farming techniques, plant varieties, and research that can enhance farm productivity and sustainability.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeContent;
