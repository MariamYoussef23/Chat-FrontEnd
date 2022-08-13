import {configureStore, combineReducers} from "@reduxjs/toolkit"
import userSlice from "./userSlice"


const reducer = combineReducers ({
    user: userSlice
})

const store = configureStore({
    reducer
})

export default store 


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch