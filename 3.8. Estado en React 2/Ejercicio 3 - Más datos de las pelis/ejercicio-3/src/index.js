import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FilmForm from "./FilmForm";

ReactDOM.render(<FilmForm />, document.getElementById("root"));

// Vamos a añadir más información a nuestro formulario de películas
// clasificación por edades, donde usaremos radio buttons con las opciones: A (todos los públicos, aparece marcada por defecto), 7, 12, 16 y 18
// género, donde usaremos checkboxes y podrán marcarse un máximo de 3 de las opciones: comedia, drama, fantasía, acción, familia, terror
