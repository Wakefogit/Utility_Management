import React from "react";

import ReactApexChart from "react-apexcharts";

import { useDispatch } from 'react-redux';

import { useEffect } from 'react'

 

 

function generateData(count, yrange) {

  let i = 0;

  const series = [];

  const startTime = "00:00";

  const endTime = "23:00"; // End time set to 23:00 (11:00 PM)

  const intervalInMinutes = 60; // 1 hour in minutes

 

  while (i < count) {

    const timePartsStart = startTime.split(":");

    const hoursStart = parseInt(timePartsStart[0], 10);

    const minutesStart = parseInt(timePartsStart[1], 10);

 

    const timePartsEnd = endTime.split(":");

    const hoursEnd = parseInt(timePartsEnd[0], 10);

    const minutesEnd = parseInt(timePartsEnd[1], 10);

 

    const newTime = new Date();

    newTime.setHours(hoursStart);

    newTime.setMinutes(minutesStart + i * intervalInMinutes);

 

    if (newTime.getHours() <= hoursEnd) {

      const formattedTime = newTime.toLocaleTimeString('en-US', {

        hour: '2-digit',

        minute: '2-digit',

        hour12: false, // Force 24-hour format

      });

 

      // Replace "24:00" with "00:00"

      const adjustedTime = formattedTime.replace('24:00', '00:00');

 

      const y =

        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({

        x: adjustedTime,

        y: y,

      });

    }

   

    i++;

  }

 

 

 

  return series;

}

function ApexChart() {

 

  const seriesData = [

    {

        name: 'Mo 02/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Tu 03/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'We 04/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Th 05/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Fr 06/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Sa 07/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Su 08/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

      {

        name: 'Mo 09/09',

        data: generateData(24, {

          min: 0,

          max: 80,

        }),

      },

     

     

   

  ];

 

  const chartOptions = {

    plotOptions: {

      heatmap: {

        // shadeIntensity: 0.5, // Adjust the intensity of the color

        colorScale: {

          ranges: [

            {

              from: 0,

              to: 20,

              name: '0Wh',

              color: ' #DBDCDA', // Replace this with your desired color

            },

            {

              from: 21,

              to: 30,

              name: '100Wh',

              color: '#BABABA', // Replace this with your desired color

            },

           

            {

              from: 31,

              to: 50,

              name: '200Wh',

              color: '#A8A7AC', // Replace this with your desired color

            },

            {

              from: 51,

              to: 70,

              name: '300Wh',

              color: '#63687A', // Replace this with your desired color

            },

            {

              from: 71,

              to: 80,

              name: '400Wh',

              color: '#4D535E', // Replace this with your desired color

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

const HeatMap3 = () => {

  return <ApexChart />;

};

 

export default HeatMap3;

 