import React, { useState, useRef } from "react";
import '../../styles/Dictionary.css';
import ScrollableSection from "../../components/dictionary/Scrollable";

// Sample crop data with images
const crops = [
  { 
    name: "Rice", 
    soil: "Clayey", 
    temp: "20-35°C", 
    water: "High", 
    season: "Kharif",
    image: "https://via.placeholder.com/150?text=Rice" 
  },
  { 
    name: "Wheat", 
    soil: "Loamy", 
    temp: "10-25°C", 
    water: "Moderate", 
    season: "Rabi",
    image: "https://via.placeholder.com/150?text=Wheat" 
  },
  { 
    name: "Maize", 
    soil: "Well-drained", 
    temp: "21-27°C", 
    water: "Low", 
    season: "Kharif/Rabi",
    image: "https://via.placeholder.com/150?text=Maize" 
  },
  { 
    name: "Sugarcane", 
    soil: "Deep Loamy", 
    temp: "21-27°C", 
    water: "Very High", 
    season: "Annual",
    image: "https://via.placeholder.com/150?text=Sugarcane" 
  },
  { 
    name: "Cotton", 
    soil: "Black Soil", 
    temp: "25-35°C", 
    water: "Low", 
    season: "Kharif",
    image: "https://via.placeholder.com/150?text=Cotton" 
  }
];

const Dictionary = () => {
  const [search, setSearch] = useState("");
  const [filterSeason, setFilterSeason] = useState("All");
  const scrollRef = useRef(null);

  // Filter crops based on search input and selected season
  const filteredCrops = crops.filter((crop) => {
    return (
      crop.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterSeason === "All" || crop.season.includes(filterSeason))
    );
  });

  // Function to handle scrolling
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Crop Dictionary</h2>

      {/* Search Bar and Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for a crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm"
        />

        {/* Filter Dropdown */}
        <select
          value={filterSeason}
          onChange={(e) => setFilterSeason(e.target.value)}
          className="w-full md:w-1/4 p-3 border border-gray-300 rounded shadow-sm"
        >
          <option value="All">All Seasons</option>
          <option value="Kharif">Kharif</option>
          <option value="Rabi">Rabi</option>
          <option value="Kharif/Rabi">Kharif/Rabi</option>
        </select>
      </div>
      <ScrollableSection />
      <ScrollableSection />

     
    </div>
  );
};

export default Dictionary;
