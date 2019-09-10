import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// Mostrando info relacionada
// Vamos a partir de una web sencilla con un input de tipo texto y un párrafo vacío. ¿Seremos capaces de hacer que con React y el estado, cuando modificamos el input aparezca el texto en el párrafo?
