import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../api/Api";




export  const initialize = createAsyncThunk('users/initialize', async () => {
    const res = await API.getAllAds()
    return res.data
})

export const deleteCardById = createAsyncThunk('users/delete', async (id) => {
    API.deleteAdById(id)
    return id
})

const usersSlice = createSlice({
    name: "users",
    initialState:{
        loading: true,
        data: [] 
    },
    reducers:{
    
        addHouse: (state, action) => {
            state.data.push(action.payload)
        },
    },
    extraReducers: (builder) => {
         builder.addCase(initialize.fulfilled, (state, action) =>{
            state.data = action.payload
            state.loading = false
         }  );
         builder.addCase(deleteCardById.fulfilled, (state, action) =>{
            const newArr = state.data.filter((item) => item.id !== action.payload)
             state.data = newArr
         }  )
        //  builder.addCase(initialize.fulfilled)
        //  builder.addCase(initialize.fulfilled)
    }
})
 

export const usersSliceActions = usersSlice.actions
export const usersSliceReducer = usersSlice.reducer
