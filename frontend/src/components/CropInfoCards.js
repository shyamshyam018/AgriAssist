const crops = [
    { 
      name: "Rice", 
      soil: "Clayey, Loamy", 
      temp: "20-35°C", 
      water: "High", 
      season: "Kharif", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Wheat", 
      soil: "Loamy", 
      temp: "10-25°C", 
      water: "Moderate", 
      season: "Rabi", 
      image: "https://via.placeholder.com/150" 
    },
    { 
      name: "Maize", 
      soil: "Well-drained", 
      temp: "21-27°C", 
      water: "Low", 
      season: "Kharif/Rabi", 
      image: "https://via.placeholder.com/150" 
    },
  ];
  
  const CropInfoCards = () => (
    <div className="overflow-x-auto py-4">
      <h2 className="text-xl font-semibold mb-4">Crop Information</h2>
      <div className="flex space-x-4">
        {crops.map((crop, index) => (
          <div key={index} className="min-w-[250px] bg-white rounded shadow p-4">
            <img 
              src={crop.image} 
              alt={crop.name} 
              className="h-32 w-full object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{crop.name}</h3>
            <p><strong>Soil:</strong> {crop.soil}</p>
            <p><strong>Temp:</strong> {crop.temp}</p>
            <p><strong>Water:</strong> {crop.water}</p>
            <p><strong>Season:</strong> {crop.season}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default CropInfoCards;
  