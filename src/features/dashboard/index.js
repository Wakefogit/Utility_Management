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

import AppImages from "../../global/AppImages";
import { Select } from "antd";

import GasHeatMap from "./components/GasHeatMap";
import PowerHeatMap from "./components/PowerHeatMap";
import WaterHeatMap from "./components/WaterHeatMap";
import AirHeatMap from "./components/AirHeatMap";
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

        if (selectedDateRange === "today") {
          const currentDate = new Date().toISOString().slice(0, 10);
          startDate = currentDate;
          endDate = currentDate;
        } else if (selectedDateRange === "week") {
          const currentDate = new Date();
          const currentDayOfWeek = currentDate.getDay();
          const startOfCurrentWeek = new Date(currentDate);
          startOfCurrentWeek.setDate(currentDate.getDate() - currentDayOfWeek);
          const endOfCurrentWeek = new Date(currentDate);
          endOfCurrentWeek.setDate(
            currentDate.getDate() + (6 - currentDayOfWeek)
          );
          startDate = startOfCurrentWeek.toISOString().slice(0, 10);
          endDate = endOfCurrentWeek.toISOString().slice(0, 10);
        } else if (selectedDateRange === "month") {
          const currentDate = new Date();
          const year = currentDate.getFullYear();
          const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
          startDate = `${year}-${month}-01`;
          endDate = `${year}-${month}-${currentDate.getDate()}`;
        } else if (selectedDateRange === "year") {
          const currentYear = new Date().getFullYear().toString();
          startDate = `${currentYear}-01-01`;
          endDate = `${currentYear}-12-31`;
        }

        console.log(startDate, endDate, "this is outside value");

        const zone1response = await axios.get(
          `http://192.168.0.104:8080/energy/zone1?startDate=${startDate}&endDate=${endDate}`
        );
        const zone2response = await axios.get(
          `http://192.168.0.104:8080/energy/zone2?startDate=${startDate}&endDate=${endDate}`
        );

        console.log(zone1response.data, "Zone1data");
        console.log(zone2response.data, "Zone2data");

        dispatch(setResponseDataZone1(zone1response.data.totalSum));
        dispatch(setResponseDataZone2(zone2response.data.totalSum));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedDateRange]);

  return (
    <>
      <div className="mt-[-30px]">
        <div className=" dark:bg-gray-900 mt-3 p-2 rounded-sm">
          {/* {/* * ---------------------- Different stats content 1 -------------------------} */}

          <div className="grid lg:grid-cols-4 px-2 md:grid-cols-2 grid-cols-1 gap-4">
            {statsData.map((d, k) => {
              return <DashboardStats key={k} {...d} colorIndex={k} />;
            })}
          </div>
        </div>

        <div className="bg-slate-200 dark:bg-gray-900 pt-3 pl-4 mt-3 pb-8 rounded-md shadow-lg ">
          {/* <div className="pt-3 px-5 m"> */}

          {/* * ---------------------- Select Period Content ------------------------- */}

          {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />  */}

          {/* <DashboardTopBar></DashboardTopBar>

      </div> */}

          <div className=" flex wrap">
            <div className=" bg-base-100 dark:bg-gray-800  rounded-full  p-1 w-[259px] shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150">
              <ul class="flex flex-wrap text-sm font-medium gap-0  pb-[-200px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0 ">
                  <button
                    onClick={() => {
                      handleDateRangeChange("today");
                    }}
                    className={`inline-block p-2 ${
                      selectedDateRange === "today" &&
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
                    className={`inline-block p-2 ${
                      selectedDateRange === "week" &&
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
                    className={`inline-block p-2 ${
                      selectedDateRange === "month" &&
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
                    className={`inline-block px-[14px] py-2 ${
                      selectedDateRange === "year" &&
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
                    className={`inline-block p-2 transition-transform transition-duration-500 ${
                      selectedMetric === "consumption"
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
                    className={`inline-block p-2 transition ${
                      selectedMetric === "Cost"
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

          <div className="grid lg:grid-cols-4 mt-[-10px] px-1 mr-4 gap-2 ">
            <ColumnChart />

            <BarChart />

            <LineChart1 />

            <BarChart1></BarChart1>
          </div>
        </div>

        {/** ---------------------- Different stats content 2 ------------------------- */}

        <div className=" dark:bg-gray-900 bg-base-300 pt-3 pl-4 mt-3 pb-3 rounded-sm shadow-lg">
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
            {selectedOption === "Power" && <PowerHeatMap></PowerHeatMap>}
            {selectedOption === "Gas" && <GasHeatMap></GasHeatMap>}
            {selectedOption === "Water" && <AirHeatMap></AirHeatMap>}
            {selectedOption === "Compressed Air" && (
              <WaterHeatMap></WaterHeatMap>
            )}

            {/* <AmountStats /> */}

            {/* <PageStats /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
