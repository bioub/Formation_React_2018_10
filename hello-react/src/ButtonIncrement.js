import React, { Component } from 'react'

export default class ButtonIncrement extends Component {
  /*
  constructor() {
    super();
    this.state = {
      increment: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      increment: this.state.increment + 1,
    });
  }
  */
  state = {
    increment: 0,
  };

  /* ESnext */
  handleClick = () => {
    this.setState({
      increment: this.state.increment + 1,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.increment}
      </button>
    )
  }
}
