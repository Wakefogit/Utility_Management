// import React from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { useEffect } from "react";

import { blue } from "@mui/material/colors";

import { useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

import { setPageTitle } from "../../common/headerSlice";

const Price = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Prices & Rates" }));
  }, []);

  return (
    <div>
      {/* This id for Electricity*/}

      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className=" text-2xl font-medium mt-5 ml-5 mb-5 ">
              Electricity
            </h2>

            <NavLink to="/app/Price/electricitytariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new electricity traffic
              </button>
            </NavLink>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg">
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>

                <th scope="col" className="px-6 py-3">
                  Valid for
                </th>

                <th scope="col" className="px-6 py-3">
                  Standing charge
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <VisibilityOutlinedIcon>
                    <button></button>
                  </VisibilityOutlinedIcon>
                </th>

                <td className="px-6 py-4">1 Jan 2000 — until now</td>

                <td className="px-6 py-4">3.60 €/month</td>

                <td className="px-6 py-4">Level 1: 200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* This id for Gas*/}

      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium ml-5 mt-5 mb-5">Gas</h2>

            <button className=" ml-40 mb-5 mr-3 btn btn-sucess  bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ...  w-96">
              + Add new gas traffic
            </button>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>

                <th scope="col" className="px-6 py-3">
                  Valid for
                </th>

                <th scope="col" className="px-6 py-3">
                  Standing charge
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <VisibilityOutlinedIcon></VisibilityOutlinedIcon>
                </th>

                <td className="px-6 py-4">1 Jan 2000 — until now</td>

                <td className="px-6 py-4">3.60 €/month</td>

                <td className="px-6 py-4">Level 1: 200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* This id for Water*/}

      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium  ml-5 mt-5 mb-5">Water</h2>

            <button className=" ml-40 mb-5 mr-3 btn btn-sucess  bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... w-96 ">
              + Add new water traffic
            </button>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>

                <th scope="col" className="px-6 py-3">
                  Valid for
                </th>

                <th scope="col" className="px-6 py-3">
                  Standing charge
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <VisibilityIcon></VisibilityIcon>
                </th>

                <td className="px-6 py-4">1 Jan 2000 — until now</td>

                <td className="px-6 py-4">3.60 €/month</td>

                <td className="px-6 py-4">Level 1: 200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* This id for Compressed Air*/}

      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium ml-5 mt-5 mb-5">
              Compressed Air
            </h2>

            <button className=" ml-40 mb-5 mr-3 btn btn-sucess  bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ...  w-96">
              + Add new compressed air traffic
            </button>
          </div>

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Detail
                </th>

                <th scope="col" className="px-6 py-3">
                  Valid for
                </th>

                <th scope="col" className="px-6 py-3">
                  Standing charge
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <VisibilityIcon></VisibilityIcon>
                </th>

                <td className="px-6 py-4">1 Jan 2000 — until now</td>

                <td className="px-6 py-4">3.60 €/month</td>

                <td className="px-6 py-4">Level 1: 200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Price;
