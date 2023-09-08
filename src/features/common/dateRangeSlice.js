import { createSlice } from "@reduxjs/toolkit";

 

export const dateRangeSlice = createSlice({

  name: "dateRange",

  initialState: {

    selectedDateRange: "today",

    responseData: null,

  },

  reducers: {

    setDateRange: (state, action) => {

        state.selectedDateRange = action.payload;

      },

    setResponseData: (state, action) => {

        state.responseData = action.payload;

      },

  },

});

 

export const { setDateRange, setResponseData } = dateRangeSlice.actions;

export default dateRangeSlice.reducer;

 