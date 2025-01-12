import { createSlice } from "@reduxjs/toolkit";

const opacitySlice = createSlice({
    name:"opacity",
    initialState:1,
    reducers: {
        setOpacity: (state, action) => {
            state = action.payload;
        }
    }
})

export const { setOpacity } = opacitySlice.actions;
export default opacitySlice.reducer;