import React from "react";
import "./Destiny.css";

class Destiny extends React.Component {
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
      <div className="imageSize"><CityImage src={foto} name=""  /></div>
    );
  }
}

export default Destiny;

// había que hacerlo sin handler? cómo lo hago sin handler? Qué es lo correcto?
