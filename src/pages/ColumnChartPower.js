import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = (props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Inflation',
        data: [], // Initialize with an empty array
      },
    ],
  });

  useEffect(() => {
    // Function to generate random data points
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 12; i++) {
        data.push(Math.random() * 10); // Generate random values between 0 and 10
      }
      return data;
    };

    // Update the chart data with the generated random data
    setChartData({
      series: [
        {
          name: 'Inflation',
          data: generateRandomData(),
        },
      ],
    });

    // Set up an interval to update data every few seconds (e.g., every 5 seconds)
    const intervalId = setInterval(() => {
      setChartData({
        series: [
          {
            name: 'Inflation',
            data: generateRandomData(),
          },
        ],
      });
    }, 5000); // Update data every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    // Options for your chart (unchanged)
    // ...
  };

  return (
    <div id="ColumnChart">
      <ReactApexChart options={options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default ColumnChart;
