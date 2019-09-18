import React from "react";
import { fetchUsers } from "./services/users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
    // this.updateCheckbox = this.updateCheckbox.bind(this);
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

  render() {
    return (
      <div className="App">
        <ul className="users">
          {this.state.users.map(item => {
            return (
              <li className="user" key={item.id} id={item.id}>
                <div className="card">
                  <h2 className="card__name">{`${item.name.first} ${item.name.last}`}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
