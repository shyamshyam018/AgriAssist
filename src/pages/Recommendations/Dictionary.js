const crops = [
    { name: "Rice", soil: "Clayey", temp: "20-35°C", water: "High", season: "Kharif" },
    { name: "Wheat", soil: "Loamy", temp: "10-25°C", water: "Moderate", season: "Rabi" },
    { name: "Maize", soil: "Well-drained", temp: "21-27°C", water: "Low", season: "Kharif/Rabi" },
  ];
  
  const Dictionary = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Crop Dictionary</h2>
      <div className="flex overflow-x-auto space-x-4">
        {crops.map((crop, index) => (
          <div key={index} className="min-w-[250px] bg-white rounded shadow p-4">
            <h3 className="text-lg font-bold">{crop.name}</h3>
            <p>Soil: {crop.soil}</p>
            <p>Temp: {crop.temp}</p>
            <p>Water: {crop.water}</p>
            <p>Season: {crop.season}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Dictionary;
  