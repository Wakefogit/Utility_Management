import React from 'react'

const Reports = () => {
  return (
  
   
    <div>
      <div class="container mx-auto">
      <table class="shadow-lg bg-white border-collapse">
  <tr>
    <th class="bg-indigo-800 border text-center px-8 py-4 text-white ">Company</th>
    <th class="bg-indigo-800 border text-center px-8 py-4 text-white grid-cols-3">Contact</th>
    <th class="bg-indigo-800 border text-center px-8 py-4 text-white">Country</th>
    <th class="bg-indigo-800 border text-center px-8 py-4 text-white grid-cols-4">Button</th>
  </tr>
  <tr
    class="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200"
    tabindex="0"
  >
    <td class="border px-8 py-4 text-center">Alfreds Futterkiste</td>
    <td class="border px-8 py-4 text-center">Dante Sparks</td>
    <td class="border px-8 py-4 text-center">Italy</td>
    <td class="border px-8 py-4 text-center "><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button></td></tr>
  <tr
    class="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200"
    tabindex="0"
  >
    <td class="border px-8 py-4">Centro comercial Moctezuma</td>
    <td class="border px-8 py-4">Neal Garrison</td>
    <td class="border px-8 py-4">Spain</td>
    <td class="border px-8 py-4 text-center "><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">  Save   </button></td></tr>

  <tr
    class="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200"
    tabindex="0"
  >
    <td class="border px-8 py-4 text-center">Ernst Handel</td>
    <td class="border px-8 py-4">Maggie O'Neill</td>
    <td class="border px-8 py-4">Austria</td>
    <td class="border px-8 py-4 text-center "><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">edit</button></td></tr>

</table>
    </div>
    </div>
    
   
    
  )
}

export default Reports
