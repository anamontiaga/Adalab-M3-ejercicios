import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(user) {
    this.setState({
      email: user,
      password: user
    });
  }

  // DUDA 1 - Qué hace esta función? Qué estado es ese?

  render() {
    const { email, password } = this.state;
    return (
      <div className="page">
        <Header />
        <Main email={email} password={password} handleFormInput={this.handleFormInput} />
        <p>Email: {email}</p>
        <p>Contraseña: {password}</p>
      </div>
    );
  }
}

export default App;
