import { useState } from "react";

const RecommendationForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    soilType: "",
    temperature: "",
    rainfall: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call to send formData to backend/ML model here
  };

  return (
    <div className="bg-gray-100 p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Get Recommendations</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Soil Type:</label>
          <input
            type="text"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            placeholder="e.g., Loamy, Sandy"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Temperature (°C):</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            placeholder="e.g., 25"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Rainfall (mm):</label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            placeholder="e.g., 300"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default RecommendationForm;
