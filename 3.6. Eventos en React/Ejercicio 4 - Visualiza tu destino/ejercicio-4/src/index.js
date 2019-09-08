import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Destiny from "./Destiny";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Destiny />, document.getElementById("root"));

serviceWorker.unregister();

// Vamos a partir del ejercicio 2 sobre elegir tu destino. Vamos a crear un nuevo componente CityImage que muestra una imagen de una ciudad que recibe por props.
