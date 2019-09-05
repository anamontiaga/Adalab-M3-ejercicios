// Vamos a partir del ejercicio 1 (el anterior). Vamos a usar las props para personalizar el contenido de una tarjeta social MediaCard. En concreto, vamos a personalizar
// el nombre del usuario
// la fecha
// la imagen
// el texto descriptivo
// el número de likes
// si el corazón está o no relleno
import React from "react";
import foto from "./foto.jpg";
import "./App.css";
import MediaCardUser from "./MediaCardUser";

const Header = (
  <header className="App-header">
    <div className="App-header-title">
      <MediaCardUser src={foto} name="Ana Montiaga" date="Jueves 05 de septiembre de 2019" />
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
