import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            /* {
                id: 1,
                name: "deneme",
                color: "pink"
            },
            {
                id: 2,
                name: "xxy",
                color: "pink"
            },
            {
                id: 3,
                name: "xxz",
                color: "pink"
            } */
        ]
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
        filteredNote: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { addNote, filteredNote } = notesSlice.actions

export default notesSlice.reducer