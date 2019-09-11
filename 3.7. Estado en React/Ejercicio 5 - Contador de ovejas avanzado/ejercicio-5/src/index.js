import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SheepCounter from "./SheepCounter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<SheepCounter />, document.getElementById("root"));

serviceWorker.unregister();

// Definitivamente, Time2Sleep es fan de Adalab. Esta vez, basándose en unos novedosos estudios científicos de alguna famosísima universidad que dice que al contar ovejas nos aburrimos tanto que caemos dormidos, nos han encargado que hagamos un contador de ovejas digital.
// Crearemos un componente cuentaovejas (SheepCounter) que mostrará un número en grande y un botón. El botón tendrá asignado un escuchador al evento click que aumentará el contador. Actualizaremos el valor del contador con setState(/* función */).
