import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    // const { users } = this.state;
    return (
      <div className="user-style">
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
