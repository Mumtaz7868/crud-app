import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import modalSlice from "./slices/modalSlice";
import formSlice from "./slices/formSlice";
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
    formData: formSlice,
    user: userSlice,
  },
});
