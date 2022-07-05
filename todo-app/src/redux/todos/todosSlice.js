import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//api den veri çekme - thunk kullanımı
/*
   ------ 2 parametre alır -----
    1. si action name,
    2. si ise datayı çekecek olan veri
*/
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


export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        isLoading: false,
        addNewTodoIsLoading: false,
        addNewTodoError: null,
        error: null,
        activeFilter: "all"
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        },
        /* toggle: (state, action) => {
            const { id } = action.payload;
            const item = state.items.find(item => item.id === id);
            item.completed = !item.completed;
        }, */
        /* destroy: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered
        }, */
        changeActiveFilter: (state, action) => {
            state.activeFilter = action.payload
        },
        clearCompleted: (state) => { //tamamlanmışların silinmesi
            const filtered = state.items.filter(item => item.completed === false);
            state.items = filtered;
        }
    },
    extraReducers: {
        //get todos
        [getTodosAsync.pending]: (state, action) => {
            state.isLoading = true
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false
        },
        [getTodosAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        },
        //add todo
        [addTodoAsync.pending]: (state, action) => {
            state.addNewTodoIsLoading = true
        },
        [addTodoAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
            state.addNewTodoIsLoading = false
        },
        [addTodoAsync.rejected]: (state, action) => {
            state.addNewTodoIsLoading = true;
            state.addNewTodoError = action.error.message
        },
        //toggle todo
        [toggleTodoAsync.fulfilled]: (state, action) => {

            const { id, completed } = action.payload;
            const index = state.items.findIndex((item) => item.id === id); //indis bulma
            state.items[index].completed = completed;

        },
        //remove todo
        [removeTodoAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id);
            state.items = filtered
        }
    }
});

//selector tanımlama - farklı farklı sayfalarda aynı işlemi tanımlamak yerine tek bir sefer tanımlayıp kullanmak
export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
    if (state.todos.activeFilter === "all") {
        return state.todos.items
    }
    return state.todos.items.filter((todo) =>
        state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true
    )
}

export const { addTodo, toggle, destroy, changeActiveFilter, clearCompleted } = todosSlice.actions
export default todosSlice.reducer;