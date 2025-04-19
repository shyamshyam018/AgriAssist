import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values, // The numerical values
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="h-96 w-80 bg-white  mt-4 shadow rounded">
      <h2 className="text-sm font-semibold mb-2">Pie Chart</h2>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
