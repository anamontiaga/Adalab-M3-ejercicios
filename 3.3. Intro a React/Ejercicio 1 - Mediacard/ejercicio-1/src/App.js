import React from "react";
import foto from "./foto.jpg";
import "./App.css";
// Vamos a crear un nuevo proyecto de React llamado mediacard. Vamos a modificar el método render del componente App para que tenga un diseño similar al de la imagen. Podéis usar una imagen a vuestra elección en lugar de la que aparece en el diseño, y Font-Awesome para el icono del corazón. De esta forma, aprenderemos a cómo trabajar con cosas que ya conocemos (HTML y CSS) en una aplicación de React.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-foto" alt="foto" />
        <div className="App-header-title">
          <h1 className="App-header-maintitle">Alex Guerrero</h1>
          <h3 className="App-header-subtitle">Lunes 26 de junio de 2017</h3>
        </div>
      </header>
      <main className="App-main">
        <p className="App-main-paragraph">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </main>
      <footer className="App-footer">
        <p className="App-footer-paragraph">Leer más...</p>
        <i class="fas fa-heartbeat"></i>
      </footer>
    </div>
  );
}

export default App;
