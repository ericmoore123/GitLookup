import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <img
        className="round-img"
        src={avatar_url}
        alt=""
        style={{ width: "100px" }}
      />
      <h3>{login}</h3>
      <Link
        to={`/user/${login}`}
        // target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark btn-sm my-1"
      >
        More Info
      </Link>
    </div>
  );
};

export default UserItem;
