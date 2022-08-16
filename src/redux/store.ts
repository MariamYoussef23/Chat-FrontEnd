import {configureStore, combineReducers} from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import chatSlice from "./chatSlice"


const reducer = combineReducers ({
   auth: authSlice,
   chat : chatSlice
})

const store = configureStore({
    reducer
})

export default store 


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch