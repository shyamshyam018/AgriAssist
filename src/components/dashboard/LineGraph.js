import React from "react";
import { Line } from "react-chartjs-2";
import { lineGraphData, lineGraphOptions } from "../../utils/LineGraphData"; // Adjust the path as needed

const LineGraph = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h3 className="text-center text-blue-600 font-semibold mb-4">
        Line Graph: Rise and Level
      </h3>
      <Line data={lineGraphData} options={lineGraphOptions} />
    </div>
  );
};

export default LineGraph;
