import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    editData: (state, action) => {
      state.data = action.payload;
    },
    deleteData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData, deleteData, editData } = dataSlice.actions;
export default dataSlice.reducer;
