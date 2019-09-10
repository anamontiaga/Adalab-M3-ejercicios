import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleClick = this.handleClick.bind(props);
  }

  handleClick(e) {
    console.log("Hola");
    this.setState({ inputText: e.target.value });
  }
  render() {
    let inputText = this.state.inputText;
    return (
      <div className="App">
        <input onChange={this.handleClick} type="text"></input>
        <p>{inputText}</p>
      </div>
    );
  }
}

export default App;
