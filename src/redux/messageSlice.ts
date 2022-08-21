import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MessagesState, Message } from "../types";


const initialState: MessagesState = {
  messages: []
}

export const MessageSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    getMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages= [...state.messages, action.payload]
    },
  },
});

export const { getMessages, addMessage } = MessageSlice.actions;

export default MessageSlice.reducer;
