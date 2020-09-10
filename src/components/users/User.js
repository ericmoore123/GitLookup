import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.setState({
      loading: true,
    });
    const username = this.props.match.params.login;
    // console.log(username);
    // console.log(this.props.getUser(username));
    this.props.getUser(username);
    // this.props.getUser(this.props.match.params.login); //pull username out of url
    this.setState({
      loading: false,
    });
  }

  checkHireable(status) {
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
                <li style={{ color: "green" }}>
                  {followers && (
                    <Fragment>
                      <strong> Followers: </strong>
                      {followers}
                    </Fragment>
                  )}
                </li>
                <li style={{ paddingLeft: "1rem", color: "red" }}>
                  {following && (
                    <Fragment>
                      <strong> Following: </strong>
                      {following}
                    </Fragment>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default User;
