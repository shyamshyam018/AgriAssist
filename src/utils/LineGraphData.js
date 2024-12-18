// utils/LineGraphData.js

export const lineGraphData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels
    datasets: [
      {
        label: "Growth Trend",
        data: [10, 20, 15, 25, 30, 28], // Y-axis data points
        fill: false, // No area fill under the line
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        tension: 0.4, // Curvature of the line
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Point color
        pointRadius: 5, // Size of the points
      },
    ],
  };
  
  export const lineGraphOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legend position
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months", // X-axis title
        },
      },
      y: {
        title: {
          display: true,
          text: "Values", // Y-axis title
        },
        beginAtZero: true, // Start Y-axis from zero
      },
    },
  };
  