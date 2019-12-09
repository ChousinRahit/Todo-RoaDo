// Import - libs
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// Import - local
import "./index.css";
import App from "./App";
import todo from "./store/reducers/todoReducer";

// Creating a store and passing todo reducer
const store = createStore(todo);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
