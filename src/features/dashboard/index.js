import DashboardStats from "./components/DashboardStats";

import AmountStats from "./components/AmountStats";

import PageStats from "./components/PageStats";

import axios from "axios";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";

import UsersIcon from "@heroicons/react/24/outline/UsersIcon";

import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";

import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";

import UserChannels from "./components/UserChannels";

import ColumnChart from "./components/ColumnChart";

import LineChart1 from "./components/LineChart1";

import BarChart from "./components/BarChart";

import BarChart1 from "./components/BarChart1";

import DashboardTopBar from "./components/DashboardTopBar";

import { useDispatch, useSelector } from "react-redux";
import DoughnutChart from "./components/DoughnutChart";


import {
  setDateRange,
  setResponseDataZone1,
  setResponseDataZone2,
} from "../common/dateRangeSlice";
import { setMetric } from "../common/MetricSlice";
import { useState, useEffect } from "react";


import AppImages from "../../components/AppImages";
import { Select } from "antd";

import GasHeatMap from "./components/GasHeatMap";
import PowerHeatMap from "./components/PowerHeatMap";
import WaterHeatMap from "./components/WaterHeatMap";
import AirHeatMap from "./components/AirHeatMap";
import Live from "./components/Live";
import Linechart from "./components/Linechart";
import Reports from "../../pages/protected/Reports/Reports";
// import {  } from "chart.js/dist/chunks/helpers.core";
const { Option } = Select;
const statsData = [
  {
    title: "Power",

    icon: <img src={AppImages.energy} alt="Icon" className="w-5 h-5" />,

    value: "34.7kWh",

    description: "",
  },

  {
    title: "Gas",

    value: "34,545",

    icon: <img src={AppImages.gas} alt="Icon" className="w-4 h-4 mb-1" />,

    description: "",
  },

  {
    title: "Water",

    value: "415m²/h",

    icon: <img src={AppImages.water} alt="Icon" className="w-5 h-5 mb-2" />,

    description: "",
  },

  {
    title: "Compressed Air",

    value: "5.6Nm²/h",

    icon: <img src={AppImages.air} alt="Icon" className="w-5 h-5" />,

    description: "",
  },
];
const options = ["Power", "Gas", "Water", "Compressed Air"];
const defaultOption = "Power";
function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("Power");
  const dispatch = useDispatch();
  const { selectedMetric } = useSelector((state) => state.metric);

  const { selectedDateRange } = useSelector((state) => state.dateRange);

  const handleDateRangeChange = (newDateRange) => {
    dispatch(setDateRange(newDateRange));
  };
  const handleMetricChange = (newMetric) => {
    dispatch(setMetric(newMetric)); // Dispatch action to update metric in Redux store
    handleDateRangeChange("today");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let startDate, endDate;
        // Determine the start and end dates based on the selected date range

        if (selectedDateRange === "today") {
          // Get the current date for "Today"

          const currentDate = new Date().toISOString().slice(0, 10);

          startDate = currentDate;

          endDate = currentDate;

          console.log(startDate, endDate, "this is current date");
        } else if (selectedDateRange === "week") {
          const currentDate = new Date();
          const currentDayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, etc.

          // Calculate the difference between the current day of the week and Sunday (0)
          const daysUntilSunday =
            currentDayOfWeek === 0 ? 0 : 7 - currentDayOfWeek;

          // Calculate the start date (beginning of the week)
          const startOfCurrentWeek = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - daysUntilSunday
          );

          // Calculate the end date (end of the week)
          const endOfCurrentWeek = new Date(
            startOfCurrentWeek.getFullYear(),
            startOfCurrentWeek.getMonth(),
            startOfCurrentWeek.getDate() + 6
          );

          // Format the start and end dates
          startDate = startOfCurrentWeek.toISOString().slice(0, 10);
          endDate = endOfCurrentWeek.toISOString().slice(0, 10);

          console.log(startDate, endDate, "this is week");
        } else if (selectedDateRange === "month") {
          // Get the current month and year for "Month"

          const currentDate = new Date();

          startDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1
            }-01`;

          endDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1
            }-${currentDate.getDate()}`;

          console.log(startDate, endDate, "this is month");
        } else if (selectedDateRange === "year") {
          // Get the current year for "Year"

          const currentYear = new Date().getFullYear();

          startDate = `${currentYear}-01-01`;

          endDate = `${currentYear}-12-31`;

          console.log(startDate, endDate, "this is year");
        }

        // Make an API call to your backend with the selected date range

        const zone1response = await axios.get(
          `http://192.168.0.104:8080/energy/zone1?startDate=${startDate}&endDate=${endDate}`
        );
        const zone2response = await axios.get(
          `http://192.168.0.104:8080/energy/zone2?startDate=${startDate}&endDate=${endDate}`
        );

        console.log(zone1response.data, "Zone1data");
        console.log(zone2response.data);

        dispatch(setResponseDataZone1(zone1response.data.totalSum));
        dispatch(setResponseDataZone2(zone2response.data.totalSum));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts or when the selectedDateRange changes

    fetchData();
  }, [selectedDateRange]);

  return (
    <>
      <div className="mt-[-30px]">
        <div className=" dark:bg-gray-900 pt-2 p-2 rounded-sm">
          {/* {/* * ---------------------- Different stats content 1 -------------------------} */}

          <div className="grid lg:grid-cols-4 px-2 md:grid-cols-2 grid-cols-1 gap-4 pt-[7px] ">
            {statsData.map((d, k) => {
              return <DashboardStats key={k} {...d} colorIndex={k} />;
            })}
          </div>
        </div>

        <div className="bg-slate-200 dark:bg-gray-900 pt-[7px] pl-4 mt-1 pb-6 rounded-md shadow-lg ">
          {/* <div className="pt-3 px-5 m"> */}

          {/* * ---------------------- Select Period Content ------------------------- */}

          {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />  */}

          {/* <DashboardTopBar></DashboardTopBar>

      </div>  */}

          <div className=" flex wrap">
            <div className=" bg-base-100 dark:bg-gray-800  rounded-full mt-[4px] p-1 w-[259px] shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150">
              <ul class="flex flex-wrap text-sm font-medium gap-0  pb-[-200px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0 ">
                  <button
                    onClick={() => {
                      handleDateRangeChange("today");
                    }}
                    className={`inline-block p-2 ${selectedDateRange === "today" &&
                        selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Today
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => {
                      handleDateRangeChange("week");
                    }}
                    className={`inline-block p-2 ${selectedDateRange === "week" &&
                        selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Week
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => {
                      handleDateRangeChange("month");
                    }}
                    className={`inline-block p-2 ${selectedDateRange === "month" &&
                        selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Month
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => {
                      handleDateRangeChange("year");
                    }}
                    className={`inline-block px-[14px] py-2 ${selectedDateRange === "year" &&
                        selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Year
                  </button>
                </li>
              </ul>
            </div>

            <div className=" bg-base-100 dark:bg-gray-800 rounded-full p-1 w-auto shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150 justify-end ml-auto mr-3">
              <ul class="flex flex-wrap text-sm font-medium gap-0 pb-[-199px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0">
                  <button
                    onClick={() => {
                      handleDateRangeChange(selectedDateRange);
                      handleMetricChange("consumption"); // Update metric in Redux store
                    }}
                    className={`inline-block p-2 transition-transform transition-duration-500 ${selectedMetric === "consumption"
                        ? "text-white transition-transform transition-duration-500 rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Consumption
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => {
                      handleDateRangeChange(selectedDateRange);
                      handleMetricChange("Cost"); // Update metric in Redux store
                    }}
                    className={`inline-block p-2 transition ${selectedMetric === "Cost"
                        ? "text-white rounded-full bg-blue-900"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      }`}
                  >
                    Cost
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/** ---------------------- Different charts ------------------------- */}

          <div className="grid lg:grid-cols-4 mb-[-6px] pb-[6px] px-1 mt-[-14px] mr-4 gap-2 ">
            <ColumnChart />

            <BarChart />

            <LineChart1 />

            <BarChart1></BarChart1>
          </div>
        </div>

        <div className="dark:bg-gray-900 rounded-md bg-base-400 h-auto p-[-2] mt-6 shadow-lg dark:text-white !important">
          <div className=" m-4 pt-3">
          <div class="inline-flex rounded-md shadow-sm float-right py-[-1px]" role="group">
            <button type="button" class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg"  width="16"  height="19" viewBox="0 0 24 24" className="mr-3 ">
                <path fill="currentColor" d="M2 6.21c0-1.984 0-2.977.659-3.593C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.617C11 3.233 11 4.226 11 6.21v11.58c0 1.984 0 2.977-.659 3.593C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79V6.21Zm11 9.19c0-2.074 0-3.111.659-3.756C14.318 11 15.379 11 17.5 11c2.121 0 3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756c-.659.644-1.72.644-3.841.644c-2.121 0-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6v-2.2Zm0-9.9c0-1.087 0-1.63.171-2.06a2.293 2.293 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06c0 1.087 0 1.63-.171 2.06a2.293 2.293 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.293 2.293 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5Z" /></svg>
              Widget
            </button>
            <button type="button" class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24 " className="mr-3"><path fill="currentColor" d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"/></svg>
              History
            </button>
            <button type="button" class="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" className="mr-3"><mask id="ipSChartHistogramTwo0"><g fill="none"><path fill="#fff" fill-rule="evenodd" d="M4 42h40H4Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42h40"/><path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M8 28h6v14H8zm13-10h6v24h-6zM34 6h6v36h-6z"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSChartHistogramTwo0)"/></svg>
              Histogram
            </button>
          </div>

          <Select
            style={{ width: 200 }}
            placeholder="Select"
            defaultValue={defaultOption}
            value={selectedOption} // Set the selected option
            onChange={(value) => setSelectedOption(value)}
          >
            {options.map((option) => (
              <Option key={option}>{option}</Option>
            ))}
          </Select>
          </div>
          {selectedOption === "Power" && <PowerHeatMap ></PowerHeatMap>}
          {selectedOption === "Gas" && <GasHeatMap></GasHeatMap>}
          {selectedOption === "Water" && <AirHeatMap></AirHeatMap>}
          {selectedOption === "Compressed Air" && <WaterHeatMap></WaterHeatMap>}
        </div>
        <div className=" flex wrap">
        <div className=" grid grid-cols-1 dark:bg-gray-900 rounded-md bg-base-100 mt-6 shadow-lg w-full">
       
       <Live></Live>
      
          <div className="bg-white">
        <Linechart></Linechart>
        </div>
</div>
</div>

      </div>
    </>
  )
}

export default Dashboard;
