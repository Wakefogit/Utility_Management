import { createSlice } from "@reduxjs/toolkit";

export const dateRangeSlice = createSlice({
  name: "dateRange",
  initialState: {
    selectedDateRange: "today",
    selectField:"consumption",
    responseDataZone1: null,
    responseDataZone2: null,
  },

  reducers: {
    setDateRange: (state, action) => {
      state.selectedDateRange = action.payload;
    },

    setResponseDataZone1: (state, action) => {
      state.responseDataZone1 = action.payload;
    },
    setResponseDataZone2: (state, action) => {
      state.responseDataZone2 = action.payload;
    },
  },
});

export const { setDateRange, setResponseDataZone1,setResponseDataZone2 } = dateRangeSlice.actions;

export default dateRangeSlice.reducer;
