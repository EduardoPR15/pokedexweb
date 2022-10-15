import { configureStore } from "@reduxjs/toolkit";
import userGender from "./slices/userGender.slice";
import userName from "./slices/userName.slice";
import userStyle from "./slices/userStyle.slice";

export default configureStore({
    reducer:{
        userName,
        userGender,
        userStyle
        
    }


})