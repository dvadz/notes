import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import { store } from "./store/index.js";
import { Provider } from "react-redux";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
