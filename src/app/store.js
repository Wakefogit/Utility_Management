import { configureStore } from "@reduxjs/toolkit";

import headerSlice from "../features/common/headerSlice";

import modalSlice from "../features/common/modalSlice";

import rightDrawerSlice from "../features/common/rightDrawerSlice";

import leadsSlice from "../features/leads/leadSlice";

import dateRangeSlice from "../features/common/dateRangeSlice";

const combinedReducer = {
  header: headerSlice,

  rightDrawer: rightDrawerSlice,

  modal: modalSlice,

  lead: leadsSlice,

  dateRange: dateRangeSlice,
};

export default configureStore({
  reducer: combinedReducer,
});
