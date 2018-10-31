import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Clock from './Clock';
import UsersList from './UsersList';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/users">Users</Link>
          <Link to="/about">About</Link>
        </nav>

        <Route path="/users" component={UsersList} />
        <Route path="/about" component={About} />

        <hr />
        <Clock />
      </div>
    );
  }
}

export default App;
