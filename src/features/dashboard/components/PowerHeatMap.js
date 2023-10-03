import React from "react";
import ReactApexChart from "react-apexcharts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
function ApexChart() {
  const [heatmapvalue, setHeatMapValue] = useState([]);
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
        console.log(
          startDate,
          endDate,
          "this is start & end inside powerheatmap"
        );
        // Make an API call to fetch data for the previous week
        // Modify this URL to match your API endpoint
        const response = await axios.get(
          `http://192.168.10.8:8080/energy/zone1heatmap?startDate=${startDate}&endDate=${endDate}`
        );

        console.log(response.data.rows,"this is newvalue");
        let dataArray = response.data; // Assuming response.data is an array
        if (!Array.isArray(dataArray)) {
          // If response.data is not an array, try to extract the array from a different property
          // Replace 'dataField' with the actual property name containing your data
          dataArray = response.data.rows;
        }
  
        // Extract and format data from the array
        const formattedData = dataArray.map(item => ({
          x: item._time.split('T')[1].split(':')[0], // Extract the hour
          y: item._value, // Replace 'someValue' with the actual value field
        }));
     
        // setHeatmapData(formattedData);
 
         setHeatMapValue(formattedData);
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
      data: generateData(
        24,
        {
          min: 0,
          max: 50000,
        },
        heatmapvalue
      ),
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
  function generateTimeCategories() {
    const categories = [];
    for (let i = 0; i < 24; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      categories.push(`${hour}:00`);
    }
    return categories;
  }
  function generateData() {
    const series = heatmapvalue.map(item => ({
      x: item.x, // Hour
      y: item.y, // Value
    }));
  
    return series;
  }
  const chartOptions = {
    xaxis: {
      type: "category",
      categories: generateTimeCategories(),
    },
    plotOptions: {
      heatmap: {
        // shadeIntensity: 0.5, // Adjust the intensity of the color
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 100,
              name: "0Wh",
              color: "#EEE3CF", // Replace this with your desired color
            },
            {
              from: 100,
              to: 200,
              name: "100Wh",
              color: "#DEBB85", // Replace this with your desired color
            },

            {
              from: 201,
              to: 300,
              name: "200Wh",
              color: "#D2995B", // Replace this with your desired color
            },
            {
              from: 301,
              to: 400,
              name: "300Wh",
              color: "#BD7A32", // Replace this with your desired color
            },
            {
              from: 401,
              to: 500,
              name: "100Wh",
              color: "#964E15", // Replace this with your desired color
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
const PowerHeatMap = () => {
  return (
    <div>
      <ApexChart />
    </div>
  );
};

export default PowerHeatMap;
