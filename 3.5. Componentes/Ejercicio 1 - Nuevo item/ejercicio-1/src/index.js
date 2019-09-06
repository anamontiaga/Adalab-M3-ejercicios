import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
// import App from "./App";
import ItemList from "./ItemList.js";
import Item from "./Item.js";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<ItemList />, document.getElementById("root"));
ReactDOM.render(<Item />, document.getElementById("root"));

serviceWorker.unregister();
