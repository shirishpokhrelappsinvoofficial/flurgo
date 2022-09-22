import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userAPI";

const initialState = {
  data: null,
};

export const FetchRepoForUser = createAsyncThunk(
  "FetchRepoForUser",
  async (obj, { dispatch }) => {
    const response = await fetchUser(obj);
    console.log(response);
    dispatch(data(response));
    return response;
  }
);

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    data: (state, action) => {
      state.data = action?.payload;
    },
  },
});

export const { data } = UserSlice.actions;

export default UserSlice.reducer;
