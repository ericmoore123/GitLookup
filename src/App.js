import React, { Component } from 'react';
import Navbar from './components/ui/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Git-Lookup" icon="fab fa-github"/>
            <div className="container">
              <Users />
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;

