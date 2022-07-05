import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, addTodoAsync } from '../redux/todos/todosSlice'
import { nanoid } from '@reduxjs/toolkit'
import Loading from './Loading'
import Error from './Error'

const Form = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.todos.addNewTodoIsLoading);
    const error = useSelector(state => state.todos.addNewTodoError);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return; // title boş ise yazma

        await dispatch(addTodoAsync({ id: nanoid(), title: title, completed: false }));
        setTitle("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: 'center' }}>
                <input disabled={isLoading} className="new-todo" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="What needs to be done?" autoFocus />
                {
                    isLoading && (<Loading />)
                }
                {
                    error && <Error message={error} />
                }
            </form>
        </div>
    )
}

export default Form