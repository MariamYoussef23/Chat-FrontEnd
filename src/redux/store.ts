import authReducer from "./authSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice";
import MessageSlice from "./messageSlice"

const store = configureStore({
  reducer: {
    auth: authSlice,
    chats: chatSlice,
    messages: MessageSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
