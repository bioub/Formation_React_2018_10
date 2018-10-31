import React, { Component } from 'react';
import './App.css';
import HelloContainer from './prenoms/Hello';
import DropdownContainer from './prenoms/Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloContainer />
        <DropdownContainer items={['Toto', 'Titi', 'Tata']}/>
      </div>
    );
  }
}

export default App;
