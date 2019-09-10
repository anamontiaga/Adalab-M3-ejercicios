import React from "react";
import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }
//   // //version corta
//   // handleChange(event) {
//   //   let valueInput = event.target.value;

//   //   this.setState((prevState, props) => ({
//   //     value: prevState.value === "" ? `${valueInput}` : `${valueInput}`
//   //   }));
//   //   console.log(this.state.value);
//   // }
//   handleChange(event) {
//     let valueInput = event.target.value;

//     this.setState((prevState, props) => {
//       let nextValue;
//       if (prevState.value === "") {
//         nextValue = valueInput;
//       } else {
//         nextValue = `${valueInput}`; // traducir, qué diferencia hay con lo anterior?
//       }
//       return {
//         value: nextValue
//       };
//     });
//   }

//   render() {
//     return (
//       <>
//         <input name="input" onChange={this.handleChange}></input>
//         <p className="text">{this.state.value}</p>
//       </>
//     );
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default App;
