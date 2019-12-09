// Imports - libs
import React, { useState } from "react";

// Imports - local
import classes from "./style.module.css";

// Todo component (eact checkbox, title and delete icon)
const Todo = ({ todo, rmTodo, toggleCheckbox, updateTodowithId }) => {

  // Destucturing from todo prop
  const { title, id, isCompleted } = todo;

  // State to hold the updating/editing flag
  const [editing, setEditing] = useState(false);

  // State to hold the editing title untill title completes
  const [editChange, setEditChange] = useState("");

  // Making title editable by triggering state change
  const onEditCkick = () => {
    setEditing(true);
    setEditChange(title);
  };

  // Trigering the redux state update action
  const onEditChange = event => {
    if (["Enter", ",", "Tab", "Click"].includes(event.key)) {
      updateTodowithId(editChange, id);
      setEditing(false);
    }
  };
  return (
    <div>
      <div className={classes.todoContainer}>
        <section className={classes.todotextContainer}>
          <div>
            <input
              className={classes.radioCustom}
              type="checkbox"
              checked={isCompleted}
              onChange={() => toggleCheckbox(id)}
            />
          </div>
          <div>
            {editing ? (
              <input
                type="text"
                value={editChange}
                className={classes.editingText}
                id={id}
                onChange={e => setEditChange(e.target.value)}
                onKeyUp={e => onEditChange(e)}
              />
            ) : (
              <p
                className={
                  isCompleted
                    ? [classes.completed, classes.todoText].join(" ")
                    : classes.todoText
                }
                onDoubleClick={onEditCkick}
              >
                {title}
              </p>
            )}
          </div>
        </section>
        <div className={classes.crossMark} onClick={() => rmTodo(id)}>
          &#x2718;
        </div>
      </div>
    </div>
  );
};

export default Todo;
