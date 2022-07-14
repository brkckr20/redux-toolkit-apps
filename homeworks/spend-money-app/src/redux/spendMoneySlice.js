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
            let item = current(state.items).find(item => item.id === action.payload.id);
            let isInBasket = current(state.basket).find(bsk => bsk.id === item.id);
            if (!isInBasket) {
                state.basket.push(item);
            } else if (isInBasket) {
                state.basket.map(item => item.amount += 1);
            }


        }
    },
    extraReducers: {}
})

export const { addItems } = spendMoneySlice.actions

export default spendMoneySlice.reducer;