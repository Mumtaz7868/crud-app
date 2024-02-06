import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    subtitle: "",
    image: "",
    description: "",
  },
};

export const formSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
