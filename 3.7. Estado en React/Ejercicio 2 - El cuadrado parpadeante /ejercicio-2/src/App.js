import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((prevState, props) => {
      let nextValue;
      if (prevState.value === true) {
        nextValue = false;
      } else {
        nextValue = true;
      }
      return {
        value: nextValue
      };
    });
  }
  render() {
    if (this.state.value === true) {
      return (
        <div className="App">
          <div className="Square" onClick={this.handleChange}></div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="Square red" onClick={this.handleChange}></div>
        </div>
      );
    }
  }
}

export default App;
