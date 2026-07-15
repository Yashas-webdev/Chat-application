import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import messageReducer from './messageSlice.js';
import socketReducer from './socketSlice.js'

const store = configureStore({
    reducer:{
        user:userReducer,
        message:messageReducer,
        socket:socketReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false  //if not use this, it will be showing the warning of the Sokcet is not serilzable
            // ignoredPaths:["socket.socket"],
        })
});
export default store;