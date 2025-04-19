const BarChartData = {
    labels: ["Crop A", "Crop B", "Crop C", "Crop D", "Crop E"],
    datasets: [
      {
        label: "Crop Yield (in Tons)",
        data: [120, 190, 300, 500, 220], // Example data
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  export default BarChartData;
  