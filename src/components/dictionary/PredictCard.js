import React, { useState } from "react";

const PredictCard = ({ crop, onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div
      className="mt-6 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      onClick={() => {
        toggleExpand();  // Toggle expansion on click
        onClick(crop);
      }}
    >
      <div className="flex flex-col items-start">
        {/* Image at the top-left corner */}
        <img
          src={crop.image}
          alt={crop.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        {/* Crop name */}
        <h3 className="text-2xl font-semibold text-green-600 mb-2">{crop.name}</h3>

        {/* Show basic details when collapsed */}
        {!isExpanded && (
          <div className="w-full">
            <p className="text-md text-gray-700 mb-4">Soil: {crop.soil}</p>
            <p className="text-md text-gray-700 mb-4">Temperature: {crop.temp}</p>
          </div>
        )}

        {/* Show more details when expanded */}
        {isExpanded && (
          <div className="w-full">
            <p className="text-md text-gray-700 mb-6">{crop.description}</p>

            {/* Crop Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-white">Soil</h4>
                <p className="text-md text-white">{crop.soil}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-white">Temperature</h4>
                <p className="text-md text-white">{crop.temp}</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-white">Water Requirement</h4>
                <p className="text-md text-white">{crop.water}</p>
              </div>
              <div className="bg-gradient-to-r from-red-400 to-red-600 p-2 rounded-lg shadow-sm">
                <h4 className="text-md font-semibold text-white">Season</h4>
                <p className="text-md text-white">{crop.season}</p>
              </div>
            </div>

            {/* Crop Types Table */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">Crop Types</h4>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Benefits</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Demerits</th>
                  </tr>
                </thead>
                <tbody>
                  {crop.types.map((type, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-600">{type.name}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{type.benefits}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{type.demerits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Price History Table */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800 mb-4">Price History</h4>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Price (INR)</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example of hardcoded data */}
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600">17/12/2024</td>
                    <td className="px-4 py-2 text-sm text-gray-600">10,000</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Sathy</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600">17/12/2024</td>
                    <td className="px-4 py-2 text-sm text-gray-600">10,000</td>
                    <td className="px-4 py-2 text-sm text-gray-600">Sathy</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictCard;
