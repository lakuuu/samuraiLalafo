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

export const addHouse = createAsyncThunk("users/addHouse", async (data) => {
    const res = await API.createAd(data)
    return res.data
}) 

const usersSlice = createSlice({
    name: "users",
    initialState:{
        loading: true,
        data: [] 
    },
    reducers: {},
    extraReducers: (builder) => {
         builder.addCase(initialize.fulfilled, (state, action) =>{
            state.data = action.payload
            state.loading = false
         }  );
         builder.addCase(deleteCardById.fulfilled, (state, action) =>{
            const newArr = state.data.filter((item) => item.id !== action.payload)
             state.data = newArr
         }  );
         builder.addCase(addHouse.fulfilled, (state, action) => {
            state.data.push(action.payload)
         }) 

        //  builder.addCase(initialize.pending)
        //  builder.addCase(initialize.rejected)
    }
})
 

export const usersSliceActions = usersSlice.actions
export const usersSliceReducer = usersSlice.reducer
