import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ chartData }) => {
  return (
    <div className="h-64 w-72 bg-white p-4 mt-4 shadow rounded">
      <h2 className="text-sm font-semibold mb-2">Bar Chart</h2>
      <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
