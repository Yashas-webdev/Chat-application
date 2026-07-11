import { createSlice } from "@reduxjs/toolkit";
const sokcetSlice = createSlice({
    name:'socket',
    initialState:{
        socket:null
    },
    reducers:{
        setSocket:(state,action) => {
            state.socket = action.payload;
        }
    }
});
export const {setSocket} = sokcetSlice.actions;
export default sokcetSlice.reducer;