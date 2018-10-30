import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Clock from './Clock';
import ButtonIncrement from './ButtonIncrement';
import ClockDisableable from './ClockDisableable';
import Dropdown from './Dropdown';

class App extends Component {
  state = {
    prenoms: ['Jean', 'Pierre', 'Paul'],
    selected: 'Pierre',
  };

  handleSelected = (selected) => {
    this.setState({
      selected,
    });
  }

  render() {
    return (
      <div className="App">
        <Hello name="Romain" />
        <Hello name={this.state.selected} />
        <Hello />
        <Clock />
        <ButtonIncrement />
        <ClockDisableable />
        <Dropdown 
          selected={this.state.selected}
          items={this.state.prenoms}
          onSelected={this.handleSelected} />
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
