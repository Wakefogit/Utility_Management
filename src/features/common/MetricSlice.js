import { createSlice } from "@reduxjs/toolkit";

export const MetricSlice = createSlice({
  name: "metric",
  initialState: {
    selectedMetric: "consumption",
  },
  reducers: {
    setMetric: (state, action) => {
     state.selectedMetric = action.payload;
    },
  },
});


export const {setMetric} = MetricSlice.actions;

export default MetricSlice.reducer;
