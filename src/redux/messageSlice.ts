import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MessagesState } from "../types";


const initialState: MessagesState = {
  messages: []
}

export const MessageSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    getMessages: (state, action: PayloadAction<[]>) => {
      state.messages = action.payload;
    },
  },
});

export const { getMessages } = MessageSlice.actions;

export default MessageSlice.reducer;
