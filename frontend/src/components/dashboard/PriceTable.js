import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const commoditiesData = [
  { name: "Gold", price: 58000, change: -200, percentChange: -0.34 },
  { name: "Silver", price: 72000, change: 500, percentChange: 0.70 },
  { name: "Crude Oil", price: 6200, change: -100, percentChange: -1.50 },
  { name: "Natural Gas", price: 240, change: 10, percentChange: 4.20 },
  { name: "Copper", price: 800, change: 20, percentChange: 2.56 },
];

const PriceTableWithChart = () => {
  // Prepare data for Chart.js Bar Graph
  const labels = commoditiesData.map((commodity) => commodity.name);
  const changeData = commoditiesData.map((commodity) => commodity.change);
  const percentChangeData = commoditiesData.map((commodity) => commodity.percentChange);

  const barChartData = {
    labels,
    datasets: [
      {
        label: "Price Change (₹)",
        data: changeData,
        backgroundColor: changeData.map((value) => (value < 0 ? "rgba(255, 99, 132, 0.7)" : "rgba(75, 192, 192, 0.7)")),
      },
      {
        label: "Percentage Change (%)",
        data: percentChangeData,
        backgroundColor: percentChangeData.map((value) => (value < 0 ? "rgba(255, 159, 64, 0.7)" : "rgba(54, 162, 235, 0.7)")),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Commodity Price Changes & Percentages" },
    },
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Commodity Price Movement</h2>

      {/* Table */}
      <table className="w-full mb-8 border-collapse border shadow-lg bg-white rounded-md">
        <thead>
          <tr className="bg-blue-100">
            <th className="border p-3 text-left font-semibold">Commodity</th>
            <th className="border p-3 text-left font-semibold">Current Price (₹)</th>
            <th className="border p-3 text-left font-semibold">Change</th>
            <th className="border p-3 text-left font-semibold">% Change</th>
          </tr>
        </thead>
        <tbody>
          {commoditiesData.map((commodity, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-3">{commodity.name}</td>
              <td className="border p-3">{commodity.price.toLocaleString()}</td>
              <td className={`border p-3 ${commodity.change < 0 ? "text-red-600" : "text-green-600"}`}>
                {commodity.change > 0 ? `+${commodity.change}` : commodity.change}
              </td>
              <td className={`border p-3 ${commodity.percentChange < 0 ? "text-red-600" : "text-green-600"}`}>
                {commodity.percentChange > 0
                  ? `+${commodity.percentChange}%`
                  : `${commodity.percentChange}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default PriceTableWithChart;
