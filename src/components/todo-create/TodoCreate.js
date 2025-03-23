import './TodoCreate.css'
import { useState } from "react";

// fungsi props utk mengirimkan data antar komponen
const TodoCreate = (props) => {
    // membuat fungsi utk useState
    const [getInputTodo, setInputTodo] = useState('')

    // membuat fungsi event handle utk button submit
    const handleSubmit = (event) => {
        event.preventDefault() // utk menghandle fungsi behaviour/bawaan 

        if (!getInputTodo.trim()) return;

        // object data
        const newTodo = {
            title: getInputTodo
        }

        // mengirim data newTodo ke parent komponen Todo
        props.onCreateTodo(newTodo)

        setInputTodo('') // agar inputan mjd kosong stlh diisi
    }

    // membuat fungsi handle inputan
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate