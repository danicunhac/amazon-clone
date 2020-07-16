import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { StateProvider } from "./components/stateProvider/StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    {/* Passing App as children */}
    <App />
  </StateProvider>,
  document.getElementById("root")
);
