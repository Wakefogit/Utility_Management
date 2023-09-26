import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setPageTitle } from "../../../common/headerSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

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
const validationSchema = Yup.object().shape({
  validFrom: Yup.date().required("Valid from is required"),
  currency: Yup.string().required("Currency is required"),
  standingCharge: Yup.number().required("Standing charge is required"),
  basicTariffRate: Yup.number().required("Basic tariff rate is required"),
});

const initialValues = {
  validFrom: "",
  validTo: "",
  currency: "",
  standingCharge: "",
  basicTariffRate: "",
  lowTariffRate: "",
  note: "",
};

const ElectricityTraffic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Electricity  Tariff" }));
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission and send data to the backend here
 
      const apiUrl = "http://localhost:8080/createelectricity";
      const response  = await axios.post(
        apiUrl,
        {
          fromDate:values.validFrom,
          toDate:values.validTo === '' ? null : values.validTo,
          currency:values.currency,
          charge:values.standingCharge,
          basicPrice:values.basicTariffRate,
          lowPrice:values.lowTariffRate === ''? null : values.lowTariffRate,
          note:values.note === '' ? null : values.note
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (formik.isValid) {
        // Redirect to /app/Price
        navigate("/app/Price");
      }
    },
  });

  // const [validFrom, setValidFrom] = useState("");
  // const [validTo, setValidTo] = useState("");
  // const [selectedCurrencySymbol, setSelectedCurrencySymbol] = useState("");
  // const [standingCharge, setStandingCharge] = useState("");
  // const [basicTariffRate, setBasicTariffRate] = useState("");
  // const [lowTariffRate, setLowTariffRate] = useState("");
  // const [note, setNote] = useState("");

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

  // const sendDataToBackend = async () => {
  //   let apiUrl = "http://192.168.0.104:8080/createelectricity";
  //   const response = await axios.post(
  //     apiUrl,
  //     {
  //       fromDate: validFrom,
  //       toDate: validTo,
  //       currency: selectedCurrencySymbol,
  //       charge: standingCharge,
  //       basicPrice: basicTariffRate,
  //       lowPrice: lowTariffRate,
  //       note: note,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  // };

  return (
    <form onSubmit={formik.handleSubmit} className="m-8 space-y-4">
      {/*valid from */}
      <div>
        <label
          htmlFor="validFrom"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Valid from <span className="text-red-500">*</span>
        </label>
        <TextField
          sx={{
            width: "75%",
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              height: "0.8375em",
            },
          }}
          id="validFrom"
          name="validFrom"
          type="date"
          value={formik.values.validFrom}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.validFrom && Boolean(formik.errors.validFrom)}
          helperText={formik.touched.validFrom && formik.errors.validFrom}
        />
      </div>

      {/*  valid to*/}
      <div>
        <label
          htmlFor="validTo"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Valid to
        </label>
        <TextField
          sx={{
            width: "75%",
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              height: "0.8375em",
            },
          }}
          id="validTo"
          name="validTo"
          type="date"
          value={formik.values.validTo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.validTo && Boolean(formik.errors.validTo)}
          helperText={formik.touched.validTo && formik.errors.validTo}
        />
      </div>

      {/* currency */}
      <div>
        <label
          htmlFor="currency"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Choose currency <span className="text-red-500">*</span>
        </label>
        <Select
          sx={{ width: "75%", height: "45px" }}
          id="currency"
          name="currency"
          value={formik.values.currency}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.currency && Boolean(formik.errors.currency)}
        >
          <MenuItem defaultValue="">Choose a Currency</MenuItem>
          <MenuItem value="₹">Indian Rupees (₹)</MenuItem>
          <MenuItem value="$">United States Dollar ($)</MenuItem>
          <MenuItem value="€">Euro (€)</MenuItem>
          <MenuItem value="FC">Congolese franc (FC)</MenuItem>
        </Select>
      </div>

      {/* standing charge */}
      <div>
        <label
          htmlFor="standingCharge"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Standing charge <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <TextField
            sx={{
              width: "75%",
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                height: "0.8375em",
              },
            }}
            id="standingCharge"
            name="standingCharge"
            type="text"
            value={formik.values.standingCharge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.standingCharge &&
              Boolean(formik.errors.standingCharge)
            }
            helperText={
              formik.touched.standingCharge && formik.errors.standingCharge
            }
          />
          <span className="text-sm ml-3 text-gray-500">
            {formik.values.currency} / month{" "}
          </span>
          <div>
            <HelpOutlinedIcon
              onClick={handleStandingChargeOpen}
              className="ml-3"
            ></HelpOutlinedIcon>
            <Modal
              open={standingChargeModalOpen} // Use the correct state variable
              onClick={handleStandingChargeClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Standing charge
                </Typography>
                <Typography id="modal-modal-description">
                  Enter the value of your monthly fees for electricity. If you
                  aren't sure about it, check the costs in your last electricity
                  invoice or in pricelist of your electricity retailer.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>

      {/*basic rate */}
      <div>
        <label
          htmlFor="basicTariffRate"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Price for basic tariff rate <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center">
          <TextField
            sx={{
              width: "75%",
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                height: "0.8375em",
              },
            }}
            id="basicTariffRate"
            name="basicTariffRate"
            type="text"
            value={formik.values.basicTariffRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.basicTariffRate &&
              Boolean(formik.errors.basicTariffRate)
            }
            helperText={
              formik.touched.basicTariffRate && formik.errors.basicTariffRate
            }
          />
          <span className="text-sm ml-3 text-gray-500">
            {formik.values.currency} / month{" "}
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

      {/*low rate */}
      <div>
        <label
          htmlFor="lowTariffRate"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Price for low tariff rate
        </label>
        <div className="flex items-center">
          <TextField
            sx={{
              width: "75%",
              "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                height: "0.8375em",
              },
            }}
            id="lowTariffRate"
            name="lowTariffRate"
            type="text"
            value={formik.values.lowTariffRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.lowTariffRate &&
              Boolean(formik.errors.lowTariffRate)
            }
            helperText={
              formik.touched.lowTariffRate && formik.errors.lowTariffRate
            }
          />
          <span className="text-sm mt-1 ml-3 text-gray-500">
            {formik.values.currency} / month
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

      {/* Note */}
      <div>
        <label
          htmlFor="note"
          className="block text-xl font-medium text-gray-900 dark:text-white"
        >
          Note
        </label>
        <textarea
          id="note"
          rows="4"
          name="note"
          value={formik.values.note}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-gray-100 w-[75%] p-2.5 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write a note here....."
        ></textarea>
      </div>

      {/* Button*/}
      <div className="pt-10  pr-40 pb-40">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-60  float-right hover:bg-blue-500"
          disabled={!formik.isValid}
        >
          Save Electricity Traffic
        </Button>
      </div>
    </form>
  );
};

export default ElectricityTraffic;
