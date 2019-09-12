import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FilmForm from "./FilmForm";

ReactDOM.render(<FilmForm />, document.getElementById("root"));

// Vamos a hacer un pequeño refactor del código del ejercicio anterior: usaremos una única función escuchadora para el evento change de cada campo. Para eso, recordad que podemos acceder a la clave de un objeto cuyo nombre tenemos en una variable usando el operador [key] siendo key la variable que tiene el nombre de un campo del objeto.
