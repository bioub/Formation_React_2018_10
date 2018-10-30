import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

interface StateInterface {
  todos: string[];
}

class App extends Component {

  public state: StateInterface = {
    todos: ['Acheter du pain', 'Parler de Redux'],
  };

  handleNewTodo = (newTodo: string) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm onNewTodo={this.handleNewTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
