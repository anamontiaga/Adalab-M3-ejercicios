import React from "react";
import "./App.css";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    const { name, colors, colorAction } = this.props;
    // Esto se hace para no tener que escribir this.props todo el rato
    return (
      <div className="card">
        <h2 className="card__name">{name}</h2>
        <ul className="card__colors">
          {colors.map((color, colorIndex) => (
            <li className="card__color" key={`c${colorIndex}`} style={{ backgroundColor: `#${color}` }} onClick={colorAction}>
              {color}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
Card.propTypes = {
  name: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  colorAction: PropTypes.func
};
export default Card;
