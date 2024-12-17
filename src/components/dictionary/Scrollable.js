import React, { useRef } from "react";
import "../../styles/Scrollable.css";

// Sample data for cards
const crops = [
  { id: 1, name: "Rice", image: "https://via.placeholder.com/200x150?text=Rice" },
  { id: 2, name: "Wheat", image: "https://via.placeholder.com/200x150?text=Wheat" },
  { id: 3, name: "Maize", image: "https://via.placeholder.com/200x150?text=Maize" },
  { id: 4, name: "Cotton", image: "https://via.placeholder.com/200x150?text=Cotton" },
  { id: 5, name: "Sugarcane", image: "https://via.placeholder.com/200x150?text=Sugarcane" },
  { id: 6, name: "Barley", image: "https://via.placeholder.com/200x150?text=Barley" },
  { id: 7, name: "Millets", image: "https://via.placeholder.com/200x150?text=Millets" },
  { id: 8, name: "Pulses", image: "https://via.placeholder.com/200x150?text=Pulses" },
];

const ScrollableSection = () => {
  const scrollRef = useRef(null);

  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="relative w-full p-6">
      {/* Left Arrow */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={() => scroll("left")}
      >
        &#8592;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4"
      >
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="min-w-[200px] max-w-[200px] bg-white shadow-lg rounded-lg p-4 text-center"
          >
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{crop.name}</h3>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        onClick={() => scroll("right")}
      >
        &#8594;
      </button>
    </div>
  );
};



export default ScrollableSection;
