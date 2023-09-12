import React from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'


function generateData(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = "w" + (i + 1).toString();
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}
function ApexChart() {

  const seriesData = [
    {
        name: 'Metric1',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric2',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric3',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric4',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric5',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric6',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric7',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric8',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric9',
        data: generateData(18, {
          min: 0,
          max: 90,
        }),
      },
   
  ];

  const chartOptions = {
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5, // Adjust the intensity of the color
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 90,
              name: 'zone 1',
              color: '#008FFB', // Replace this with your desired color
            },
            {
              from: 0,
              to: 90,
              name: 'zone 2',
              color: '#008FFB', // Replace this with your desired color
            },
          ],
        },
      },
    },
  };
  

  return (
    <div id="chart">
      
      <ReactApexChart
        options={chartOptions}
        series={seriesData}
        type="heatmap"
        height={350}
      />
    </div>
  );
}
const HeatMap = () => {
  return <ApexChart />;
};

export default HeatMap;
