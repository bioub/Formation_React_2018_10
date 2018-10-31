import React, { PureComponent } from 'react'
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { selectNewTodo } from '../selectors';
import { todoChange, todoAdd } from '../actions';

class TodoForm extends PureComponent {
  
  static propTypes = {
    newTodo: string,
  }

  /**
   * @param event {Event} DOM Event
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(todoAdd(this.props.newTodo));
  };

  handleChange = (event) => {
    this.props.dispatch(todoChange(event.target.value));
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.props.newTodo} onChange={this.handleChange} />
        <button>+</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  newTodo: selectNewTodo(state),
});

export default connect(mapStateToProps)(TodoForm);
