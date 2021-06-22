import React from "react";

const InputForm = ({
  setToDo,
  toDo,
  setToDoItems,
  toDoItems,
  editing,
  setEditing,
  currentId,
  setCurrentId,
  setFilter,
  refContainer,
}) => {
  // obtains user input as text
  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  // updates toDoItems list once user presses submit
  // includees a case for when user tries to submit without entering data
  // includes a case that deals with the active edit
  // includes the case for submitting
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDo) {
      console.log("error");
    } else if (toDo && editing) {
      setToDoItems(
        toDoItems.map((item) => {
          if (item.id === currentId) {
            return {
              ...item,
              title: toDo,
            };
          }
          return item;
        })
      );
      setToDo("");
      setEditing(false);
      setCurrentId(null);
    } else {
      const newToDo = {
        id: new Date().getTime().toString(),
        title: toDo,
        filter: "not-completed",
      };
      setToDoItems([...toDoItems, newToDo]);
      setToDo("");
    }

    //const newToDo = {id: new Date().getTime().toString(),title:toDo}
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="enter value"
        value={toDo}
        onChange={handleChange}
        ref={refContainer}
      />
      <button type="submit" value="submit" onClick={handleSubmit}>
        submit
      </button>
      <div className="select">
        <select
          onChange={handleFilter}
          name="toDoItems"
          className="filter-to-do"
        >
          <option value="all"> all </option>
          <option value="completed"> completed </option>
          <option value="not-completed"> not-completed </option>
        </select>
      </div>
    </form>
  );
};

export default InputForm;
