import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import RandomCat from "./RandomCat";
// Para importar de un archivo local, utilizaremos el prefijo ./ antes de la ruta. Sin embargo, no pondremos el prefijo cuando sea una dependencia en npm, como nos preconfigura create-react-app para react y react-dom.

// Solo falta el paso final: es tan fácil como cambiar la línea que empieza por ReactDOM.render y reemplazar <App /> por <RandomCat />

ReactDOM.render(<RandomCat />, document.getElementById("root"));

// serviceWorker.unregister();

// Las líneas comentadas son una añadidura de create-react-app para facilitar hacer progressive web apps, pero son completamente opcionales y por ahora no las utilizaremos.
