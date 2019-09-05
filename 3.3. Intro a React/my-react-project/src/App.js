import React from "react";
import logo from "./logo.svg"; // en React importamos así las imágenes
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          ¡Hola, mundo!
        </a>
      </header>
    </div>
  );
}

export default App;
