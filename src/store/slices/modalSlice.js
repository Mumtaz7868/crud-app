import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modal = action.payload;
    },
    closeModal: (state, action) => {
      state.modal = action.payload;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
