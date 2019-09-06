import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

// Desarrolla un componente HalfPage que todo su contenido lo ponga en la mitad izquierda de la pantalla (mitad de ancho y todo el alto). Usa children para introducir todo el contenido entre la apertura y cierre de HalfPage en su interior. Crea 2 componentes HalfPage con algo de contenido HTML (en JSX) para ver cómo se posiciona en una mitad y la otra.
