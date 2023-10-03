import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker"; // Add this line
import "react-datepicker/dist/react-datepicker.css"; // Add this line to include the default styles
import { setPageTitle } from "../features/common/headerSlice";
import { useDispatch } from "react-redux";
import "flowbite/dist/flowbite.css"; // Import flowbite CSS
import "react-datepicker/dist/react-datepicker.css"; // Import react-datepicker CSS
import { Select } from "antd";
import PieChartPower from "./PieChartPower";
import Linegraphspower from "./Linegraphspower";
import ColumnChart from "./ColumnChartPower";
import PowerHeatMap from "../features/dashboard/components/PowerHeatMap";
import SortLineGraph from "./sortlinegraph";
import FullWidthTabs from "./Tabset";

const { Option } = Select;
const options = [
  "Line graph",
  "Pie graph",
  "Column graph",
  "Heat Map",
  "Sorted Line graph",
];
const defaultOption = "Line grap";
const Power = () => {
  const [selectedOption, setSelectedOption] = useState("Line graph");
  const dispatch = useDispatch();
  const [selectedParameter, setSelectedParameter] = useState("default");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    dispatch(setPageTitle({ title: "Power" }));
  
  }, [dispatch]);

  const handleParameterChange = (event) => {
    setSelectedParameter(event.target.value);
  };

  return (
    <div className="flex">
    
      <div>
     
         <FullWidthTabs/>
      </div>
      <div>
    <div>
      <nav className="flex items-center bg-gray-200 p-2 mb-5 mt-auto w-full h-18">
        <ul className="flex ml-auto mt-1/2">
          <li>
            <ul className="flex">
              <li>
                <div
                  date-rangepicker
                  className =" mt-3 ml-4"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pb-1 pointer-events-none autofill:off">

                    </div>
                    <DatePicker
                      selected={startDate} // Bind the end date to the state
                      onChange={(date) => setStartDate(date)} // Update the end date state
                      name="end"
                      className="bg-gray-50 border border-gray-300 mt-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="date"
                      placeholderText="Select date Start"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2.5 pb-1 pointer-events-none autofill:off">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 mt-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="mt-4 mb-2 mr-2 ml-2 pl-3">
                  <span className="text-black-500 font-semibold">to</span>
                </div>
              </li>
              <li>
                <div
                  date-rangepicker
                  className="mt-3 ml-3"
                >
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 pb-1 pointer-events-none autofill:off text-center"></div>
                    <DatePicker
                      selected={endDate} // Bind the end date to the state
                      onChange={(date) => setEndDate(date)} // Update the end date state
                      name="end"
                      className="bg-gray-50 border border-gray-300 mt-2.5 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="date"
                      placeholderText="Select date end"
                    />
                    <div className="absolute inset-y-0 left-0 pl-2.5 pb-1 pointer-events-none autofill:off">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 my-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <button className="mt-[10px] p-[-4px]">
              <a
                href="#_"
                className="relative mt-2.5 mx-4 my-3 pb-1 inline-flex items-center justify-center pl-3 px-3 py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-transparent rounded-md shadow-sm group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease float-right">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <div className="absolute  flex items-center justify-center w-full h-full text-blue-700 bg-slate-50 transition-all duration-300 transform group-hover:translate-x-full ease w-4 h-4">
                  GO
                </div>
                <div className="relative invisible ">GO</div>
              </a>
            </button>
          </li>

          <li className="mb-2 mt-[29px] text-200  pb-2 rounded-full max-w-full max-h-5">
            <Select
              style={{ width: 200, height: 40 }}
              placeholder="Select"
              defaultValue={defaultOption}
              value={selectedOption} // Set the selected option
              onChange={(value) => setSelectedOption(value)}
            >
              {options.map((option) => (
                <Option key={option}>{option}</Option>
              ))}
            </Select>
          </li>

          <li>
            <div className="mx-4 my-3 mt-4 w-full hover:bg-gradient-to-r float-right h-22 pl-10">
              <label htmlFor="parameters" className="sr-only">
                Exports
              </label>
              <select
                id="parameters"
                className="p-2 w-full mt-1 pl-2 rounded-lg focus:outline-none bg-red-500  text-white focus:border-purple-200 hover:border-transparent"
                value={selectedParameter}
                onChange={handleParameterChange}
              >
                <option
                  value="default"
                  className="bg-white text-gray-900 "
                  disabled
                >
                  Export
                </option>
                <option value="parameter1" className="bg-white text-gray-900">
                  CSV
                </option>
                <option value="parameter2" className="bg-white text-gray-900">
                  PDF
                </option>
              </select>
            </div>
          </li>
        </ul>
      </nav>
      </div>
      <div className="container float-right">
        {selectedOption === "Line graph" && <Linegraphspower></Linegraphspower>}
        {selectedOption === "Pie graph" && <PieChartPower></PieChartPower>}
        {selectedOption === "Column graph" && <ColumnChart></ColumnChart>}
        {selectedOption === "Heat Map" && <PowerHeatMap></PowerHeatMap>}
        {selectedOption === "Sorted Line graph" && (<SortLineGraph></SortLineGraph>
        )}
      </div>
      </div>
    </div>
  );
};

export default Power;
