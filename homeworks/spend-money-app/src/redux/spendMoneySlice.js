import { createSlice, current } from "@reduxjs/toolkit";
import { defaultItems } from './initialItems'

export const spendMoneySlice = createSlice({
    name: "spend",
    initialState: {
        items: defaultItems,
        basket: []
    },
    reducers: {
        addItems: (state, action) => {
            let addedItems = current(state.items).find((item) => item.id === action.payload.id);
            let isInBasket = current(state.basket).find((item) => item.id !== addItems.id);
            if (!isInBasket) {
                state.basket = [...state.basket, addedItems];
            } else {
                // state.basket.amount += 1
            }

        }
    },
    extraReducers: {}
})

export const { addItems } = spendMoneySlice.actions

export default spendMoneySlice.reducer;