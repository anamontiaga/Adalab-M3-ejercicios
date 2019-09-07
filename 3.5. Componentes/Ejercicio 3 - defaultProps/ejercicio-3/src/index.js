import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ItemList from "./ItemList.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ItemList />, document.getElementById("root"));

serviceWorker.unregister();

// Partiendo del código del ejercicio 1, usa las defaultProps para que la descripción del item sea opcional y si no nos lo pasan por props aparezca 'No hay descripción'.
