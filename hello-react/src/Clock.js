import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      format: 'HH:mm:ss',
      now: new Date(),
    };
  }
  componentDidMount() {
    this._intervalId = setInterval(() => {
      this.setState({
        now: new Date(), // ne touche à format dans le state initial
      });
    }, 1000); 
  }
  componentWillUnmount() {
    clearInterval(this._intervalId);
  }
  render() {
    return <div>{this.state.now.toLocaleTimeString()}</div>;
  }
}

export default Clock;