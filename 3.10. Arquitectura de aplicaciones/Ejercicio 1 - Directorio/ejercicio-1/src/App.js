import React from "react";
import { fetchUsers } from "./services/users";
// 3 - INSTALAMOS EL SWITCH Y EL ROUTE
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
    // this.filterUsers = this.filterUsers.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetchUsers().then(data => {
      // MODIFICAMOS EL ARRAY: para añadir una propiedad al array de objeto. hago un map sobre los datos que me devuelva un spread de item y me sobreescriba una propiedad y/o me añada una nueva. En este caso sustituimos index por id, ya que el index es el número dentro del array y comienza por 0.
      const newUsers = data.results.map((item, index) => {
        return { ...item, id: index };
      });
      this.setState({
        users: newUsers
        // users: data.results
      });
    });
  }

  // filterUsers(selectValue) {
  //   const { users } = this.state;
  //   const selectValueUsers = users.filter(user => user.gender === selectValue);
  //   console.log(selectValueUsers);
  //   console.log(selectValue);
  //   this.setState({ users: selectValueUsers });
  // }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        {/* 4 - METO MIS COMPONENTES HOME Y USER EN SWITCH Y ROUTE Y ESTABLEZCO LAS RUTAS */}
        <Switch>
          <Route exact path="/" render={() => <Home actionToPerform={this.filterUsers} users={users} />} />
          {/* Renderizamos para poder pasar props al componente */}
          <Route path="/user/:userId" render={routerProps => <User match={routerProps.match} users={users} />} />
          {/* 5 - LE PASO UN PATRÓN */}
          {/* component={User}  */}
        </Switch>
      </div>
    );
  }
}

export default App;
