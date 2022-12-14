import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../types";

const token = localStorage.getItem("token");


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
