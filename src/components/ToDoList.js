import React from "react";

const ToDoList = ({ toDoItems, editItem, removeItem, filterItem, filter }) => {
  return (
    <>
      <h1>List</h1>

      {/* going through the list and displaying each item with description, and 2 buttons*/}
      <ul>
        {toDoItems.map((toDoItem) => {
          if (filter === toDoItem.filter || filter === "all") {
            return (
              <li key={toDoItem.id}>
                <p className={toDoItem.filter === "completed" && "complete"}>
                  {toDoItem.title}
                </p>
                <button type="button" onClick={() => filterItem(toDoItem.id)}>
                  complete
                </button>
                <button type="button" onClick={() => editItem(toDoItem.id)}>
                  edit
                </button>
                <button onClick={() => removeItem(toDoItem.id)}>remove</button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default ToDoList;
