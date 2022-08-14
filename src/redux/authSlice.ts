import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

//get user from localStorage 
// const user = JSON.parse(localStorage.getItem('user'))

export interface UserState {
    user: object 
}

const initialState: UserState = {
    user: {}
}

export const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<object>) => {state.user }
        
    }
})


export const { getUser } = authSlice.actions

export default authSlice.reducer
