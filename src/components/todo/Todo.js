import './Todo.css'
import { useState } from 'react'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

// component Todo menggunakan function
const Todo = () => {
    // menggunakan state pada react
    const [getTodos, setTodos] = useState([
        { id: 1, title: 'Eat' }, // data array yg merupakan object
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' },
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos);
    }

    return (
        <div>
            <h3>Todo List</h3>
            {/* props yg berbentuk fungsi sebaiknya diawali dg 'on' */}
            <TodoCreate onCreateTodo = {eventCreateTodo}/>
            {/* dataTodos berkaitan dengan props begitu juga dgn onCreateTodo*/}
            <TodoList dataTodos = {getTodos} />
        </div>
    )
}

export default Todo