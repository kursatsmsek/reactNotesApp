import { configureStore } from "@reduxjs/toolkit";
import NoteSlice from './NoteSlice';

export const store = configureStore({
    reducer: {
        notes: NoteSlice,
    },
});