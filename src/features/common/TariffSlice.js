import { createSlice } from "@reduxjs/toolkit";

export const TariffSlice = createSlice({
  name: "Tariff",

  initialState: {
    validforElectricityTariff: "2023-09-21T00:00:00.000Z",
    standingChargeElectricityTariff: "3.60 ",
    basicPriceElectricityTariff: "200.00",
    currencyElectricityTariff: "₹",
    validforGasTariff: "2023-09-21T00:00:00.000Z",
    standingChargeGasTariff: "2.00 ",
    basicPriceGasTariff: "0.05 ",
    currencyGasTariff: "₹",
    validforWaterTariff: "2023-09-27T00:00:00.000Z",
    standingChargeWaterTariff: "0.00 ",
    coldWaterPriceTariff: "2.26 ",
    currencyWaterTariff: "₹",
    validforCompressedAirTariff: "2023-09-21T00:00:00.000Z",
    standingChargeCompressedAirTariff: "2.00 ",
    basicPriceCompressedAirTariff: "0.05 ",
    currencyCompressedAirTariff: "₹",
  },

  reducers: {
    setElectricityTariff: (state, action) => {
      state.validforElectricityTariff = action.payload.fromDate;
      state.standingChargeElectricityTariff = action.payload.standingCharge;
      state.basicPriceElectricityTariff = action.payload.basicPrice;
      state.currencyElectricityTariff = action.payload.currency;
    },

    setGasTariff: (state, action) => {
        state.validforGasTariff = action.payload.fromDate;
        state.standingChargeGasTariff = action.payload.standingCharge;
        state.basicPriceGasTariff = action.payload.basicPrice;
        state.currencyGasTariff = action.payload.currency;
    },

    setWaterTariff: (state, action) => {
        state.validforWaterTariff = action.payload.fromDate;
        state.standingChargeWaterTariff = action.payload.standingCharge;
        state.coldWaterPriceTariff = action.payload.basicPrice;
        state.currencyWaterTariff = action.payload.currency;
    },

    setCompressedAirTariff: (state, action) => {
        state.validforCompressedAirTariff = action.payload.fromDate;
        state.standingChargeCompressedAirTariff = action.payload.standingCharge;
        state.basicPriceCompressedAirTariff = action.payload.basicPrice;
        state.currencyCompressedAirTariff = action.payload.currency;
    },
  },
});

 export const {setElectricityTariff,setWaterTariff,setGasTariff,setCompressedAirTariff} = TariffSlice.actions

// export const { setElectricityTariff} = TariffSlice.actions;

export default TariffSlice.reducer;
