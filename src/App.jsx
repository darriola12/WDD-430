import { useState } from "react"
import "./App.css"
import { use } from "react"


export default function App(){
  const [newitem, setNewItem ] = useState("")
  const[todo, setTodo] =  useState([])

  

  function handleSubmit(e){
    e.preventDefault()
    setTodo( currentTodos  => {
      return[
        ...currentTodos, {id: crypto.randomUUID(), title: newitem, completed: false}
      ]
      
    } )

    setNewItem("")
  }

  function toggleTodo(id, completed){

    setTodo(currentTodos => {
      return currentTodos.map(todo => {
        if( todo.id === id){
          return{...todo, completed}
        }
        return todo
      })
    })
  }

  return(
    <>
    <form action="" className="new-item-from">
      <div className="name-row">
       <label htmlFor="item-Name"></label>
       <input value={newitem} onChange={ e => setNewItem(e.target.value)} type="text" />
      </div>
      <button className="btn-add-item" onClick={handleSubmit}>Add</button>
    </form>
    <div className="todo-list-div">
      <h1>To-do List</h1>
      <ul className="List">
        {todo.map( todo => {
          return(
            <li key={todo.id}>
                <label >
                <input type="checkbox" checked = {todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}
                </label>
                <button className="btn-delete-item">Delete</button>
            </li>


          )
        })}

      </ul>
    </div>
  </>
  )
}
