import React from "react";
import "./App.css";
import { fetchPokemones } from "./services/fetchPokemones";
import Home from "./components/Home";
import PokeDetail from "./components/PokeDetail";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemones: [],
      query: ""
    };
    this.getUserQuery = this.getUserQuery.bind(this);
  }

  componentDidMount() {
    this.getPokemones();
  }

  getPokemones() {
    fetchPokemones().then(data => {
      this.setState({ pokemones: data });
    });
  }

  getUserQuery(event) {
    const query = event.currentTarget.value;
    this.setState({ query: query });
  }
  render() {
    const { pokemones, query } = this.state;
    return (
      <div className="app">
        <h1 className="app__title">Mi lista de Pokemones</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home getUserQuery={this.getUserQuery} query={query} pokemones={pokemones} />;
            }}
          />
          <Route
            path="/poke-detail/:pokeId"
            render={routerProps => {
              return <PokeDetail routerProps={routerProps} pokemones={pokemones} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
