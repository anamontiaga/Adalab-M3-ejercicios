import React from "react";
import "./RandomMurray.css";

const getRandomInteger = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
const MIN_SIZE = 200;
const MAX_SIZE = 400;

class RandomMurray extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.forceUpdate();
  }

  render() {
    const randomMurray = getRandomInteger(MIN_SIZE, MAX_SIZE);

    return <img src={`http://www.fillmurray.com/200/${randomMurray}`} alt="Random murray" onClick={this.handleClick} />;
  }
}

export default RandomMurray;
