import {createSlice} from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserState {
    value: object 
}

const initialState: UserState = {
    value: {}
}

export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<object>) => {state.value }
    }
})


export const { getUser } = userSlice.actions

export default userSlice.reducer
