import React, { useState } from "react";
import axios from "axios";
import PredictCard from "../../components/dictionary/PredictCard"
import { crops } from "../../utils/CropsData";

const Recommender = () => {
  const [formData, setFormData] = useState({
    N_SOIL: "",
    P_SOIL: "",
    K_SOIL: "",
    TEMPERATURE: "",
    HUMIDITY: "",
    ph: "",
    RAINFALL: "",
    CROP_PRICE: "",
  });
  const [predictedCrop, setPredictedCrop] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To handle errors when crop is not found
  const [isOutputVisible, setIsOutputVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state on new submission
    setIsOutputVisible(false); // Hide the result while loading

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      console.log("Response from backend:", response.data); // Add log for debugging

      const predictedCropName = response.data.predicted_crop;
      const matchedCrop = crops.find(crop => crop.name === predictedCropName);

      if (matchedCrop) {
        setTimeout(() => {
          setPredictedCrop(matchedCrop);
          setIsOutputVisible(true); // Show the output after a delay
        }, 3000); // 3 seconds delay for output display
      } else {
        setPredictedCrop(null);
        setError("The optimum crop could not be found in our database. Please reach out to AgriAssists Customer Care.");
        setIsOutputVisible(true);
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPredictedCrop(null);
      setError("An error occurred while fetching the recommendation. Please try again later.");
      setIsOutputVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-green-600 px-6 py-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-white mb-6">Crop Recommender</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData).map((key) => (
              <div key={key} className="flex flex-col bg-white p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <label htmlFor={key} className="font-medium text-gray-700 mb-2">
                  {key.replace("_", " ").toUpperCase()}
                </label>
                <input
                  id={key}
                  type="number"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                  placeholder={`Enter ${key.replace("_", " ")}`}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
          disabled={loading}
        >
          {loading ? "Processing..." : "Get Recommended Crop"}
        </button>
      </form>

      {/* Show error message if crop is not found */}
      {error && !loading && (
        <div className="mt-6 text-center text-red-600 font-semibold">
          {error}
        </div>
      )}

      {/* Loading state */}
      {loading && !predictedCrop && !error && (
        <div className="mt-6 text-center text-gray-500">Fetching the best crop for you...</div>
      )}
      
      {/* Output Section */}
      {isOutputVisible && predictedCrop && !loading && (
        <div className="mt-6">
          <PredictCard crop={predictedCrop} onClick={(crop) => console.log(crop)} />
        </div>
      )}
    </div>
  );
};

export default Recommender;
