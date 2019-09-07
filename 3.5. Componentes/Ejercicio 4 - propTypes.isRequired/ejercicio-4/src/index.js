import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ItemList from "./ItemList.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ItemList />, document.getElementById("root"));

serviceWorker.unregister();

// Dado el resultado del ejercicio 3, vamos a hacer que el nombre de los items sea obligatorio y que el precio sea también obligatorio y de tipo numérico. Crea después un nuevo item con valores erróneos para ver qué pinta tiene el error que nos envía React.
