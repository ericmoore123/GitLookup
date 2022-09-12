import React, { Component, Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import axios from "axios";

const User = (props) => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});

  const username = props.match.params.login;
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    hireable,
  } = user;

  useEffect(() => {
    console.log('Called!');
    setLoading(true);
     const getRepos = async (username) => {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=9&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
      );
      setRepos(response.data);
     };
     const getUser = async (username) => {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
      );
      setUser(response.data);
    };
     getRepos(username);
     getUser(username);
     setLoading(false);
  }, [username]);

  const checkHireable = (status) => {
    if (status) {
      return (
        <i
          style={{
            border: "1px solid green",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
          className="fa fa-check text-success"
        >
          {" "}
          Hireable
        </i>
      );
    } else {
      return (
        <i
          style={{
            border: "1px solid red",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
          className="fa fa-times-circle text-danger"
        >
          {" "}
          Hireable
        </i>
      );
    }
  };

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      {checkHireable(hireable)}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            alt="User avatar"
            style={{ width: "150px" }}
          />
          <h2>{name}</h2>
          <h4>Location: {location}</h4>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>{bio}</h3>
            </Fragment>
          )}
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark my-1"
          >
            GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
            <li>
              {public_repos && (
                <Fragment>
                  <strong>Public Repositories: </strong>
                  {public_repos}
                </Fragment>
              )}
            </li>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ color: "green" }}>
                {followers && (
                  <Fragment>
                    <strong> Followers: </strong>
                    {followers}
                  </Fragment>
                )}
              </div>
              <div style={{ paddingLeft: "1rem", color: "red" }}>
                {following && (
                  <Fragment>
                    <strong> Following: </strong>
                    {following}
                  </Fragment>
                )}
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* render repos component to end of User component */}
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
