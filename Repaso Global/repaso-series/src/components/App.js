import React from "react";
import SeriesList from "./SeriesList";
import getDataFromApi from "../api/api";

class App extends React.Component {
  constructor() {
    super();
    // init react state
    this.state = {
      searching: false,
      searchText: "",
      series: [],
      favorites: []
    };
    // bind class handle methods
    this.searchText = React.createRef();
    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.addFav = this.addFav.bind(this);
    this.removeFav = this.removeFav.bind(this);
    this.focusSearchText = this.focusSearchText.bind(this);
  }

  // event methos

  focusSearchText() {
    this.searchText.current.focus();
  }

  handleSearchText(ev) {
    // set search input text in react state
    this.setState({ searchText: ev.target.value });
  }

  handleSearchSubmit(ev) {
    ev.preventDefault();
    // set state searching to true
    this.setState({
      searching: true
    });
    // get data from api
    getDataFromApi(this.state.searchText).then(series => {
      // set series in react state
      this.setState({
        searching: false,
        series: series
      });
    });
  }

  addFav(seriesInfo) {
    console.log("Adding one series to favorites:", seriesInfo);
    // return if new series is in favorites
    for (const favorite of this.state.favorites) {
      if (favorite.id === seriesInfo.id) {
        return;
      }
    }
    // add to favorites
    this.setState(prevState => {
      const newFavorites = prevState.favorites.concat(seriesInfo);
      return {
        ...prevState,
        favorites: newFavorites
      };
    });
  }

  removeFav(seriesInfo) {
    console.log("Adding one series to favorites:", seriesInfo);
    this.setState(prevState => {
      const favIndex = this.state.favorites.findIndex(fav => fav.id === seriesInfo.id);
      let newFavorites = [...prevState.favorites];
      newFavorites.splice(favIndex, 1);
      return {
        ...prevState,
        favorites: newFavorites
      };
    });
  }

  // render methods

  renderForm() {
    const submitValue = this.state.searching === true ? "Buscando..." : "Buscar";
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <label htmlFor="search" className="form__label">
          Introduce el nombre de la serie a buscar:
        </label>
        <input type="text" id="search" name="search" className="form__input-text" ref={this.searchText} onChange={this.handleSearchText} />
        <input type="submit" value={submitValue} className="form__btn" />
      </form>
    );
  }

  renderResults() {
    return (
      <div className="results">
        <h2 className="title--medium">Resultados:</h2>
        <SeriesList series={this.state.series} notFoundMessage="No hay resultados" btnText="+" handleBtnClick={this.addFav} />
      </div>
    );
  }

  renderFavorites() {
    return (
      <div className="favorites">
        <h2 className="title--medium">Favoritos:</h2>
        <SeriesList series={this.state.favorites} notFoundMessage="No hay favoritos" btnText="-" handleBtnClick={this.removeFav} />
      </div>
    );
  }

  render() {
    console.log("Rendering App");
    return (
      <div onClick={this.focusSearchText}>
        <header className="app__header">
          <h1 className="title--big">Buscador de series</h1>
          {this.renderForm()}
        </header>
        <div className="col2">
          {this.renderResults()}
          {this.renderFavorites()}
        </div>
      </div>
    );
  }
}

export default App;
