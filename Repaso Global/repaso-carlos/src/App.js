import React from "react";
import "./App.css";
import { fetchPokemones } from "./services/fetchPokemones";
import { classExpression } from "@babel/types";
import { loadOptions } from "@babel/core";

class App extends React.Component {
  constructor(props) {
    super(props);
    // 1. Creamos el estado con un array vacío
    this.state = {
      pokemones: []
    };
  }
  // 2. las peticiones automáticas las vamos a hacer en el componentDidMount. También el get del LocalStorage. Se va a ejecutar cuando se pinte el componente
  componentDidMount() {
    this.getPokemones();
  }

  getPokemones() {
    // Detalle: no es necesario poner el this porque no es una función de nuestra classExpression, la estamos importando de otro lado.
    fetchPokemones().then(data => {
      this.setState({ pokemones: data });
    });
  }

  render() {
    const { pokemones } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">Mi lista de Pokemones</h1>
        <ul className="pokemones">
          {pokemones.map(pokemon => {
            return (
              <li className="pokemon">
                <div className="card">
                  <h2>{pokemon.name}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
