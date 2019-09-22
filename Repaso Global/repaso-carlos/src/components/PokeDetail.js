import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokeDetail = props => {
  const { routerProps, pokemones } = props;
  const pokeId = parseInt(routerProps.match.params.pokeId);

  if (pokeId > pokemones.length) {
    return (
      <React.Fragment>
        <p>Mira, mira, que es viernes y me estás...</p>
        <Link to="/" className="app__back">
          Volver al listado, listo :)
        </Link>
      </React.Fragment>
    );
  }

  const pokemon = pokemones.filter(item => item.id === pokeId);

  if (pokemon[0]) {
    const { name, url, types } = pokemon[0];

    return (
      <React.Fragment>
        <div className="poke-detail">
          <h2 className="poke-detail__name">{name}</h2>
          <div className="poke-detail__img">
            <img src={url} alt={name}></img>
          </div>
          <ul className="poke-detail__types">
            {types.map((type, index) => {
              return (
                <li className="poke-detail__type" key={index}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className="app__back">
          Volver al listado
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Chacho, ese no lo tienes</p>
        <Link to="/" className="app__back">
          Volver al listado
        </Link>
      </React.Fragment>
    );
  }
};

PokeDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PokeDetail;
