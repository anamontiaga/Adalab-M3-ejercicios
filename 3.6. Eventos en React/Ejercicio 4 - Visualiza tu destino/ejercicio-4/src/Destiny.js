import React from "react";
import "./Destiny.css";
import CityImage from "./CityImage.js";

let bestCity;

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handleWrite = this.handleWrite.bind(this);
  }
  handleWrite(event) {
    bestCity = event.target.value;
    this.forceUpdate(); // repintar (re-renderizar)
  }
  render() {
    return (
      <div>
        <select onChange={this.handleWrite}>
          <option>Elige una ciudad</option>
          <option>Buenos Aires</option>
          <option>Sydney</option>
          <option>Praga</option>
          <option>Boston</option>
          <option>Tokio</option>
        </select>

        <CityImage city={bestCity === undefined ? "" : bestCity} />
      </div>
    );
  }
}

export default Destiny;
