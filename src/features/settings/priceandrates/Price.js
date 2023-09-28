// import React from "react";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useEffect } from "react";
import { blue } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setPageTitle } from "../../common/headerSlice";

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
    validforGasTariff,
    standingChargeGasTariff,
    basicPriceGasTariff,
    currencyGasTariff,
    validforWaterTariff,
    standingChargeWaterTariff,
    coldWaterPriceTariff,
    currencyWaterTariff,
    validforCompressedAirTariff,
    standingChargeCompressedAirTariff,
    basicPriceCompressedAirTariff,
    currencyCompressedAirTariff,
  } = useSelector((state) => state.tariff);
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
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
  const formattedElectricity = formatDate(validforElectricityTariff);
  const formatedGas = formatDate(validforGasTariff);
  const formatedWater = formatDate(validforWaterTariff);
  const formatedCompressedAir = formatDate(validforCompressedAirTariff);
  useEffect(() => {
    dispatch(setPageTitle({ title: "Prices & Rates" }));
  }, []);
  const userDataString = localStorage.getItem("user");
  let roleId 
  if(userDataString) {
    const userData = JSON.parse(userDataString)
     roleId = userData.roleId
    } else {
      console.error("ther is an error")
    }
    console.log(roleId, "this is role id")
  console.log(userDataString,"this is user value ")
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

            {roleId === 1 &&  (<NavLink to="/app/Price/electricitytariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new electricity tariff
              </button>
            </NavLink>)}
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
                    <VisibilityOutlinedIcon />
                    <Button variant="text"></Button>
                  </TableCell>
                  <TableCell>{formattedElectricity} — until now</TableCell>
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
            
            {roleId === 1 && (<NavLink to="/app/Price/gastariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new gas tariff
              </button>
            </NavLink>)}
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
                    <VisibilityOutlinedIcon />
                    <Button variant="text"></Button>
                  </TableCell>
                  <TableCell>{formatedGas} — until now</TableCell>
                  <TableCell>
                    {standingChargeGasTariff}
                    {currencyGasTariff}/month
                  </TableCell>
                  <TableCell>
                    {basicPriceGasTariff}
                    {currencyGasTariff}/kWh
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/* This id for Water*/}
      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium  ml-5 mt-5 mb-5">Water</h2>
            {roleId === 1 && (<NavLink to="/app/Price/watertariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new water tariff
              </button>
            </NavLink>)}
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
                    <VisibilityOutlinedIcon />
                    <Button variant="text"></Button>
                  </TableCell>
                  <TableCell>{formatedWater} — until now</TableCell>
                  <TableCell>
                    {standingChargeWaterTariff}
                    {currencyWaterTariff}/month
                  </TableCell>
                  <TableCell>Cold water:{coldWaterPriceTariff}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      {/*this for compressed air */}
      <div className="pb-10">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg ">
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium ml-5 mt-5 mb-5">
              Compressed Air
            </h2>
            {roleId === 1 && (<NavLink to="/app/Price/compressedairtariff">
              <button className="w-96   ml-40 mb-5 mr-3 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent  float-right rounded-md cursor-pointer ... ">
                + Add new compressed air tariff
              </button>
            </NavLink>)}
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
                    <VisibilityOutlinedIcon />
                    <Button variant="text"></Button>
                  </TableCell>
                  <TableCell>{formatedCompressedAir} — until now</TableCell>
                  <TableCell>
                    {standingChargeCompressedAirTariff}
                    {currencyCompressedAirTariff}/month
                  </TableCell>
                  <TableCell>{basicPriceCompressedAirTariff}/ kWh</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Price;
