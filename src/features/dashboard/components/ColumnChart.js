import React from "react";

import ReactApexChart from "react-apexcharts";

import TitleCard from "../../../components/Cards/TitleCard";

import { useSelector } from "react-redux";

function ColumnChart() {
  const { responseData } = useSelector((state) => state.dateRange);
  const { selectedDateRange } = useSelector((state) => state.dateRange);
  console.log(responseData, "this is response data frim column chart");
  console.log(selectedDateRange, "this is date range");
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
  } else if (selectedDateRange === "Week"){
    const currentWeekStart = new Date(currentYear, currentMonth, currentDay - currentDate.getDay());

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
  }else if (selectedDateRange === "month") {
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

      height: 150,
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
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

      colors: ["transparent"],
    },

    xaxis: {
      categories: [startDate,endDate],
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

      data: [44, 55],
     
    },

    {
      name: "Revenue",

      data: [76, 85],
    

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
          height={150}
          
        />
      </div>
    </TitleCard>
  );
}

export default ColumnChart;
