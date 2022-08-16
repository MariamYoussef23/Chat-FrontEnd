import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

//get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'))

const token = localStorage.getItem("token");
console.log(token);
const initialState: AuthState = {
  token: token !== null ? JSON.parse(token) : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { getToken } = authSlice.actions;

export default authSlice.reducer;
