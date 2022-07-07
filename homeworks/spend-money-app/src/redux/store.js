import { configureStore } from '@reduxjs/toolkit';
import spendMoneySlice from './spendMoneySlice'

export const store = configureStore({
    reducer: {
        spend: spendMoneySlice
    }
})