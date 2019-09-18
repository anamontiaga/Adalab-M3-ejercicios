import React from "react";
import SeriesItem from "./SeriesItem";

const renderSeriesList = props => {
  return props.series.map(serie => {
    return <SeriesItem key={serie.id} id={serie.id} name={serie.name} image={serie.image} btnText={props.btnText} handleBtnClick={props.handleBtnClick} />;
  });
};

const SeriesList = props => {
  console.log("Rendering SeriesList", props);
  // check if there are series
  if (props.series.length > 0) {
    return <ul className="cards">{renderSeriesList(props)}</ul>;
  } else {
    return (
      <div className="text">
        <span>{props.notFoundMessage}</span>
      </div>
    );
  }
};

export default SeriesList;
