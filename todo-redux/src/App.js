import React, { Component } from 'react';
import './App.css';
import TodoList from './todos/components/TodoList';
import TodoForm from './todos/components/TodoForm';
import TodoCount from './todos/components/TodoCount';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
        <TodoCount />
      </div>
    );
  }
}

export default App;
