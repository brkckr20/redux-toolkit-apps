import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const character_limit = 12

export const fetchCharacters = createAsyncThunk("characters/getCharacters", async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${character_limit}`);
    return res.data;
})



export const charactersSlice = createSlice({
    name: "characters",
    initialState: {
        items: [],
        isLoading: false,
        error: false
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false
        },
        [fetchCharacters.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        }
    }
})



export default charactersSlice.reducer;