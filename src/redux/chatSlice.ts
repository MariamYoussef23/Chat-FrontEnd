import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getChat: (state, action) => {
      state.messages = action.payload.messages;
    },
  },
});

export const { getChat } = chatSlice.actions;

export default chatSlice.reducer;
