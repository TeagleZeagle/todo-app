import {useState} from "react";
import './styles.css'

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    function handleAddTodo() {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('')
        }
    }

    function handleDeleteTodo(index) {
        let copy = [...todos]
        copy.splice(index, 1)
        setTodos(copy)
    }

    return <div className="todo-container">
        <div className="input-section">
        <input
            type="text"
            value={input}
            placeholder="Enter Todo"
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
        </div>
        <ol className="todo-list">
            {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                    {todo}
                    <button onClick={() => handleDeleteTodo(index)} className="delete-button">Delete</button>
                </li>
            ))}
        </ol>
    </div>

}