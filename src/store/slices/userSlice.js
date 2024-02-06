import {
  createSlice,
  createAsyncThunk,
  legacy_createStore,
} from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetch", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const addData = createAsyncThunk("create", async (addObj) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(addObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const res = await response.json();
    console.log(res, "resAdd");
    return res;
  } catch (error) {
    console.error(error);
  }
});
export const updateData = createAsyncThunk("edit", async (updatedObj) => {
  console.log(updatedObj, "updatedObj");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        body: JSON.stringify(updatedObj),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error);
  }
});
export const deleteData = createAsyncThunk("delete", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    const res = await response.json();
    console.log(res)
    return res;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  loading: false,
  user: [],
  createData: null,
  editData: null,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
        state.createData = action.payload;
      })
      .addCase(addData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      })
      .addCase(updateData.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const { getAllData } = userSlice.actions;
export default userSlice.reducer;
