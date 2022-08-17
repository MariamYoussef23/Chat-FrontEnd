import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ChatsState } from "../types";


const initialState: ChatsState = {
  chats: []
}

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    getChat: (state, action: PayloadAction<[]>) => {
      state.chats = action.payload;
    },
  },
});

export const { getChat } = chatSlice.actions;

export default chatSlice.reducer;
