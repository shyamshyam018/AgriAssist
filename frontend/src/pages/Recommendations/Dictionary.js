import React, { useState, useRef, useEffect } from "react";
import "../../styles/Dictionary.css";
import ScrollableSection from "../../components/dictionary/Scrollable";
import { crops } from "../../utils/CropsData";
import CropCard from "../../components/dictionary/CropCard";  // Import the new component

const Dictionary = () => {
  const [search, setSearch] = useState("");
  const [filterSeason, setFilterSeason] = useState("All");
  const [selectedCrop, setSelectedCrop] = useState(null);
  const scrollRef = useRef(null);

  const filteredCrops = crops.filter((crop) => {
    return (
      crop.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterSeason === "All" || crop.season.includes(filterSeason))
    );
  });

  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 300 : -300;
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Crop Dictionary</h2>

      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search for a crop..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm"
        />
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

      <div className="relative w-full mt-10">
        <ScrollableSection crops={filteredCrops} onCropClick={handleCropClick} scrollRef={scrollRef} />
      </div>

      {filteredCrops.length === 0 && (
        <div className="text-center mt-6 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold">No items found</h3>
        </div>
      )}

      {selectedCrop && <CropCard crop={selectedCrop} onClick={handleCropClick} />}
    </div>
  );
};

export default Dictionary;
