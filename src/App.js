import React, { useEffect, useState, useRef } from "react";
import ToDoList from "./components/ToDoList";
import InputForm from "./components/InputForm";
import "./App.css";

function App() {
  // UseStates
  const [toDoItems, setToDoItems] = useState([]);
  const [toDo, setToDo] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [filter, setFilter] = useState("all");
  // UseRef
  const refContainer = useRef(null);
  // functions
  //  const removeItem = (id)

  // function that is called inside of the todo List
  // it takes the id of the todo item as Input
  // it creates a new item by setting it to the items
  // in the todoList that has the same id as the one being edited
  const editItem = (id) => {
    const specificItem = toDoItems.find((item) => item.id === id);
    setEditing(true);
    setCurrentId(id);
    setToDo(specificItem.title);
  };
  const removeItem = (id) => {
    setToDoItems(toDoItems.filter((item) => item.id !== id));
  };
  const filterItem = (id) => {
    setToDoItems(
      toDoItems.map((item) => {
        if (item.id === id) {
          if (item.filter === "not-completed") {
            return {
              ...item,
              filter: "completed",
            };
          }
          return {
            ...item,
            filter: "not-completed",
          };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <header>
        <h1>To-Do-List</h1>
      </header>
      {/* Input from the user that adds a new todo item */}
      <InputForm
        setToDo={setToDo}
        toDo={toDo}
        setToDoItems={setToDoItems}
        toDoItems={toDoItems}
        setEditing={setEditing}
        editing={editing}
        currentId={currentId}
        setCurrentId={setCurrentId}
        setFilter={setFilter}
        refContainer={refContainer}
      />

      {/* todo list that displays all the todo items */}
      <ToDoList
        toDoItems={toDoItems}
        editItem={editItem}
        removeItem={removeItem}
        filterItem={filterItem}
        filter={filter}
      />
    </>
  );
}

export default App;
