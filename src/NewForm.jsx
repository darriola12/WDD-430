import { useState } from "react";

export default function Newform({ onSubmit }) {
  const [newitem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newitem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <h2>New Item</h2>
      <div className="name-row">
        <label htmlFor="item-name">Item Name</label>
        <input
          id="item-name"
          value={newitem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
        />
      </div>
      <button className="btn-add-item">Add</button>
    </form>
  );
}
