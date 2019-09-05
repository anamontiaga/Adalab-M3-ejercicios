import React from "react";
import foto from "../images/foto.jpg";
import fotolaura from "../images/fotolaura.jpg";
import fotobea from "../images/fotobea.jpg";
import "../stylesheets/App.scss";
import MediaCard from "./MediaCard";

function App() {
  return (
    <div>
      <MediaCard
        src={foto}
        name="Ana Montiaga"
        date="Jueves 05 de septiembre de 2019"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        footertext="Leer más..."
        icon="fas fa-heartbeat"
      />
      <MediaCard
        src={fotolaura}
        name="Laura Pareja"
        date="Viernes 06 de septiembre de 2019"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        footertext="Continúa..."
        icon="fas fa-hand-holding-heart"
      />
      <MediaCard
        src={fotobea}
        name="Beatriz del Valle"
        date="Sábado 07 de septiembre de 2019"
        content="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        footertext="¿Quieres saber más?"
        icon="fab fa-gratipay"
      />
    </div>
  );
}

export default App;
