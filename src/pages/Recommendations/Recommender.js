import { useState } from "react";

const Recommender = () => {
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
    // Add API call logic to backend/ML model
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Get Crop Recommendations</h2>
      <form onSubmit={handleSubmit} className="space-y-1.5">
        <div>
          <label className="block">Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Soil Type:</label>
          <input
            type="text"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Temperature (°C):</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block">Rainfall (mm):</label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default Recommender;
