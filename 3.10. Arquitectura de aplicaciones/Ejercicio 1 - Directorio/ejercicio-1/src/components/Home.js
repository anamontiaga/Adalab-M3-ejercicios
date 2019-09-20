import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.selectValue = "";
  }

  handleChange(ev) {
    this.selectValue = ev.currentTarget.value;
    this.props.actionToPerform(selectValue);
  }

  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <select onChange={this.handleChange}>
          <option>Gender</option>
          <option>female</option>
          <option>male</option>
        </select>
        <ul className="users">
          {/* // primero hacer filter */}
          {users.map(item => {
            return (
              <li className="user" key={item.id} id={item.id}>
                <Link to={`/user/${item.id}`}>
                  <div className="card">
                    <h2 className="card__name">{`${item.name.first} ${item.name.last}`}</h2>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
