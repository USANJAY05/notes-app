import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    notes: "" // Initial notes array
  },
  reducers: {
    // Action to set or update notes
    setNote: (state, action) => {
      state.notes = action.payload; // Set the notes array to the payload (action)
    },
  }
});

export const { setNote } = noteSlice.actions; // Export the setNote action
export default noteSlice.reducer;
