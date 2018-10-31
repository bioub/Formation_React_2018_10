import React, { PureComponent } from 'react'
import { string, arrayOf } from 'prop-types';
import TodoItem from './TodoItem';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { selectTodos } from '../selectors';

class TodoList extends PureComponent {
  
  static propTypes = {
    todos: arrayOf(string),
  };

  render() {
    // TODO: générer uuid dans App
    // sinon il est regénéré et on perd l'intérêt d'un clé
    const todoList = this.props.todos.map((todo) => 
      <TodoItem key={uuid()} todo={todo} />
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
});

export default connect(mapStateToProps)(TodoList);
