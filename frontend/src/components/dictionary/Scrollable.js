import React from "react";
import "../../styles/Scrollable.css";

const ScrollableSection = ({ crops, onCropClick, scrollRef }) => {
  return (
    <div className="flex overflow-x-auto no-scrollbar space-x-6 py-6" ref={scrollRef}>
      {crops.map((crop) => (
        <div
          key={crop.id}
          className="min-w-[350px] max-w-[250px] min-h-[450px] bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 shadow-lg rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-1xl"
          onClick={() => onCropClick(crop)}
        >
         
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-48 object-cover rounded-md mb-4 shadow-xl"
          />
          <h3 className="text-2xl font-bold text-white mb-2">{crop.name}</h3>

          <p className=" font-semibold text-black-300 bg-gray-200 inline-block px-4  rounded-full mb-2">
            {crop.season}
          </p>

          <div className="mt-4">
            <p className="text-md font-medium text-white mb-1">
              <span className="text-yellow-300">Soil:</span> {crop.soil}
            </p>
            <p className="text-md font-medium text-white mb-1">
              <span className="text-yellow-300">Temp:</span> {crop.temp}
            </p>
            <p className="text-md font-medium text-white mb-1">
              <span className="text-yellow-300">Water:</span> {crop.water}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollableSection;
