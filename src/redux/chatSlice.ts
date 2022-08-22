import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Chat, ChatsState } from "../types";


const initialState: {chats: Chat[]} = {
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
