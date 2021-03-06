import React from "react";
import "./CitySelector.css";

class CitySelector extends React.Component {

  
  handleWrite(event) {
    alert(`Tu destino es viajar a ${event.target.value}`);
  }
  render() {
    return (
      <select onChange={this.handleWrite}>
        <option>Buenos Aires</option>
        <option>Sydney</option>
        <option>Praga</option>
        <option>Boston</option>
        <option>Tokio</option>
      </select>
    );
  }
}

export default CitySelector;
