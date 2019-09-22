import React, { Fragment } from "react";
import Filter from "./Filter";
import PokeList from "./PokeList";
import PropTypes from "prop-types";

const Home = props => {
  const { getUserQuery, query, pokemones } = props;
  return (
    <Fragment>
      <Filter getUserQuery={getUserQuery} query={query} />
      <PokeList pokemones={pokemones} query={query} />
    </Fragment>
  );
};

Home.propTypes = {
  getUserQuery: PropTypes.func.isRequired,
  pokemones: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string
};

export default Home;
