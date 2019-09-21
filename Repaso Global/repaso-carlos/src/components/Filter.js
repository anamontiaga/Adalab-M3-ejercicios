import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  const { getUserQuery, query } = props;
  return (
    <div className="app__filters">
      <input type="text" onChange={getUserQuery} value={query} />
    </div>
  );
};

Filter.propTypes = {
  getUserQuery: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default Filter;
