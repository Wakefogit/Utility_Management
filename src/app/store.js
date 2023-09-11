import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "../features/common/headerSlice";

import modalSlice from "../features/common/modalSlice";

import rightDrawerSlice from "../features/common/rightDrawerSlice";

import leadsSlice from "../features/leads/leadSlice";

import dateRangeSlice from "../features/common/dateRangeSlice";
import MetricSlice from "../features/common/MetricSlice";
const combinedReducer = {
  header: headerSlice,

  rightDrawer: rightDrawerSlice,

  modal: modalSlice,

  lead: leadsSlice,

  dateRange: dateRangeSlice,
  metric: MetricSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
