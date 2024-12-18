import React from "react";
import BarChart from "../../components/dashboard/BarChart";
import PieChart from "../../components/dashboard/PieChart";
import BarChartData from "../../utils/BarChartData";
import PieChartData from "../../utils/PieChartData";
import BarGraph from "../../components/dashboard/BarGraph";
import GraphData from "../../utils/GraphData";
import PriceTable from "../../components/dashboard/PriceTable";
import LineGraph from "../../components/dashboard/LineGraph";
import CalendarWithDateTime from "../../components/dashboard/CalendarWithDateTime";

const Dashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    {/* Header */}
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2">Welcome to the Dashboard</h2>
      <p className="text-lg text-gray-600">Monitor trends, get insights, and explore recommendations.</p>
    </div>

    {/* Dashboard Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <BarChart chartData={BarChartData} />
      </div>
      {/* Pie Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <PieChart data={PieChartData} />
      </div>
      {/* Calendar */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <CalendarWithDateTime />
      </div>
    </div>

    {/* Graphs Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
      {/* Bar Graph */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <BarGraph data={GraphData} />
      </div>
      {/* Line Graph */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <LineGraph />
      </div>
    </div>

    {/* Price Table */}
    <div className="bg-white rounded-lg shadow-md p-6 col-span-2 overflow-x-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Price Table</h3>
      <PriceTable />
    </div>
  </div>
);

export default Dashboard;
