import { createSlice } from "@reduxjs/toolkit";

const userGenderSlice = createSlice ({
    name: 'userGender',
    initialState: '',
    reducers:{
        setUserGender: (state, action) => action.payload

    }

})
export const {setUserGender} = userGenderSlice.actions
export default userGenderSlice.reducer