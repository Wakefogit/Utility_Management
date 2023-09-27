import { createSlice } from "@reduxjs/toolkit";

export const TariffSlice = createSlice({
  name: "Tariff",

  initialState: {
    validforElectricityTariff: "2023-09-21T00:00:00.000Z",
    standingChargeElectricityTariff: "3.60 ",
    basicPriceElectricityTariff: "200.00",
    currencyElectricityTariff: "₹",
    gasTariff: null,
    waterTariff: null,
    compressedAirTariff: null,
  },

  reducers: {
    setElectricityTariff: (state, action) => {
      state.validforElectricityTariff = action.payload.fromDate;
      state.standingChargeElectricityTariff = action.payload.standingCharge;
      state.basicPriceElectricityTariff = action.payload.basicPrice;
      state.currencyElectricityTariff = action.payload.currency;
    },

    setGasTariff: (state, action) => {
      state.gasTariff = action.payload;
    },

    setWaterTariff: (state, action) => {
      state.waterTariff = action.payload;
    },

    setCompressedAirTariff: (state, action) => {
      state.compressedAirTariff = action.payload;
    },
  },
});

// export const {setElectricityTariff,setWaterTariff,setGasTariff,setCompressedAirTariff} = TariffSlice.actions

export const { setElectricityTariff } = TariffSlice.actions;

export default TariffSlice.reducer;
