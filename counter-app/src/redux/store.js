import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'

//store oluşturma işlemleri
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})