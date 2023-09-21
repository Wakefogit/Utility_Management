import React, { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker'; // Add this line
import 'react-datepicker/dist/react-datepicker.css'; // Add this line to include the default styles
import ReactApexChart from 'react-apexcharts'; // Import ReactApexChart
import { setPageTitle } from '../features/common/headerSlice';
import { useDispatch } from 'react-redux';

const Power = () => {
  const dispatch = useDispatch();
  const [selectedParameter, setSelectedParameter] = useState('default');
  const [startDate, setStartDate] = useState(null); // State to manage the start date
  const [endDate, setEndDate] = useState(null); // State to manage the end date
useEffect(() =>{
  dispatch(setPageTitle({title:"Power"}))
})
  const handleParameterChange = (event) => {
    setSelectedParameter(event.target.value);
  };
  // Define chart data and options
  const chartData = {
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth', // You can change this to 'straight' for a non-smooth line.
      },
      title: {
        text: 'Power',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }, // Close the xaxis object here
    }, // Close the options object here
  }; // Close the chartData object here
    

  return (
  <div>
  <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-2 mb-5">
  <div className="flex items-center flex-shrink-0 text-gray-500 mr-4">
  

<div date-rangepicker class="flex items-left">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
         <svg class="w-3 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
        </div>
          <DatePicker
            selected={startDate} // Bind the start date to the state
            onChange={(date) => setStartDate(date)} // Update the start date state
            name="start"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pl-10 p-2.5 mt-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholderText="Select date start"
          />
        </div>
  <span className="mx-4 my-3 text-black-500">to</span>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
         <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
        </div>
          <DatePicker
            selected={endDate} // Bind the end date to the state
            onChange={(date) => setEndDate(date)} // Update the end date state
            name="end"
            className="bg-gray-50 border border-gray-300 mt-1 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholderText="Select date end"
          />
        </div>
      </div>
      
      <select data-te-select-init className='p-2 ml-10 w-40 rounded-lg'>
  <option
    value="1"
    data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-1.webp">
    Pie Chart
  </option>
  <option
    value="2"
    data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp">
   Column Chart
  </option>
  <option
    value="3"
    data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp">
    Bar Chart
  </option>
  <option
    value="4"
    data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp">
    Histogram
  </option>
  <option
    value="5"
    data-te-select-icon="https://tecdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp">
    Line Graph
  </option>
</select>
      
<a href="#_" 
className="relative ml-10 inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-blue-700 rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-700 group-hover:translate-x-0 ease float-right">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>


<div className="absolute  flex items-center justify-center w-full h-full text-blue-700 transition-all duration-300 transform group-hover:translate-x-full ease">GO</div>
<div className="relative invisible ">GO</div>
</a>
</div>
<div className="m-4 p-1 max-w-40 hover:bg-gradient-to-r ">
    <label htmlFor="parameters" className="sr-only">
      Exports
    </label>
    <select
      id="parameters"
      className="p-2 w-full mt-1 rounded-lg focus:outline-none bg-red-500  text-white focus:border-purple-200 hover:border-transparent"
      value={selectedParameter}
      onChange={handleParameterChange}
    >
      <option value="default" className="bg-white text-gray-900" disabled>Export</option>
      <option value="parameter1" className='bg-white text-gray-900'>CSV</option>
      <option value="parameter2" className='bg-white text-gray-900'>PDF</option>
      
    </select>
  </div>

</nav>

<div id="chart">
        {/* Render the chart */}
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
</div>

  );
};
export default Power;