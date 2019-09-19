import React from "react";

class User extends React.Component {
  render() {
    const { match, users } = this.props;
    const { userId } = match.params;
    const item = users[userId];
    return (
      <div className="detail">
        <h2 className="detail__name">{`${item.name.first} ${item.name.last}`}</h2>
      </div>
    );
  }
}
export default User;
