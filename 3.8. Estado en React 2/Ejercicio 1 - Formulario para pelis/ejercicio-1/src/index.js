import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FilmForm from "./FilmForm";

ReactDOM.render(<FilmForm />, document.getElementById("root"));

// Vamos a crear un formulario en un componente de React que recoja información de una película:
// nombre, en un campo de texto
// descripción, en un textarea
// idioma, en un select donde podemos seleccionar entre Español, Inglés o Portugués
// El resultado de rellenar el formulario, debe aparecer en una tarjeta de previsualización que va mostrando la información según se rellena.
