import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './ApexChart.css';

const ApexChart = () => {
  // Generate timestamps for the x-axis from 00:00 to 23:00 at 15-minute intervals
  const generateTimestamps = () => {
    const timestamps = [];
    for (let hour = 0; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const timestamp = new Date();
        timestamp.setHours(hour, minute, 0, 0);
        timestamps.push(timestamp.getTime());
      }
    }
    return timestamps;
  };

  const [series] = useState([
    {
      name: 'kWh',
      data: generateTimestamps().map((timestamp) => ({
        x: timestamp,
        y: Math.random() * 100 // Replace with your actual data
      }))
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'area',
      stacked: false,
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 0,
    },
    title: {
      text: 'Live Data',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        },
      },
      title: {
        text: 'Power'
      },
    },
    xaxis: {
      type: 'datetime',
      tickAmount: 24, // Display 24 ticks (1-hour intervals)
      labels: {
        datetimeUTC: false, // Prevent UTC conversion
        formatter: function (val) {
          const date = new Date(val);
          const hours = date.getHours();
          const minutes = date.getMinutes();
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
      },
      minInterval: 60 * 60 * 1000 + 1, // Display x-axis labels at 60-minute intervals
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return new Date(val).toLocaleTimeString(); // Format the tooltip timestamp as desired
        }
      },
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0)
        }
      }
    },
    plotOptions: {
      area: {
        strokeWidth: 1, // Set the stroke width to the minimum value
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
}

export default ApexChart;
