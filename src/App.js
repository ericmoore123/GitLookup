import React, { Component } from 'react';
import Navbar from './components/ui/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <div className="App">
          <Navbar title="Git-Lookup" icon="fab fa-github"/>
          <UserItem />
        </div>
      </React.Fragment>
    )
  }
}

export default App;

