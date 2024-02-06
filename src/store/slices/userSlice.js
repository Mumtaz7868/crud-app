import {
  createSlice,
  createAsyncThunk,
  legacy_createStore,
} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res1 = await response.json();
  console.log(res1);
  return res1;
});
export const addData = createAsyncThunk("create", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await response.json();
    console.log(res, "resAdd");

    return res; // Return the result to be handled in fulfilled case
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  loading: false,
  user: [],
  addedData: [],
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getAllData: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addData.pending, (state) => {
        state.loading = true;
      })
      .addCase(addData.fulfilled, (state, action) => {
        state.loading = false;
        state.addedData = action.payload;
      })
      .addCase(addData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { getAllData } = userSlice.actions;
export default userSlice.reducer;
