import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Destiny from "./Destiny";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Destiny />, document.getElementById("root"));

serviceWorker.unregister();

// Vamos a crear un componente Destiny que contiene un select con un listado de ciudades: Buenos Aires, Sydney, Praga, Boston y Tokio. Al cambiar el valor del select, haremos aparecer un alert que diga 'Tu destino es viajar a XXX', siendo XXX la ciudad seleccionada.
