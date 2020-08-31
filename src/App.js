import React, { Component } from "react";
import Navbar from "./components/ui/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async (username) => {
    this.setState({
      loading: true,
    });
    // console.log(username);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );

    this.setState({
      users: response.data.items,
      loading: false,
    });
  };

  removeSearch = (e) => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state; //Destructure

    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Git-Lookup" icon="fab fa-github" />
          <div className="container">
            <Search
              searchUsers={this.searchUsers}
              removeSearch={this.removeSearch}
            />
            <Users loading={loading} users={users} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
