import './TodoList.css'

const TodoList = (props) => {
    return (
        <ul>
            {
                props.dataTodos.map((todo) => {
                    return (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <span 
                                onClick={() => props.onToggleTodo(todo.id, todo.completed, todo.title)}
                            >
                                {todo.title}
                            </span>
                            <button 
                                className="delete-btn"
                                onClick={() => props.onDeleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default TodoList