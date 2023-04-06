import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import studentReducer from "./reducers/studentReducer";
import { Provider } from "react-redux";

let initialState = [];

if (localStorage.getItem("students") === null)
  localStorage.setItem("students", JSON.stringify(initialState));
else initialState = JSON.parse(localStorage.getItem("students"));

const store = createStore(studentReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
