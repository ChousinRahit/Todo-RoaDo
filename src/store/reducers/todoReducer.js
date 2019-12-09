// Imports - libs
import uuid from "uuid";

// Imports - local
import {
  ADD_TODO,
  INIT_STATE,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  TOGGLE_ALL_COMPLETED,
  REMOVE_ALL_COMPLETED,
  UPDATE_TODO_WITH_ID
} from "../actions/types";

// Util method to update the local storage
const updateLocalStorage = newState => {
  localStorage.setItem("myTodos", JSON.stringify(newState));
};

// Initial State
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // To Add a new TODO
    case ADD_TODO:
      const todoAry = [
        ...state,
        { title: action.todo, isCompleted: false, id: uuid.v4() }
      ];
      // Update local storage
      updateLocalStorage(todoAry);
      return todoAry;

    // Initial Todo loading from localStorage
    case INIT_STATE:
      let initState = localStorage.getItem("myTodos");
      if (!initState) {
        initState = JSON.stringify([
          { title: "An Example todo", isCompleted: false, id: uuid.v4() }
        ]);
      }
      return JSON.parse(initState);

    // To Remove a Todo by ID
    case REMOVE_TODO:
      const newState = state.filter(todo => todo.id !== action.id);
      // Update local storage
      updateLocalStorage(newState);
      return newState;

    // Toggle the Completed State of Todo with ID
    case TOGGLE_COMPLETED:
      const upDatedState = state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        }
        return todo;
      });
      // Update local storage
      updateLocalStorage(upDatedState);
      return upDatedState;

    // Toggle all completed Flag
    case TOGGLE_ALL_COMPLETED:
      const allCompleted = state.map(todo => {
        return {
          ...todo,
          isCompleted: !action.toggle
        };
      });
      updateLocalStorage(allCompleted);
      return allCompleted;

    // Removing All Completed
    case REMOVE_ALL_COMPLETED:
      const allActive = state.filter(todo => !todo.isCompleted);
      // Update local storage
      updateLocalStorage(allActive);
      return allActive;

    // Updating the todo with ID
    case UPDATE_TODO_WITH_ID:
      const updatedWithId = state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            title: action.value
          };
        }
        return todo;
      });
      // Update local storage
      updateLocalStorage(updatedWithId);
      return updatedWithId;
    default:
      return state;
  }
};
export default reducer;
