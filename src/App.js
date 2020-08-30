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

  async componentDidMount() {
    // console.log("Mounted!");
    this.setState({
      loading: true,
    }); //cannot directly change state

    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );

    this.setState({
      users: response.data,
      loading: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Git-Lookup" icon="fab fa-github" />
          <div className="container">
            <Search />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
