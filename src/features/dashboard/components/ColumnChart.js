import React from "react";

import ReactApexChart from "react-apexcharts";

import TitleCard from "../../../components/Cards/TitleCard";

import { useSelector } from "react-redux";

function ColumnChart() {

  const {responseData} = useSelector((state) => state.dateRange);

  console.log(responseData,"this is response data");

  const chartOptions = {

    chart: {

      type: "bar",

      height: 300,

    },

    plotOptions: {

      bar: {

        horizontal: false,

        columnWidth: "55%",

        endingShape: "rounded",

      },

    },

    dataLabels: {

      enabled: false,

    },

    stroke: {

      show: true,

      width: 2,

      colors: ["transparent"],

    },

    xaxis: {

      categories: [

        "Previous Day",      

        "Today",

      ],

    },

    yaxis: {

      // title: {

      //   text: "$ (thousands)",

      // },

    },

    fill: {

      opacity: 1,

    },

    tooltip: {

      y: {

        formatter: function () {

          return "Value";

        },

      },

    },

  };

 

  const chartSeries = [

    {

      name: "Net Profit",

      data: [44, 55 ],

    },

    {

      name: "Revenue",

      data: [76, 85],

    },

   

  ];

 

  return (

    <TitleCard title={"Power"}>

      <div id="chart">

        <ReactApexChart

          options={chartOptions}

          series={chartSeries}

          type="bar"

          height={300}

        />

      </div>

    </TitleCard>

  );

}

 

export default ColumnChart;