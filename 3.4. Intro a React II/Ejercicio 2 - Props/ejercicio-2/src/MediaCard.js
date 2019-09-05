// Vamos a partir del ejercicio 1 (el anterior). Vamos a usar las props para personalizar el contenido de una tarjeta social MediaCard. En concreto, vamos a personalizar
// el nombre del usuario
// la fecha
// la imagen
// el texto descriptivo
// el número de likes
// si el corazón está o no relleno
import React from "react";
import ReactDOM from "react-dom";
import foto from "./foto.jpg";
import "./App.css";

const Header = (
  <header className="App-header">
    <img src={foto} className="App-foto" alt="foto" />
    <div className="App-header-title">
      {componentToRender}
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

class Personalize extends React.Component {
  render() {
    return <h1 className="App-header-maintitle">{this.props.name}</h1>;
  }
}
const componentToRender = <Personalize name="Ana Montiaga" />;

ReactDOM.render(componentToRender, document.getElementById("root"));

export default MediaCard;
