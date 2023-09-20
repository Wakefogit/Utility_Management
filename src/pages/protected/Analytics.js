import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from "react-redux";
import DashboardTopBar from "../../features/dashboard/components/DashboardTopBar";
import { setPageTitle } from "../../features/common/headerSlice";

function generateData(count, yrange) {
  const series = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const label = `${day}-${month}`;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: label,
      y: y,
    });
  }
  return series;
}

function ApexChart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Analytics" }));
  }, []);

  const seriesData = [
    {
      name: "Heatmap Data",
      data: generateData(7, { min: -30, max: 55 }),
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
    xaxis: {
      type: "category",
    },
    yaxis: {
      type: "category",
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

const Analytics = () => {
  return (
    <div>
      <DashboardTopBar />
      <ApexChart />
    </div>
  );
};

export default Analytics;
