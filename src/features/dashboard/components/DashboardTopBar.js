import React from 'react'
import SelectBox from "../../../components/Input/SelectBox"
import ArrowDownTrayIcon  from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon  from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon  from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon  from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon  from '@heroicons/react/24/outline/ArrowPathIcon'
import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker"; 

function DashboardTopBar({updateDashboardPeriod}){
  return (
    <div className="bg-slate-300 rounded-full p-3 w-[270px] shadow-md backdrop-blur-lg backdrop-filter backdrop-saturate-150">
      
<ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
    <li class="mr-2">
        <a href="#" class="inline-block px-4 py-3 text-white bg-blue-600 rounded-3xl active " aria-current="page">Today</a>
    </li>
    <li class="mr-2">
        <a href="#"  class="inline-block px-4 py-3 rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Month</a>
    </li>
    <li class="mr-2">
        <a href="#" class="inline-block px-6 py-3 rounded-3xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Year</a>
    </li>
</ul>

    </div>
  )
}

export default DashboardTopBar
