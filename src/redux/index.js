import { configureStore, createSlice } from "@reduxjs/toolkit";

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

export const store = configureStore({
    reducer: usersSlice.reducer
});

console.log(store);
console.log(store.getState());
