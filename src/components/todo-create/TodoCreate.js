import './TodoCreate.css'
import { useState } from "react";

// fungsi props utk mengirimkan data antar komponen
const TodoCreate = (props) => {
    // membuat fungsi utk useState
    const [getInputTodo, setInputTodo] = useState('')

    // membuat fungsi event handle utk button submit
    const handleSubmit = (event) => {
        event.preventDefault() // utk menghandle fungsi behaviour/bawaan 

        // object data
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1, // utk id (uniq)
            title: getInputTodo
        }

        // mengirim data newTodo ke parent komponen Todo
        props.onCreateTodo(newTodo)

        setInputTodo('') // agar inputan mjd kosong stlh diisi

        console.log(newTodo)
    }

    // membuat fungsi handle inputan
    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
        console.log(getInputTodo);
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={getInputTodo} onChange={handleInputTodo}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate