import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const PieChartPower = (props) => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22], // Initial data
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  // Function to generate random data
  const generateRandomData = () => {
    const randomData = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    setChartData({
      ...chartData,
      series: randomData,
    });
  };

  useEffect(() => {
    // Generate initial random data
    generateRandomData();

    // Update data every 3 seconds (adjust the interval as needed)
    const interval = setInterval(generateRandomData, 3000);

    return () => {
      // Clean up the interval on unmount
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <ReactApexChart
        options={chartData}
        series={chartData.series}
        type="pie"
        width={chartData.chart.width}
      />
    </div>
  );
};

export default PieChartPower;
