import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers:{
        setUserName: (state, action) => action.payload

    }
})
export const {setUserName} = userNameSlice.actions
export default userNameSlice.reducer

