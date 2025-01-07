import { createSlice } from "@reduxjs/toolkit";

const sideToggleSlice = createSlice({
    name: 'sideToggle',
    initialState: true, // initial state is a boolean (true for dark, false for light)
    reducers: {
        toggleSideBar: (state) => {
            return !state; // Toggle the boolean state directly
        },
        toggleTrue: (state) => {
            return true; // Toggle the boolean state directly
        },
        toggleFalse: (state) => {
            return false; // Toggle the boolean state directly
        }
    }
});

export const { toggleSideBar, toggleTrue, toggleFalse } = sideToggleSlice.actions;
export default sideToggleSlice.reducer;
