import React from "react";
import UserItem from "./UserItem";
import Spinner from '../ui/Spinner.js'
import PropTypes from 'prop-types';


const Users = ({users, loading}) => {
    // const { users } = this.state;
    if(loading){
      return <Spinner />;
    }else{
      return (
        <div className="user-style">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ); 
    }
  }

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Users;
