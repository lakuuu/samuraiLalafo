import {createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: "users",
    initialState:{
        data: [] 
    },
    reducers:{
        addHouses: (state, action) => {
            state.data = action.payload
        }
    }
})

export const usersSliceActions = usersSlice.actions
export const usersSliceReducer = usersSlice.reducer
