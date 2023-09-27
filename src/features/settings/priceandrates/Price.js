// import React from "react";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useEffect } from "react";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setPageTitle } from "../../common/headerSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

// import { VisibilityOutlined, Visibility } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-70%, -70%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 4,
};

const Price = () => {
  const dispatch = useDispatch();
  const {
    validforElectricityTariff,
    standingChargeElectricityTariff,
    basicPriceElectricityTariff,
    currencyElectricityTariff,
  } = useSelector((state) => state.tariff);
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthNames = [
      "Jan", "Feb","Mar",
      "Apr","May", "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",

      "Nov",
      "Dec",
    ];

    const monthIndex = date.getMonth();

    const year = date.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
  }
  const formattedDate = formatDate(validforElectricityTariff);

  useEffect(() => {
    dispatch(setPageTitle({ title: "Prices & Rates" }));
  }, []);

  // Create separate state variables for each modal
  const [electricityModalOpen, setElectricityModalOpen] = useState(false);
  const [waterModalOpen, setWaterModalOpen] = useState(false);
  const [gasModalOpen, setGasModalOpen] = useState(false);
  const [compressedAirModalOpen, setCompressedAirModalOpen] = useState(false);

  const handleElectricityModalOpen = () => setElectricityModalOpen(true);
  const handleElectricityModalClose = () => setElectricityModalOpen(false);

  const handleWaterModalOpen = () => setWaterModalOpen(true);
  const handleWaterModalClose = () => setWaterModalOpen(false);

  const handleGasModalOpen = () => setGasModalOpen(true);
  const handleGasModalClose = () => setGasModalOpen(false);

  const handleCompressedAirModalOpen = () => setCompressedAirModalOpen(true);
  const handleCompressedAirModalClose = () => setCompressedAirModalOpen(false);

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
                + Add new electricity tariff
              </button>
            </NavLink>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Detail</TableCell>
                  <TableCell>Valid for</TableCell>
                  <TableCell>Standing charge</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <VisibilityOutlinedIcon/>
                    <Button variant="text"></Button>
                  </TableCell>
                  <TableCell>{formattedDate} — until now</TableCell>
                  <TableCell>
                    {standingChargeElectricityTariff}
                    {currencyElectricityTariff}/month
                  </TableCell>
                  <TableCell>Level 1:{basicPriceElectricityTariff}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/*this id for gas */}
      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium ml-5 mt-5 mb-5">Gas</h2>
            <NavLink to="/app/Price/gastariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new gas tariff
              </button>
            </NavLink>
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
            <NavLink to="/app/Price/watertariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new water tariff
              </button>
            </NavLink>
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

      {/*this for compressed air */}
      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium ml-5 mt-5 mb-5">
              Compressed Air
            </h2>
            <NavLink to="/app/Price/compressedairtariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new compressed air tariff
              </button>
            </NavLink>
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
    </div>
  );
};

export default Price;
