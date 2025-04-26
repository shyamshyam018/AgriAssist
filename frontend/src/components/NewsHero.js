import React, { useState, useEffect } from "react";
import '../styles/NewsHero.css';

const NewsHero = ({ articles = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Static images for the slider
  const staticImages = [
    { url: "/assets/images/agriinovate.jpeg", caption: "" },
    { url: "/assets/images/kisanmela.jpg", caption: "" },
    { url: "/assets/images/wheat.jpeg", caption: "" },
  ];

  // Inject dynamic titles into the static image objects
  const images = staticImages.map((img, index) => ({
    ...img,
    caption: articles[index] ? articles[index].title : ""
  }));

  const marqueeText = articles.map(article => article.title);

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

  if (images.length === 0) return null;

  return (
    <div className="relative mb-5">
      {/* Hero Image Section */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center px-4">
            {images[currentIndex].caption}
          </h2>
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

      {/* Marquee Section */}
      <div className="mt-5 bg-black text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {marqueeText.map((text, index) => (
            <span key={index} className="mx-10">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
