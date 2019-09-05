// Para comenzar, vamos a crear un nuevo módulo JavaScript para definir el componente. Crearemos un archivo RandomCat.js en la misma carpeta src donde definiremos el componente. Tendremos que importar React de su módulo, así que añadiremos al principio:

import React from "react";
// Los componentes de React tienen un método render() que devuelve un elemento de JSX para que React lo pinte. Así que sobrescribiremos ese método (es decir, que declararemos un método con ese nombre):

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <a href="http://lorempixel.com">
        <img src={`http://lorempixel.com/${this.props.width}/${this.props.height}/cats/${randomCat}`} alt="Random cat" />
      </a>
    );
  }
}

// Para que nuestro componente se pueda usar desde fuera del módulo, lo exportaremos. Para eso, añadiremos al final:

export default RandomCat;
