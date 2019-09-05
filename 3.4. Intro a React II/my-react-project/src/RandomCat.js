// Para comenzar, vamos a crear un nuevo módulo JavaScript para definir el componente. Crearemos un archivo RandomCat.js en la misma carpeta src donde definiremos el componente. Tendremos que importar React de su módulo, así que añadiremos al principio:

import React from "react";

// Los componentes de React tienen un método render() que devuelve un elemento de JSX para que React lo pinte. Así que sobrescribiremos ese método (es decir, que declararemos un método con ese nombre):

class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://lorempixel.com">
        <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
      </a>
    );
  }
}

// Para que nuestro componente se pueda usar desde fuera del módulo, lo exportaremos. Para eso, añadiremos al final:

export default RandomCat;
