import { createSlice } from "@reduxjs/toolkit";

export const spendMoneySlice = createSlice({
    name: "spend",
    initialState: {
        items: [
            {
                id: 1,
                imageUrl: "https://neal.fun/spend/images/big-mac.jpg",
                name: "Big mac",
                price: 2
            },
            {
                id: 2,
                imageUrl: "https://neal.fun/spend/images/flip-flops.jpg",
                name: "Flip Flops",
                price: 10
            }
        ]
    },
    reducers: {},
    extraReducers: {}
})

export default spendMoneySlice.reducer;