import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import "./App.css";
import ItemList from "./ItemList.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ItemList />, document.getElementById("root"));

serviceWorker.unregister();

// Intenta añadir un nuevo Item a la lista.

// a) ¿Serías capaz de crear el JSX que devuelve el método render de ItemList usando un bucle o un map? Para hacerlo debes saber que para pintar varios componentes en JSX basta con crear un array con cada JSX y devolverlo en una expresión entre {}.

// b) Ahora vamos a filtrar el array antes convertirlo a JSX con map, tirando de nuestra amiga filter. Motraremos en la página solo los productos cuyo precio es inferior a 10.
