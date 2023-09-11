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

import { showNotification } from "../common/headerSlice";

import DoughnutChart from "./components/DoughnutChart";

import { setDateRange, setResponseData } from "../common/dateRangeSlice";

import { useState, useEffect } from "react";

const statsData = [
  {
    title: "Power",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="grey"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          className="w-6 h-6"
        />
      </svg>
    ),

    value: "34.7kWh",

    description: "↗︎ 2300 (22%)",
  },

  {
    title: "Gas",

    value: "$34,545",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="grey"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
          className="w-6 h-6"
        />
      </svg>
    ),

    description: "Current month",
  },

  {
    title: "Water",

    value: "450",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="grey"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          className="w-6 h-6"
        />
      </svg>
    ),

    description: "50 in hot leads",
  },

  {
    title: "Compressed Air",

    value: "5.6k",

    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="grey"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          className="w-6 h-6"
        />
      </svg>
    ),

    description: "↙ 300 (18%)",
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  // const updateDashboardPeriod = (newRange) => {

  //   // Dashboard range changed, write code to refresh your values

  //   dispatch(

  //     showNotification({

  //       message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,

  //       status: 1,

  //     })

  //   );

  // };

  const { selectedDateRange } = useSelector((state) => state.dateRange);

  const handleDateRangeChange = (newDateRange) => {
    dispatch(setDateRange(newDateRange));
  };

  useEffect(() => {
    // Define a function to fetch data from the backend based on the selected date range

    const fetchData = async () => {
      try {
        let startDate, endDate;

        // Determine the start and end dates based on the selected date range

        if (selectedDateRange === "today") {
          // Get the current date for "Today"

          const currentDate = new Date().toISOString().slice(0, 10);

          startDate = currentDate;

          endDate = currentDate;

          console.log(startDate, endDate, "current date");
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

        const response = await axios.get(
          `http://192.168.0.104:8080/energy/today?startDate=${startDate}&endDate=${endDate}`
        );

        console.log(response.data, "this is response from index.js");

        dispatch(setResponseData(response.data));

        // Handle the response data here if needed

        // For example, you can set it in the component state
      } catch (error) {
        // Handle any errors that occur during the API call

        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts or when the selectedDateRange changes

    fetchData();
  }, [selectedDateRange]);

  return (
    <>
      <div className="mt-[-30px]">
        <div className="bg-slate-200 mt-3 p-3 rounded-md">
          {/* {/* * ---------------------- Different stats content 1 -------------------------} */}

          <div className="grid lg:grid-cols-4  px-2 md:grid-cols-2 grid-cols-1 gap-4">
            {statsData.map((d, k) => {
              return <DashboardStats key={k} {...d} colorIndex={k} />;
            })}
          </div>
        </div>

        <div className="bg-slate-200 pt-3 pl-4 mt-3 pb-8 rounded-md">
          {/* <div className="pt-3 px-5 m"> */}

          {/* * ---------------------- Select Period Content ------------------------- */}

          {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />  */}

          {/* <DashboardTopBar></DashboardTopBar>

      </div> */}

          <div className="flex flex wrap">
            <div className="bg-slate-300 rounded-full  p-1 w-[259px] shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150">
              <ul class="flex flex-wrap text-sm font-medium gap-0  pb-[-200px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0 ">
                  <button
                    onClick={() => handleDateRangeChange("today")}
                    className={`inline-block p-2 ${
                      selectedDateRange === "today"
                        ? "text-white rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Today
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => handleDateRangeChange("Week")}
                    className={`inline-block p-2 ${
                      selectedDateRange === "Week"
                        ? "text-white rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Week
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => handleDateRangeChange("month")}
                    className={`inline-block p-2 ${
                      selectedDateRange === "month"
                        ? "text-white rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Month
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => handleDateRangeChange("year")}
                    className={`inline-block px-[14px] py-2 ${
                      selectedDateRange === "year"
                        ? "text-white rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Year
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-slate-300 rounded-full p-1 w-auto shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150 justify-end ml-auto mr-3">
              <ul class="flex flex-wrap text-sm font-medium gap-0 pb-[-199px] text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2 p-0">
                  <button
                    onClick={() => handleDateRangeChange("Consumption")}
                    className={`inline-block p-2 transition-transform transition-duration-500 ${
                      selectedDateRange === "Consumption"
                        ? "text-white transition-transform transition-duration-500 rounded-full bg-blue-600"
                        : "rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Consumption
                  </button>
                </li>

                <li class="mr-2">
                  <button
                    onClick={() => handleDateRangeChange("Cost")}
                    className={`inline-block p-2 transition ${
                      selectedDateRange === "Cost"
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

          <div className="grid lg:grid-cols-4 mt-[-10px] px-1 mr-4 gap-5">
            <ColumnChart />

            <BarChart />

            <LineChart1 />

            <BarChart1></BarChart1>
          </div>

          {/** ---------------------- Different stats content 2 ------------------------- */}

          <div className="grid lg:grid-cols-2 mt-3 px-6 grid-cols-1 gap-6">
            {/* <AmountStats /> */}

            {/* <PageStats /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
