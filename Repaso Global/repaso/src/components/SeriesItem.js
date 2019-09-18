import React from "react";
import PropTypes from "prop-types";

class SeriesItem extends React.Component {
  constructor() {
    super();
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  handleBtnClick() {
    const seriesData = {
      name: this.props.name,
      id: this.props.id,
      image: this.props.image
    };
    this.props.handleBtnClick(seriesData);
  }

  render() {
    console.log("Rendering SeriesItem", this.props);
    return (
      <li className="card">
        <img className="card__img" src={this.props.image} alt={this.props.name} />
        <h3 className="card__title">{this.props.name}</h3>
        <button className="card__btn" onClick={this.handleBtnClick}>
          {this.props.btnText}
        </button>
      </li>
    );
  }
}

SeriesItem.defaultProps = {
  image: "https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB"
};

SeriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default SeriesItem;
