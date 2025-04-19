import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register components
Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale
);

const CalendarWithDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Calendar with Date & Time</h2>
        <p className="text-lg mt-2">
          Current Date & Time:{" "}
          <span className="font-bold">
            {currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center mt-6">
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <p className="mt-4 text-lg">
          Selected Date:{" "}
          <span className="font-semibold">
            {selectedDate.toLocaleDateString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CalendarWithDateTime;
