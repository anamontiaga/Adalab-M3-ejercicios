import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CitySelector from "./CitySelector";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<CitySelector />, document.getElementById("root"));

serviceWorker.unregister();

// Para terminar de entender bien cómo funciona el lifting vamos a hacer un ejercicio muy sencillo. Partimos de un select con nombre de ciudades que encapsulamos en un componente CitySelector. Vamos a hacer que, al seleccionar una ciudad del select, aparezca una foto de la misma al lado. La diferencia con ejercicios anteriores es que ahora el select está en su propio componente. Para llevarlo a cabo debemos:
// guardar en un atributo de la clase la ciudad seleccionada inicial, por ejemplo, this.selectedCity = 'Madrid' y usarlo para pintar la imagen en el render
// crear un método handleClick que actualice el valor de selectedCity y llame a forceUpdate para forzar el repintado de la imagen
// y usar lifting para pasarlo al componente hijo que se ejecute al cambiar el select
