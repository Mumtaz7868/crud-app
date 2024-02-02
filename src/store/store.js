import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import modalSlice from "./slices/modalSlice";
export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
  },
});
