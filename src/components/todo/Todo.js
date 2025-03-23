import './Todo.css'
import { useState, useEffect } from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'
import { fetchTasks, createTask, updateTask, deleteTask } from '../../api'

// component Todo menggunakan function
const Todo = () => {
    // menggunakan state pada react
    const [getTodos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch todos when component mounts
    useEffect(() => {
        const getTodosFromAPI = async () => {
            try {
                setLoading(true)
                const data = await fetchTasks()
                setTodos(data)
                setError(null)
            } catch (err) {
                setError('Failed to fetch tasks. Is the server running?')
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        getTodosFromAPI()
    }, [])

    const eventCreateTodo = async (todo) => {
        try {
            const newTodo = await createTask(todo.title)
            setTodos([...getTodos, newTodo])
        } catch (err) {
            setError('Failed to add task')
            console.error(err)
        }
    }

    const eventToggleTodo = async (id, completed, title) => {
        try {
            await updateTask(id, title, !completed)
            setTodos(getTodos.map(todo => 
                todo.id === id ? { ...todo, completed: !completed } : todo
            ))
        } catch (err) {
            setError('Failed to update task')
            console.error(err)
        }
    }

    const eventDeleteTodo = async (id) => {
        try {
            await deleteTask(id)
            setTodos(getTodos.filter(todo => todo.id !== id))
        } catch (err) {
            setError('Failed to delete task')
            console.error(err)
        }
    }

    return (
        <div>
            <h3>Todo List</h3>
            {error && <div className="error">{error}</div>}
            
            {/* props yg berbentuk fungsi sebaiknya diawali dg 'on' */}
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                /* dataTodos berkaitan dengan props begitu juga dgn onCreateTodo*/
                <TodoList 
                    dataTodos={getTodos} 
                    onToggleTodo={eventToggleTodo}
                    onDeleteTodo={eventDeleteTodo}
                />
            )}
        </div>
    )
}

export default Todo