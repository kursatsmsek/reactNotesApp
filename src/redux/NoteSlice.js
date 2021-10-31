import { createSlice } from '@reduxjs/toolkit';

export const NoteSlice = createSlice({
    name: 'note',
    initialState: {
        filtered: false,
        filteredItems: [],
        items: [
            {
                id: 1,
                color: "blue",
                content: "LET'S"
            },
            {
                id: 2,
                color: "green",
                content: "DO"
            },
            {
                id: 3,
                color: "red",
                content: "IT"
            },
        ],
    },
    reducers: {
        addNote: (state, action) => {
            if (action.payload.content === "") {
                return;
            }
            state.filtered ? 
            state.filteredItems =  [...state.items, {
                id: action.payload.id,
                color: action.payload.color,
                content: action.payload.content,
            }] : 
            state.items =  [...state.items, {
                id: action.payload.id,
                color: action.payload.color,
                content: action.payload.content,
            }];
        },
        filter: (state, action) => {
            state.filtered = true;
            state.filteredItems = state.items.filter((note) => note.content.indexOf(action.payload) > -1);
        },
    },
});
export const { addNote, filter } = NoteSlice.actions;
export default NoteSlice.reducer;