import React from "react";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard";

const PokeList = props => {
  const { pokemones, query } = props;
  return (
    <ol className="pokemones">
      {pokemones
        .filter(myPokemon => myPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(pokemon => {
          return (
            <li className="pokemon" key={`key${pokemon.id}`}>
              <PokeCard name={pokemon.name} url={pokemon.url} />
            </li>
          );
        })}
    </ol>
  );
};

PokeList.propTypes = {
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired
};
export default PokeList;
