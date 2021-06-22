import React from "react";

const ToDoList = ({ toDoItems, editItem, removeItem, filterItem, filter }) => {
  return (
    <>
      <h1>List</h1>

      {/* going through the list and displaying each item with description, and 2 buttons*/}
      <div className="todo-divison">
        <ul className="todo-list">
          {toDoItems.map((toDoItem) => {
            if (filter === toDoItem.filter || filter === "all") {
              return (
                <div className="todo">
                  <li
                    key={toDoItem.id}
                    className={`todo-item ${
                      toDoItem.filter === "completed" && "complete"
                    }`}
                  >
                    {toDoItem.title}
                    <button
                      type="button"
                      onClick={() => filterItem(toDoItem.id)}
                      className="complete-button"
                    >
                      complete
                    </button>
                    <button
                      type="button"
                      onClick={() => editItem(toDoItem.id)}
                      className="edit-button"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => removeItem(toDoItem.id)}
                      className="remove-button"
                    >
                      remove
                    </button>
                  </li>
                </div>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDoList;
