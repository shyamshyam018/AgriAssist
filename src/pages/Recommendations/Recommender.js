import React, { useState } from "react";
import axios from "axios";
import CropCard from "../../components/dictionary/CropCard";
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

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      const predictedCropName = response.data.predicted_crop;
      const matchedCrop = crops.find(crop => crop.name === predictedCropName);

      if (matchedCrop) {
        setPredictedCrop(matchedCrop);
      } else {
        console.error("Crop not found in database");
        setPredictedCrop(null);
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPredictedCrop(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Crop Recommender</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
              <label htmlFor={key} className="font-medium text-gray-700 mb-2">
                {key.replace("_", " ")}
              </label>
              <input
                id={key}
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Recommended Crop"}
        </button>
      </form>

      {predictedCrop && !loading && (
        <div className="mt-6">
          <CropCard crop={predictedCrop} onClick={(crop) => console.log(crop)} />
        </div>
      )}

      {loading && !predictedCrop && (
        <div className="mt-6 text-center text-gray-500">Fetching the best crop for you...</div>
      )}
    </div>
  );
};

export default Recommender;
