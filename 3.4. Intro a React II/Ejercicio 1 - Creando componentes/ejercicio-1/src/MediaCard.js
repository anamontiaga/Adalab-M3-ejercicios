// Vamos a partir del ejercicio 1 (o del 2) de la sesión anterior. En lugar de usar el componente genérico App, vamos a crear un nuevo componente MediaCard encargado de pintar una tarjeta social para un usuario. Vamos a cargar ese nuevo componente desde el index.js para pintarlo con ReactDOM.
import React from "react";
import foto from "./foto.jpg";
import "./App.css";

const Header = (
  <header className="App-header">
    <img src={foto} className="App-foto" alt="foto" />
    <div className="App-header-title">
      <h1 className="App-header-maintitle">Alex Guerrero</h1>
      <h3 className="App-header-subtitle">Lunes 26 de junio de 2017</h3>
    </div>
  </header>
);

const Main = (
  <main className="App-main">
    <p className="App-main-paragraph">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
      default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </p>
  </main>
);

const Footer = (
  <footer className="App-footer">
    <p className="App-footer-paragraph">Leer más...</p>
    <i class="fas fa-heartbeat"></i>
  </footer>
);

function MediaCard() {
  return (
    <div className="App">
      {Header}
      {Main}
      {Footer}
    </div>
  );
}

export default MediaCard;
