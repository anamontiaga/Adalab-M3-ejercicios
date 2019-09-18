import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FilmForm from "./FilmForm";

ReactDOM.render(<FilmForm />, document.getElementById("root"));

// VPartiendo del ejercicio anterior, vamos a añadir un campo más al formulario que sea la carátula de la película. Al elegir el usuario una carátula, se muestra una previsualización de la misma, y se guardan los datos en el estado. Recuerda que para leer la información de ficheros debemos usar un FileReader y para recoger la información de una imagen su método readAsDataURL.
