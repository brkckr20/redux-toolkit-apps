import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`);
    return await response.json(); //action.payload ' a denk gelir.
})
export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/todos`, data);
    return res.data;
})

export const toggleTodoAsync = createAsyncThunk("todo/toggleTodoAsync", async ({ id, data }) => {
    const res = axios.patch(`${process.env.REACT_APP_API_URL}/todos/${id}`, data);
    return res.data;
})

export const removeTodoAsync = createAsyncThunk("todo/removeTodoAsync", async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/todos/${id}`);
    return id;
})
