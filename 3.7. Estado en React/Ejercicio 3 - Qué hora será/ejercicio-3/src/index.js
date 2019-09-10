import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./Clock";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Clock />, document.getElementById("root"));

serviceWorker.unregister();

// Vamos a crear un componente reloj (Clock) que nos muestre la hora en cada momento. Tendrá un método updateClock() en el componente para actualizar el estado con setState(/* objeto */), que actualizará la hora con new Date(). En el constructor del componente declararemos un setInterval() que ejecute updateClock cada segundo.
// PISTA: para obtener la información de la hora con un objeto de tipo fecha, podemos usar los métodos getHours, getMinutes y getSeconds como se explica en la página de MDN
