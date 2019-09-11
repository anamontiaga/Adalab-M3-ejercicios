import React from "react";
import "./App.css";
// import PropTypes from "prop-types";

const data = {
  version: "v0.0.0",
  palettes: [
    {
      name: "Tardis Blue",
      from: "Doctor Who",
      colors: ["003A6E", "9B9A99", "000000", "FFFFFF", "6F4500"]
    },
    {
      name: "Millenium Falcon",
      from: "Star Wars",
      colors: ["B6B6BE", "D8D7D4", "413A31", "746C66", "A32D2C"]
    },
    {
      name: "Battlestar Galactica",
      from: "Battlestar Galactica",
      colors: ["080F19", "1B2E3F", "364269", "3D6973", "E5635F"]
    },
    {
      name: "Serenity",
      from: "Firefly",
      colors: ["3C5375", "7285A6", "96AABF", "F1DB7E", "0C0C0C"]
    },
    {
      name: "Nostromo",
      from: "Alien",
      colors: ["08070C", "F4F3F5", "121828", "464F75", "9ABEF2"]
    }
  ]
};

class App extends React.Component {
  handleColorClick(event) {
    const color = event.currentTarget.innerHTML;
    console.log(`#${color}`);
  }
  render() {
    return (
      <div className="app">
        <ul className="palettes">
          {data.palettes.map((item, index) => (
            <li className="palette" key={`p${index}`} id={`p${index}`}>
              <div className="card">
                <h2 className="card__name">{item.name}</h2>
                <ul className="card__colors">
                  {item.colors.map((color, colorIndex) => (
                    <li className="card__color" key={`c${colorIndex}`} id={`p${index}c${colorIndex}`} style={{ backgroundColor: `#${color}` }} onClick={this.handleColorClick}>
                      {color}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {/* Pillamos el array de palettes que está dentro del objeto "data". Recorre el array y lo que devuelva es lo que va estar en el nuevo array. Poe ejemplo, si quiero que me pinte los nombres: <ul className="palettes">
          {data.palettes.map(item => (
            <li>{item.name}</li>
          ))}
        </ul> */}
        {/* Cuando manejamos un listado de componentes hermanos (como en los lis del ejemplo anterior), React nos da un warning en la consola indicando que debemos dar un atributo key a cada elemento del listado. El "key" no se ve, si queremos verlo hay que ponerle un id.*/}
        {/* Para poder pintar las paletas le metemos la etiqueta style con un objeto dentro */}
      </div>
    );
  }
}

export default App;
