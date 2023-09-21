import React from 'react';

export function ElectricityTraffic() {
  return (
    <div>

        <div>
          <label htmlFor="countries" 
          className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white "
          >
            Currency <span className="text-red-500">*</span>
           
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a Currency</option>
            <option value="US">Indian Rupees</option>
            <option value="CA">Dollar</option>
            <option value="FR">Euro</option>
            <option value="DE">Germany</option>
            </select>
        </div>


      <div className="mb-6">
        <label htmlFor="basic-rate" className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white ">
        Standing charge <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="low-rate"
            className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-sm text-gray-500 ml-2"> $ / month </span>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="basic-rate" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white ">
          Price for basic tariff rate <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="low-rate"
            className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-sm text-gray-500 ml-2">$ / MWh </span>
        </div>
      </div>


      <div className="mb-6">
        <label htmlFor="low-rate" className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white">
          Price for low tariff rate 
        </label>
        <div className="flex items-center">
        <input
          type="text"
          id="low-rate"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <span className="text-sm text-gray-500 ml-2" > $ / MWh</span>
        </div>
      </div>

      <label htmlFor="message" className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white">
        Note
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-[75%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write a note here....."
      ></textarea>
    </div>
  );
}
