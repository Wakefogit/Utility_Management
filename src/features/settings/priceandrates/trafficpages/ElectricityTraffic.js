import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../../common/headerSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";

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

const ElectricityTraffic = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Electricity  Tariff" }));
  }, []);

  const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState("");

  // Create separate state variables for each modal
  const [standingChargeModalOpen, setStandingChargeModalOpen] = useState(false);
  const [basicTariffModalOpen, setBasicTariffModalOpen] = useState(false);
  const [lowTariffModalOpen, setLowTariffModalOpen] = useState(false);

  const handleStandingChargeOpen = () => setStandingChargeModalOpen(true);
  const handleStandingChargeClose = () => setStandingChargeModalOpen(false);

  const handleBasicTariffOpen = () => setBasicTariffModalOpen(true);
  const handleBasicTariffClose = () => setBasicTariffModalOpen(false);

  const handleLowTariffOpen = () => setLowTariffModalOpen(true);
  const handleLowTariffClose = () => setLowTariffModalOpen(false);

// Event handler for currency selection
const handleCurrencyChange = (e) => { 
  console.log(e)
  const selectedValue = e.target.value;
  console.log("Selected Currency:", selectedValue);
  setSelectedCurrencySymbol(selectedValue);
};

  return (
    <>
      {/* Rest of your JSX code */}
      <div>
        <label
          htmlFor="countries"
          className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white "
        >
          Valid from <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="date"
          className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="countries"
          className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white "
        >
          Valid to
        </label>
        <input
          type="date"
          id="date"
          className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div>
        <label         
          className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white "                
        >
          Currency <span className="text-red-500">*</span>
        </label>
        <select
          id="countries"
          className="bg-blue-50 mb-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleCurrencyChange}
          placeholder="choose a currency"
          // defaultValue={}
        >
          <option defaultValue="" >Choose a Currency</option>
          <option value="₹">Indian Rupees (₹)</option>
          <option value="$">United States Dollar ($)</option>
          <option value="€">Euro (€)</option>
          <option value="FC">Congolese franc (FC)</option>
        </select>
        
      </div>

      <div className="mb-6">
        <label
          htmlFor="standing-rate"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >
          Standing charge <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="standing-rate"
            className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-sm text-gray-500 ml-2">
          {selectedCurrencySymbol} / month{" "}
          </span>
          <div>
            <HelpOutlinedIcon
              onClick={handleStandingChargeOpen}
              className="ml-3"
            ></HelpOutlinedIcon>
            <Modal
              open={standingChargeModalOpen} // Use the correct state variable
              onClose={handleStandingChargeClose} // Use the correct close handler
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Standing charge
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Enter the value of your monthly fees for electricity. If you
                  aren't sure about it, check the costs in your last electricity
                  invoice or in the pricelist of your electricity retailer.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="basic-rate"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white "
        >
          Price for basic tariff rate <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="basic-rate"
            className="w-[75%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-sm text-gray-500 ml-2">
          {selectedCurrencySymbol} / month{" "}
          </span>
          <div>
            <HelpOutlinedIcon
              onClick={handleBasicTariffOpen}
              className="ml-3"
            ></HelpOutlinedIcon>
            <Modal
              open={basicTariffModalOpen} // Use the correct state variable
              onClose={handleBasicTariffClose} // Use the correct close handler
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Basic tariff rate
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Enter the value of your cost for electricity consumed in basic
                  tariff rate. If you aren't sure about it, check the costs in
                  your last electricity invoice or in pricelist of your
                  electricity retailer.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="low-rate"
          className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white"
        >
          Price for low tariff rate
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="low-rate"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[75%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <span className="text-sm text-gray-500 ml-2">
          {selectedCurrencySymbol} / month{" "}
          </span>
          <div>
            <HelpOutlinedIcon
              onClick={handleLowTariffOpen}
              className="ml-3"
            ></HelpOutlinedIcon>
            <Modal
              open={lowTariffModalOpen} // Use the correct state variable
              onClose={handleLowTariffClose} // Use the correct close handler
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Low tariff rate
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Enter the value of your cost for electricity consumed in low
                  tariff rate. If you aren't sure about it, check the costs in
                  your last electricity invoice or in pricelist of your
                  electricity retailer.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      <label
        htmlFor="message"
        className="block mb-2 mt-8 text-xl font-medium text-gray-900 dark:text-white"
      >
        Note
      </label>

      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-[75%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write a note here....."
      ></textarea>

      <div className="pt-10  pr-60 pl-40 pb-40">
        <NavLink to="/app/Price">
          <button className="bg-transparent mt-10 w-[56%] shadow-xl float-right hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Save Electricity Traffic
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default ElectricityTraffic;
