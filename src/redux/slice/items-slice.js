import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: "items",
    initialState: {
        notes: [] // Initial notes array
    },
    reducers: {
        addItems: (state, action) => {
            state.notes.push(action.payload); // Add the new item to the notes array
        },
        deleteItem: (state, action) => {
            state.notes = state.notes.filter(item => item.id !== action.payload.id); // Remove item by id
        },
        updateNoteContent: (state, action) => {
            const { id, content } = action.payload;
            const existingNote = state.notes.find(note => note.id === id);
            
            if (existingNote) {
                existingNote.content = content; // Update the content of the existing note
            }
        }
    }
});

export const { addItems, deleteItem, updateNoteContent } = itemsSlice.actions;
export default itemsSlice.reducer;
