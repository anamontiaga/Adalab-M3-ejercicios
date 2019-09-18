import React from "react";
import ReactDOM from "react-dom";
// 1 - INSTALAMOS HASHROUTER
import { HashRouter } from "react-router-dom";
import App from "./App";

// 2- ENVOLVEMOS NUESTRA APP CON EL ROUTER
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
