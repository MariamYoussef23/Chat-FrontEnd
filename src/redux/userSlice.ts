import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

const initialState: { users: User[] } = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserswithoutme: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { getUserswithoutme } = userSlice.actions;

export default userSlice.reducer;
