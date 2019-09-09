import React from "react";
import "./index.css";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    // le estoy creando la propiedad
    this.city = {
      Praga: "https://www.viajarpraga.com/img/guia-viaje-praga.jpg",
      Boston: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Bostonstraight.jpg/220px-Bostonstraight.jpg",
      "Buenos Aires": "https://www.bain.com/contentassets/f68751a8708848558d763e7fe458c10a/local-office-images-buenos-aires--1950x650.jpg",
      Sydney: "https://img.theculturetrip.com/x/smart/wp-content/uploads/2018/03/sydney-cityscape--rudy-balasko-shutterstock.jpg",
      Tokio: "https://cdn.civitatis.com/japon/tokio/guia/electronica-fotografia-grid-m.jpg"
    };
  }
  render() {
    let cityName = this.props.city;
    return (
      <div>
        <img className="cityImage" src={`${this.city[cityName]}`} alt={`${cityName}`} />
      </div>
    );
  }
}
export default CityImage;
