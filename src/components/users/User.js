import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

export class User extends Component {
  // When page mounts, call function and set state
  componentDidMount() {
    this.setState({
      loading: true,
    });
    // Set username value
    const username = this.props.match.params.login;
    // Call API call methods to send user and repo data to this component 
    this.props.getUser(username);
    this.props.getRepos(username);

    this.setState({
      loading: false,
    });
  }

  checkHireable(status) {
    // If user is hireable/unhireable, render appropriate tag
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
  }

  render() {
    // Deconstruct data sent by API call method to component
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
    } = this.props.user; 
    
    // Deconstruct repos stats as prop
    const {repos} = this.props;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        {this.checkHireable(hireable)}
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
        <Repos repos={repos}/>
      </Fragment>
    );
  }
}

export default User;
