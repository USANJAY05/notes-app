import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: true, // initial state is a boolean (true for dark, false for light)
    reducers: {
        toggleTheme: (state) => {
            return !state; // Toggle the boolean state directly
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
