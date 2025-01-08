import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: 'sideBarActive',
  initialState: {
    id: '', // Default id, can be modified once the component loads based on the route
  },
  reducers: {
    setSideBarId: (state, action) => {
      state.id = action.payload; // Set the id of the active note
    },
  },
});

export const { setSideBarId } = sideBarSlice.actions;
export default sideBarSlice.reducer;
