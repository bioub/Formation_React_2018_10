import React, { Component, FormEvent, ChangeEvent } from 'react'
import { func } from 'prop-types';

export default class TodoForm extends Component {
  
  static propTypes = {
    onNewTodo: func,
  }

  public props!: {onNewTodo: (newTodo: string) => void}

  public state = {
    newTodo: '',
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.props.onNewTodo(this.state.newTodo);
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.newTodo} onChange={this.handleChange} />
        <button>+</button>
      </form>
    )
  }
}
