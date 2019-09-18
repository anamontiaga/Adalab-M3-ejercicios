import React from "react";

class Home extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <ul className="users">
        {users.map(item => {
          return (
            <li className="user" key={item.id} id={item.id}>
              <div className="card">
                <h2 className="card__name">{`${item.name.first} ${item.name.last}`}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Home;
