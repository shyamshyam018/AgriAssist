import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Crop Production and Fertilizer Usage",
      },
    },
  };

  return (
    <div className=" text-center justify-center h-96 w-full bg-white p-6 mt-4 shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Bar Graph</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
