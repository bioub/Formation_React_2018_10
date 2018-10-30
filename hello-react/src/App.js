import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import ButtonIncrement from './ButtonIncrement';
import ClockDisableable from './ClockDisableable';
import Dropdown from './Dropdown';

class App extends Component {
  state = {
    colors: ['blue', 'yellow', 'pink'],
  };
  render() {
    const prenom = 'Eric';

    return (
      <div className="App">
        <Hello name="Romain" />
        <Hello name={prenom} />
        <Hello />
        <Clock />
        <ButtonIncrement />
        <ClockDisableable />
        <Dropdown items={this.state.colors} />
      </div>
    );
    /*return (
      React.createElement('div', {className: 'App'},
        React.createElement(Hello)
      )
    );*/
  }
}

export default App;
