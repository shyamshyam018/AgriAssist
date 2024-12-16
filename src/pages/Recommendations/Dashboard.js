import React from "react";
import BarChart from "../../components/dashboard/BarChart";
import PieChart from "../../components/dashboard/PieChart";
import BarChartData from "../../utils/BarChartData";
import PieChartData from "../../utils/PieChartData";
import BarGraph from "../../components/dashboard/BarGraph";
import GraphData from "../../utils/GraphData";
import PriceTable from "../../components/dashboard/PriceTable";

const Dashboard = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    {/* Header */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to the Dashboard</h2>
      <p className="text-gray-600 text-lg mt-2">
        Monitor trends, get insights, and explore recommendations.
      </p>
    </div>

    {/* Dashboard Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
      {/* Bar Chart */}
      <div className="bg-white rounded-lg p-6 flex justify-center items-center h-96">
        <BarChart chartData={BarChartData} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-lg  p-6 flex justify-center items-center h-96">
        <PieChart data={PieChartData} />
      </div>

      {/* Bar Graph with Full Width */}
      <div className="bg-white rounded-lg  p-6 col-span-2 ">
        <BarGraph data={GraphData} />
      </div>

      {/* Commodity Price Table */}
      <div className="bg-white rounded-lg  p-6 col-span-2 overflow-x-auto">
        <PriceTable />
      </div>
    </div>
  </div>
);

export default Dashboard;
