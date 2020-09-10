import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    const username = this.props.match.params.login;
    console.log(username);
    console.log(this.props.getUser(username));
    // this.props.getUser(this.props.match.params.login); //pull username out of url
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
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return (
      <Fragment>
        <Link to="/home" className="btn btn-light">
          Back to search
        </Link>
      </Fragment>
    );
  }
}

export default User;
