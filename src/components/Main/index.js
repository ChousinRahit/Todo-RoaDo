// Imports - libs
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

//  Imports - local
import Todos from "../Todos";
import classes from "./styles.module.css";

// Imports - local - Actions
import {
  addTodo,
  initializeState,
  removeTodo,
  tglCompleted,
  tglAllCompleted,
  rmAllComp,
  updateTodoWithID
} from "../../store/actions/todoActions";

// The Main Component
const Main = ({
  todos,
  updateTodo,
  initState,
  rmTodo,
  toggleCheckbox,
  toggleallCompleteTodos,
  deleteAllComp,
  updateTodowithId
}) => {

  // State to hold the todo 'title' until title completes
  const [todoDesc, setTodoDesc] = useState("");

  // State to show the todos
  const [showState, setShowState] = useState("all");

  // State to hold the allComplete flag
  const [allComplete, setAllComplete] = useState(false);

  // Calling the Redux action - initState (to load the todos at component mounting time)
  useEffect(() => {
    initState();
  }, [initState]);

  // Toggle all todos complete 
  const toggleAllCompleted = allComplete => {
    toggleallCompleteTodos(allComplete);
    setAllComplete(!allComplete);
  };

  // Updating the state in store and local storage 
  const updatetheTodo = event => {
    if (["Enter", "Tab", ","].includes(event.key) && todoDesc.length) {
      event.preventDefault();
      updateTodo(todoDesc);
      setTodoDesc("");
    }
  };

  // To get the length of active todos
  const getActiveTodoLength = () => todos.filter(t => !t.isCompleted).length;

  return (
    <div>
      <div className={classes.headingTodo}>
        <h1>todos</h1>
      </div>
      <div className={classes.outerContainer}>
        <section className={classes.actionsContainer}>
          <div className={classes.actionsBtnContainer}>
            <button
              onClick={() => setShowState("all")}
              className={showState === "all" ? classes.activeBtn : null}
            >
              all
            </button>
            <button
              onClick={() => setShowState("active")}
              className={showState === "active" ? classes.activeBtn : null}
            >
              active
            </button>
            <button
              onClick={() => setShowState("comp")}
              className={showState === "comp" ? classes.activeBtn : null}
            >
              completed
            </button>
          </div>
          <p>
            {getActiveTodoLength()} item{getActiveTodoLength() > 1 && "s"} left
          </p>
        </section>
        <section className={classes.inputBaseContainer}>
          <button
            className={
              allComplete
                ? [classes.markAllComp, classes.darkText].join(" ")
                : classes.markAllComp
            }
            onClick={() => toggleAllCompleted(allComplete)}
          >
            ✔
          </button>
          <input
            className={classes.inputBase}
            placeholder="What needs to be done?"
            value={todoDesc}
            onChange={e => setTodoDesc(e.target.value)}
            onKeyUp={e => updatetheTodo(e)}
          />
          <button
            className={
              allComplete
                ? [classes.markAllComp, classes.darkText].join(" ")
                : classes.markAllComp
            }
            onClick={() => deleteAllComp()}
          >
            &#x2718;{" "}
          </button>
        </section>
        {todos.map(todo =>
          showState === "all" ? (
            <Todos
              todo={todo}
              key={todo.id}
              rmTodo={rmTodo}
              toggleCheckbox={toggleCheckbox}
              updateTodowithId={updateTodowithId}
            />
          ) : showState === "comp" && todo.isCompleted ? (
            <Todos
              todo={todo}
              key={todo.id}
              rmTodo={rmTodo}
              toggleCheckbox={toggleCheckbox}
              updateTodowithId={updateTodowithId}
            />
          ) : showState === "active" && !todo.isCompleted ? (
            <Todos
              todo={todo}
              key={todo.id}
              rmTodo={rmTodo}
              toggleCheckbox={toggleCheckbox}
              updateTodowithId={updateTodowithId}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

// Methed which provide state as props to the Main component
const mapStateToProps = state => {
  return {
    todos: state
  };
};

// Methed which dispatches the action to the redux store
const mapDispatchToProps = dispatch => {
  return {
    updateTodo: todoDesc => dispatch(addTodo(todoDesc)),
    initState: () => dispatch(initializeState()),
    rmTodo: id => dispatch(removeTodo(id)),
    toggleCheckbox: id => dispatch(tglCompleted(id)),
    toggleallCompleteTodos: allComplete =>
      dispatch(tglAllCompleted(allComplete)),
    deleteAllComp: () => dispatch(rmAllComp()),
    updateTodowithId: (value, id) => dispatch(updateTodoWithID(value, id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
