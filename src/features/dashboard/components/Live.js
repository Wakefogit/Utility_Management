import React, { useState } from "react";
import Linechart from "./Linechart";
import AppImages from "../../../components/AppImages";
import { Select } from "antd";

const { Option } = Select;

const Live = () => {
  const options = ["Zone 1", "Zone 2", "Zone 3", "Zone 4"];
  const defaultOption = options[0];

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  return (
    <div className="flex flex-wrap mx-2 p-2 justify-between ">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Select
          style={{ width: 200 }}
          placeholder="Select"
          defaultValue={defaultOption}
          value={selectedOption}
          onChange={(value) => setSelectedOption(value)}
        >
          {options.map((option) => (
            <Option key={option}>{option}</Option>
          ))}
        </Select>

        {/* Render Linechart component conditionally */}
        {selectedOption === "Zone 1"}
      </div>
      <div>
        <button
          id="dropdownBgHoverButton"
          data-dropdown-toggle="dropdownBgHover"
          class="bg-white outline-gray-900 text-black hover:bg-slate-100 focus:ring-1 ring-1 ring-slate-200  font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-slate-400"
          type="button" 
        >
          Dropdown checkbox{" "}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="dropdownBgHover"
          class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <ul
            class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownBgHoverButton"
          >
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-4"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="checkbox-item-4"
                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  checked
                  id="checkbox-item-5"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="checkbox-item-5"
                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Checked state
                </label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id="checkbox-item-6"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="checkbox-item-6"
                  class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  Default checkbox
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="flex justify-between rounded-md shadow-sm float-right"
        role="group"
      >
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex px-2 py-1">
            Power
            <img src={AppImages.energy} alt="Icon" className="w-5 h-5 ml-2" />
          </div>
        </button>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex px-2 py-1">
            Gas
            <img src={AppImages.gas} alt="Icon" className="w-4 h-4 ml-2" />
          </div>
        </button>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover-bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex justify-between">
            Water
            <img src={AppImages.water} alt="Icon" className="w-5 h-5 ml-2" />
          </div>
        </button>
        <button
          type="button"
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 border-l-0 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover-bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <div className="flex px-2 py-1">
            Compressed Air
            <img src={AppImages.air} alt="Icon" className="w-5 h-5 ml-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Live;
