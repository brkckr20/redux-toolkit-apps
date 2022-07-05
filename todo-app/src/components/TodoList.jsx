import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { /* toggle, */ /* destroy , *//* selectTodos, */ selectFilteredTodos, getTodosAsync, toggleTodoAsync, removeTodoAsync } from '../redux/todos/todosSlice';
import Error from './Error';
import Loading from './Loading';


/* let filtered = []; */

const TodoList = () => {
    const dispatch = useDispatch();
    const filteredTodos = useSelector(selectFilteredTodos);
    const isLoading = useSelector(state => state.todos.isLoading);
    const error = useSelector(state => state.todos.error);

    useEffect(() => {
        dispatch(getTodosAsync())
    }, [dispatch])

    /*const items = useSelector(selectTodos); */
    /* const activeFilter = useSelector(state => state.todos.activeFilter); */

    const handleDestroy = async (id) => {
        if (window.confirm("Emin misiniz?")) {
            await dispatch(removeTodoAsync(id))
        }
    }


    const handleToggle = async (id, completed) => {
        await dispatch(toggleTodoAsync({ id, data: { completed } }))

    }


    //custom selector yazınca kaldırıldı
    /* filtered = items;
    
    if (activeFilter !== "all") {
        filtered = items.filter((todo) => activeFilter === "active" ? todo.completed === false : todo.completed === true)
    } */

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }


    return (

        <ul className="todo-list">
            {
                filteredTodos.map(item => (
                    <li key={item.id} className={item.completed ? "completed" : ''}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => handleToggle(item.id, !item.completed)}
                            />
                            <label>{item.title}</label>
                            <button onClick={() => handleDestroy(item.id)} className="destroy"></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList