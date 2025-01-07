import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/theme-slice'; // Assuming themeSlice is in the 'features' folder
import itemsReducer from './slice/items-slice'; // Assuming itemsSlice is in the 'features' folder
import noteReducer from './slice/note-slice'

const store = configureStore({
  reducer: {
    theme: themeReducer, // Add the theme reducer to the store
    items: itemsReducer, // Add the items reducer to the store
    note: noteReducer,
  },
});

export default store;
