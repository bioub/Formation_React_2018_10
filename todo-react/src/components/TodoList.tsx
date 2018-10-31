import React, { PureComponent } from 'react'
import { string, arrayOf } from 'prop-types';
import TodoItem from './TodoItem';
import uuid from 'uuid';

export default class TodoList extends PureComponent {
  
  static propTypes = {
    todos: arrayOf(string),
  };

  public props!: {todos: string[]};

  /*
  shouldComponentUpdate(nextProps: {todos: string[]}) {
    if (this.props.todos === nextProps.todos) {
      return false;
    }
    return true;
  }
  */
  
  render() {
    // TODO: générer uuid dans App
    // sinon il est regénéré et on perd l'intérêt d'un clé
    const todoList = this.props.todos.map((todo) => 
      <TodoItem key={uuid()} todo={todo} />
    );

    console.log('render TodoList');

    return (
      <div>
        {todoList}
      </div>
    );
  }
}
