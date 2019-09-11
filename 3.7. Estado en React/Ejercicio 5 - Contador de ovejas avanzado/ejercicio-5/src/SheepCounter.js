import React from "react";
import "./SheepCounter.css";
import sheep from "../public/sheep.png";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.upDateCounter = this.upDateCounter.bind(this);
  }

  upDateCounter() {
    this.setState((prevState, props) => {
      let nextValue;
      nextValue = this.state.counter + 1;
      return {
        counter: nextValue
      };
    });
  }

  render() {
    return (
      <div className="Counter">
        <p className="Number">{sheep}</p>
        <button className="Btn" onClick={this.upDateCounter}>
          COUNTER
        </button>
      </div>
    );
  }
}

export default SheepCounter;
