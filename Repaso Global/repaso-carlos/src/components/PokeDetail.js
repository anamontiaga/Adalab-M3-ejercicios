import React from "react";
import { Link } from "react-router-dom";

const PokeDetail = props => {
  return (
    <React.Fragment>
      <div className="poke-detail">Soy el detalle!!!!!!!</div>
      <Link to="./" className="app__back">
        Volver al listado
      </Link>
    </React.Fragment>
  );
};

export default PokeDetail;
