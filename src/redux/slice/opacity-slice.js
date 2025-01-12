import { createSlice } from "@reduxjs/toolkit";

const opacitySlice = createSlice({
  name: "opacity",
  initialState: 1, // Initial global opacity value
  reducers: {
    setOpacity: (state, action) => action.payload, // Replace the state directly with payload
  },
});

export const { setOpacity } = opacitySlice.actions;
export default opacitySlice.reducer;
