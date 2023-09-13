import React from "react";

import ReactApexChart from "react-apexcharts";

import TitleCard from "../../../components/Cards/TitleCard";

import { useSelector } from "react-redux";

function ColumnChart() {
  const { responseDataZone1, responseDataZone2 } = useSelector(
    (state) => state.dateRange
  );

  const { selectedDateRange } = useSelector((state) => state.dateRange);


  // console.log(responseDataZone1, "this is zone 1");
  // console.log(responseDataZone2, "this is zone 2");
  // console.log(selectedDateRange, "this is date range");

  let startDate, endDate;

  // Determine the start and end dates based on the selected date range

  // Get the current date

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();

  const currentMonth = currentDate.getMonth();

  const currentDay = currentDate.getDate();

  // Determine the start and end dates based on the selected date range

  if (selectedDateRange === "today") {
    // Display the previous date

    const previousDate = new Date(currentYear, currentMonth, currentDay - 1);

    startDate = previousDate.toLocaleDateString("default", {
      month: "short",

      day: "numeric",
    });

    endDate = currentDate.toLocaleDateString("default", {
      month: "short",

      day: "numeric",
    });
  } else if (selectedDateRange === "week") {
    const currentWeekStart = new Date(
      currentYear,
      currentMonth,
      currentDay - currentDate.getDay()
    );

    // Calculate the end date for the current week (Saturday)

    const currentWeekEnd = new Date(currentWeekStart);

    currentWeekEnd.setDate(currentWeekEnd.getDate() + 6);

    startDate = currentWeekStart.toLocaleDateString("default", {
      month: "short",

      day: "numeric",
    });

    endDate = currentWeekEnd.toLocaleDateString("default", {
      month: "short",

      day: "numeric",
    });
  } else if (selectedDateRange === "month") {
    // Display the previous month

    const previousMonth = new Date(currentYear, currentMonth - 1, currentDay);

    startDate = previousMonth.toLocaleDateString("default", { month: "long" });

    endDate = currentDate.toLocaleDateString("default", { month: "long" });
  } else if (selectedDateRange === "year") {
    // Display the previous year

    const previousYear = currentYear - 1;

    startDate = previousYear.toString();

    endDate = currentYear;
  }

  const chartOptions = {
    chart: {
      type: "bar",
      height: 180,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
        toolbar: null,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: [" "],
    },
    xaxis: {
      categories: ["Zone 1", "Zone 2"],
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
      enabled: true, // Enable tooltip
      y: {
        formatter: function (val) {
          return `${val}`; // You can customize the formatting here
        },
      },
    },
  };

  const chartSeries = [
    {
      name: startDate,
      data: [responseDataZone1, responseDataZone2],
    },
    {
      name: endDate,
      data: [70000,80000],
    },
  ];

  return (
    <TitleCard title={"Power"}>
      <style>
        {`
          .apexcharts-menu-icon {
            display: none !important;
          }

 

        `}
      </style>

      <div id="chart">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={170}
        />
      </div>
    </TitleCard>
  );
}

export default ColumnChart;
