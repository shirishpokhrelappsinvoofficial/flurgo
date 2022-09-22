import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAPI";

const initialState = {
  value: 0,
  status: "idle",
};

export const FetchRepoForUser = createAsyncThunk(
  "FetchRepoForUser",
  async (obj) => {
    const response = await fetchUser(obj);
    console.log(response);
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment, decrement, incrementByAmount } = UserSlice.actions;

export default UserSlice.reducer;
