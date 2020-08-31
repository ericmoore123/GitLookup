import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //uses "text" as name field from HTML
  };

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.text);
    if (this.state.text === "") {
      alert("Search bar cannot be empty. Please enter a GitHub username.");
    } else {
      this.props.searchUsers(this.state.text); //Passes user name up to searchUsers function in APP.js
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form" action="">
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        <button
          className="btn btn-dark btn-block"
          onClick={this.props.removeSearch}
        >
          Clear Search
        </button>
      </div>
    );
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    removeSearch: PropTypes.func.isRequired,
  };
}

export default Search;
