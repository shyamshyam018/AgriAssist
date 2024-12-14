import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Sample data for the charts
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Crop Yield (in tons)',
        data: [50, 70, 60, 90, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  const pieChartData = {
    labels: ['Wheat', 'Rice', 'Cotton', 'Barley'],
    datasets: [
      {
        label: 'Crop Distribution',
        data: [30, 40, 20, 10],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A5']
      }
    ]
  };

  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Rainfall (mm)',
        data: [10, 20, 30, 40, 50],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true
      }
    ]
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
      <p className="text-gray-600">
        Monitor trends, get crop insights, and explore recommendations.
      </p>

      {/* Highlights Section */}
      <div className="bg-white p-4 mt-4 shadow rounded">
        <h3 className="text-lg font-semibold">Highlights</h3>
        <ul className="list-disc pl-5 mt-2">
          <li>Top crops for the current season.</li>
          <li>Weather-based crop recommendations.</li>
          <li>Dynamic analytics on fertilizer usage.</li>
        </ul>
      </div>

      {/* Charts Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Agricultural Insights</h3>
        
        {/* Bar Chart */}
        <div className="bg-white p-4 mt-4 shadow rounded">
          <h4 className="text-lg font-semibold mb-2">Crop Yield by Month</h4>
          <Bar data={barChartData} />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 mt-4 shadow rounded">
          <h4 className="text-lg font-semibold mb-2">Crop Distribution</h4>
          <Pie data={pieChartData} />
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 mt-4 shadow rounded">
          <h4 className="text-lg font-semibold mb-2">Rainfall Trends</h4>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
