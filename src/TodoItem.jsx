export default function TodoItem( {id, completed, title, toggleTodo, handleDelete }){

    return(
        <li id="item_list">
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