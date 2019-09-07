import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import OnionHater from "./OnionHater";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<OnionHater />, document.getElementById("root"));

serviceWorker.unregister();

// Vamos a crear un componente OnionHater que consta de un textarea. Escucharemos los evento de cambio del valor del textarea de forma que, si el texto escrito contiene la palabra 'cebolla' hagamos un alert diciendo 'ODIO LA CEBOLLA'.

// PISTA: para acceder al valor del textarea lo podemos hacer desde el objeto evento, el parámetro de la función escuchadora, con event.target.value

// PISTA: para comprobar si una cadena contiene un texto podemos usar el método includes de las cadenas
