import { useState } from "react";
import Newform from "./Newform";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState([]);

  function addTodo(title) {
    setTodo((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodo((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodo((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Newform onSubmit={addTodo} />
      <div className="todo-list-div">
        <h1>To-Do List</h1>
        <ul className="List">
          {todo.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn-delete-item"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
