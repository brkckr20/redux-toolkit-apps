import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter", //state ulaşmak için --- state.counter olarak düşünülebilir.
    initialState: { //başlangıç değeri
        value: 0
    },
    reducers: {
        increment: (state) => { // uygulamamızda count değeri yani initialValue buraya parametre olarak gelir.
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload)
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
