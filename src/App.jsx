import { useEffect, useState } from "react";
import Newform from "./NewForm";
import TodoList from "./TodoList";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState(() => {
    const valueList = localStorage.getItem("Items")
    if(valueList == null) return []

    return JSON.parse(valueList)

  });

  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todo))
    
  }, [todo])

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
        <TodoList todo = {todo} handleDelete={handleDelete} toggleTodo={toggleTodo} />
      </div>
    </>
  );
}
