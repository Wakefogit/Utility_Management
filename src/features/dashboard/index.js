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
import HeatMap from "./components/HeatMap";

import AppImages from "../../global/AppImages";
import { Select } from "antd";
import HeatMap1 from "./components/HeatMap1";
import HeatMap2 from "./components/HeatMap2";
import HeatMap3 from "./components/HeatMap3";
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

          startDate = `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
          }-01`;

          endDate = `${currentDate.getFullYear()}-${
            currentDate.getMonth() + 1
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
        <div className=" dark:bg-gray-900  mt-3 p-2 rounded-sm">
          {/* {/* * ---------------------- Different stats content 1 -------------------------} */}

          <div className="grid lg:grid-cols-4  px-2 md:grid-cols-2 grid-cols-1 gap-4">
            {statsData.map((d, k) => {
              return <DashboardStats key={k} {...d} colorIndex={k} />;
            })}
          </div>
        </div>

        <div className="bg-slate-200 dark:bg-gray-900 pt-3 pl-4 mt-3 pb-8 rounded-sm ">
          {/* <div className="pt-3 px-5 m"> */}

          {/* * ---------------------- Select Period Content ------------------------- */}

          {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />  */}

          {/* <DashboardTopBar></DashboardTopBar>

      </div> */}

          <div className=" flex wrap">
            <div className=" bg-slate-200 dark:bg-gray-800  rounded-full  p-1 w-[259px] shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150">
              <ul class="flex flex-wrap text-sm font-medium gap-0  pb-[-200px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0 ">
                  <button
                    onClick={() => {
                      handleDateRangeChange("today");
                    }}
                    className={`inline-block p-2 ${
                      selectedDateRange === "today" &&
                      selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-600"
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
                    className={`inline-block p-2 ${
                      selectedDateRange === "week" &&
                      selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-600"
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
                    className={`inline-block p-2 ${
                      selectedDateRange === "month" &&
                      selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-600"
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
                    className={`inline-block px-[14px] py-2 ${
                      selectedDateRange === "year" &&
                      selectedMetric === "consumption"
                        ? "text-white rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Year
                  </button>
                </li>
              </ul>
            </div>

            <div className=" bg-slate-200 dark:bg-gray-800 rounded-full p-1 w-auto shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150 justify-end ml-auto mr-3">
              <ul class="flex flex-wrap text-sm font-medium gap-0 pb-[-199px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0">
                  <button
                    onClick={() => {
                      handleDateRangeChange(selectedDateRange);
                      handleMetricChange("consumption"); // Update metric in Redux store
                    }}
                    className={`inline-block p-2 transition-transform transition-duration-500 ${
                      selectedMetric === "consumption"
                        ? "text-white transition-transform transition-duration-500 rounded-full bg-blue-600"
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
                    className={`inline-block p-2 transition ${
                      selectedMetric === "Cost"
                        ? "text-white rounded-full bg-blue-600"
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

          <div className="grid lg:grid-cols-4 mt-[-10px] px-1 mr-4 gap-5 ">
            <ColumnChart />

            <BarChart />

            <LineChart1 />

            <BarChart1></BarChart1>
          </div>
        </div>

        {/** ---------------------- Different stats content 2 ------------------------- */}

        <div className=" dark:bg-gray-900 pt-3 pl-4 mt-3 pb-8 rounded-sm">
          <div className="grid lg:grid-cols-1 mt-3 px-6 grid-cols-1 gap-6">
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
           { selectedOption == "Power" &&<HeatMap ></HeatMap>}
           { selectedOption == "Gas" &&<HeatMap1></HeatMap1>}
           { selectedOption == "Water" &&<HeatMap2></HeatMap2>}
           { selectedOption == "Compressed Air" &&<HeatMap3></HeatMap3>}

            {/* <AmountStats /> */}

            {/* <PageStats /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
