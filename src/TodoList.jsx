import TodoItem from "./TodoItem";

export default  function TodoList({todo, handleDelete, toggleTodo}){

    return(
        <ul className="List">
          {todo.map((todo) =>{
            return(  
                <TodoItem id = {todo.id} completed = {todo.completed} title = {todo.title} key = {todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete} />
            )
          })}
        </ul>
    )
}
