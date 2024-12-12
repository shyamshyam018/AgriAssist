import React, { useState, useEffect } from "react";

const NewsHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { url: "https://tinyurl.com/agriimg01", caption: "Agriculture News 1" },
    { url: "https://tinyurl.com/agriimg02", caption: "Farming Trends 2" },
    { url: "https://tinyurl.com/agriimg03", caption: "Market Updates 3" },
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
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative mb-5">
      <div className="bg-cover bg-center h-80 flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">{images[currentIndex].caption}</h2>
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default NewsHero;
