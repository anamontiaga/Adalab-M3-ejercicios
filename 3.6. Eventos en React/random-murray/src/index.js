import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RandomMurray from "./RandomMurray";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<RandomMurray />, document.getElementById("root"));

serviceWorker.unregister();
