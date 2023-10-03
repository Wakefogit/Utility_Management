import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const Linegraphspower = (props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Power",
        data: [], // Initially empty
      },
    ],
    options: {
      chart: {
        height: 500,
        width: 250,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      displayModeBar: false,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1],
        curve: "smooth", // Use "smooth" for smoother lines
      },
      title: {
        text: "Power",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  // Function to generate random data
  const generateRandomData = () => {
    const randomData = Array.from({ length: 9 }, () =>
      Math.floor(Math.random() * 200)
    );
    setChartData({
      ...chartData,
      series: [{ data: randomData }],
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
    <div id="powerline" style={{ width: "100%" }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Linegraphspower;
