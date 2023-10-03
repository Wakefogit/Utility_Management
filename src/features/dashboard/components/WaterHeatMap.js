import React from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

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
      const formattedTime = newTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Force 24-hour format
      });

      // Replace "24:00" with "00:00"
      const adjustedTime = formattedTime.replace("24:00", "00:00");

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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentDate = new Date();

        // Calculate the end date (end of the previous week)
        const endOfPreviousWeek = new Date(currentDate);
        endOfPreviousWeek.setDate(currentDate.getDate() - 1);

        // Calculate the start date (beginning of the previous week, 7 days ago)
        const startOfPreviousWeek = new Date(endOfPreviousWeek);
        startOfPreviousWeek.setDate(endOfPreviousWeek.getDate() - 6);

        // Format the start and end dates
        const startDate = formatDate(startOfPreviousWeek);
        const endDate = formatDate(endOfPreviousWeek);

        console.log(startDate, endDate, "this is the previous week");

        function formatDate(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");
          return `${year}-${month}-${day}`;
        }

        // Make an API call to fetch data for the previous week
        // Modify this URL to match your API endpoint
        const response = await axios.get(
          `http://192.168.10.8:8080/energy/zone1heatmap?startDate=${startDate}&endDate=${endDate}`
        );

        console.log(response.data);

        // Dispatch actions or set the data in your component state as needed
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); //
  const currentDate = new Date();
  const endOfPreviousWeek = new Date(currentDate);
  endOfPreviousWeek.setDate(currentDate.getDate() - 1);
  const startOfPreviousWeek = new Date(endOfPreviousWeek);
  startOfPreviousWeek.setDate(endOfPreviousWeek.getDate() - 6);

  const seriesData = [];
  let currentDateInLoop = new Date(startOfPreviousWeek);

  while (currentDateInLoop <= endOfPreviousWeek) {
    const formattedDate = formatDateForChart(currentDateInLoop);
    seriesData.push({
      name: formattedDate,
      data: generateData(24, {
        min: 0,
        max: 80,
      }),
    });
    currentDateInLoop.setDate(currentDateInLoop.getDate() + 1);
  }

  // Function to format a date as "Mo 02/09" format
  function formatDateForChart(date) {
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      date.getDay()
    ];
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${dayOfWeek} ${day}/${month}`;
  }

  const chartOptions = {
    plotOptions: {
      heatmap: {
        // shadeIntensity: 0.5, // Adjust the intensity of the color
        colorScale: {
          ranges: [
            {
              from: 0,

              to: 20,

              name: "0Wh",

              color: " #DBDCDA", // Replace this with your desired color
            },

            {
              from: 21,

              to: 30,

              name: "100Wh",

              color: "#BABABA", // Replace this with your desired color
            },

            {
              from: 31,

              to: 50,

              name: "200Wh",

              color: "#A8A7AC", // Replace this with your desired color
            },

            {
              from: 51,

              to: 70,

              name: "300Wh",

              color: "#63687A", // Replace this with your desired color
            },

            {
              from: 71,

              to: 80,

              name: "400Wh",

              color: "#4D535E", // Replace this with your desired color
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
// const options = ["Power", "Gas", "Water", "Compressed Air"];
// const defaultOption = "Power";
const WaterHeatMap = () => {
  return (
    <div>
      <ApexChart />;
    </div>
  );
};

export default WaterHeatMap;
