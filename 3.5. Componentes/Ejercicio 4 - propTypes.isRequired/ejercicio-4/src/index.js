import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ItemList from "./ItemList.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ItemList />, document.getElementById("root"));

serviceWorker.unregister();
