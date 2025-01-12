import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slice/theme-slice';
import itemsReducer from './slice/items-slice';
import noteReducer from './slice/note-slice';
import sideToggleReducer from './slice/sideToggle-slice';
import sideBarActiveReducer from './slice/sideBarActive-slice'
import opacityReducer from './slice/opacity-slice'

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage by default

// Redux Persist configuration for 'items' reducer
const persistConfig = {
  key: 'items',   // This key will store the items state in localStorage
  storage,        // localStorage (you can also use sessionStorage)
};

// Persisted reducer for 'items'
const persistedItemsReducer = persistReducer(persistConfig, itemsReducer);

const store = configureStore({
  reducer: {
    theme: themeReducer,     // No persistence for theme
    items: persistedItemsReducer, // Persisted items reducer
    note: noteReducer,       // No persistence for note
    sideToggle: sideToggleReducer, // No persistence for sideToggle
    sideBarActive: sideBarActiveReducer,
    setOpacity : opacityReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
