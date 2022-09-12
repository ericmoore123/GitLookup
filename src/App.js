import React, { Fragment } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import About from "./components/pages/About";
import Search from "./components/users/Search.js";
import axios from "axios";
import "./App.css";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  const searchUsers = async (username) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );
    setUsers(response.data.items);
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );
    setUser(response.data);
    setLoading(false);
  };

  const getRepos = async (username) => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=9&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID_SECRET}`
    );
    setRepos(response.data);
    setLoading(false);
  }

  const removeSearch = (e) => {
    setUsers([]);
    setLoading(false);
  };

  return(
    <Router>
        <React.Fragment>
          <div className="App">
            <Navbar title="Git-Lookup" icon="fab fa-github" />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Fragment>
                      <Search
                        searchUsers={searchUsers}
                        removeSearch={removeSearch}
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
                    getRepos={getRepos}
                    getUser={getUser}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </div>
          </div>
        </React.Fragment>
      </Router>
  )
};

export default App;
