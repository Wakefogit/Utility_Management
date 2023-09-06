import React from "react";
import ReactApexChart from "react-apexcharts";
import DashboardTopBar from "../features/dashboard/components/DashboardTopBar";
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
      name: "Jan",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Feb",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Mar",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Apr",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "May",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Jun",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "July",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Aug",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Sep",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Oct",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Nov",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: "Dec",
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },   
   
  ];

  const chartOptions = {
    chart: {
      height: 350,
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: "low",
              color: "#00A100",
            },
            {
              from: 6,
              to: 20,
              name: "medium",
              color: "#128FD9",
            },
            {
              from: 21,
              to: 45,
              name: "high",
              color: "#FFB200",
            },
            {
              from: 46,
              to: 55,
              name: "extreme",
              color: "#FF0000",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    // title: {
    //   text: "HeatMap Chart with Color Range",
    // },
  };

  return (
    <div id="chart">
      <DashboardTopBar></DashboardTopBar>
      <ReactApexChart
        options={chartOptions}
        series={seriesData}
        type="heatmap"
        height={350}
      />
    </div>
  );
}
const Analytics = () => {
  return <ApexChart />;
};

export default Analytics;
