import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import Search from "./components/users/Search.js";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
  };

  searchUsers = async (username) => {
    this.setState({
      loading: true,
    });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );

    this.setState({
      users: response.data.items,
      loading: false,
    });
  };

  getUser = async (username) => {
    this.setState({
      loading: true,
    });
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );

    this.setState({
      user: response.data,
      loading: false,
    });
  };

  removeSearch = (e) => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, user, loading } = this.state; //Destructure

    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Navbar title="Git-Lookup" icon="fab fa-github" />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/home"
                  render={(props) => (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        removeSearch={this.removeSearch}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  )}
                />
              </Switch>
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
