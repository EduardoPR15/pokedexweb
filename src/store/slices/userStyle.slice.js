import { createSlice } from "@reduxjs/toolkit";

const userStyleSlice = createSlice({
    name: 'userStyle',
    initialState: '',
    reducers:{
        setUserStyle: (state, action) => action.payload

    }
})
export const {setUserStyle} = userStyleSlice.actions
export default userStyleSlice.reducer