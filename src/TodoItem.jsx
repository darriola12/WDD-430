export default function TodoItem( {id, completed, title, toggleTodo, handleDelete }){

    return(
        <li>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
              </label>
              <button
                className="btn-delete-item"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
        </li>


    )
}