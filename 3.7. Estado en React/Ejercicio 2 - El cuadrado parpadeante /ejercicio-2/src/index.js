import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// Vamos a crear una página con una cuadrado de tamaño fijo (por ejemplo un div) con un color de fondo azul. Vamos a hacer que al hacer clic sobre el cuadrado, su color de fondo cambie a rojo. Si volvemos a hacer clic, pasa de nuevo a azul, y así sucesivamente. Vamos a implementar este cuadrado parpadeante usando el estado del componente (podemos almacenar el color o un booleano).
// PISTA: Al escuchar el evento de clic para comprobar de qué color estaba anteriormente el cuadrado, usaremos la versión de setState que toma como parámetro el prevState
