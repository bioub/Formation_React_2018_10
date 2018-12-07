import React, { PureComponent } from 'react'
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { todoRemove } from '../actions';

class TodoItem extends PureComponent {

  static propTypes = {
    todo: string,
  };

  handleRemove = () => {
    this.props.dispatch(todoRemove(this.props.todo));
  };

  render() {
    return (
      <div>
        {this.props.todo}
        <button onClick={this.handleRemove}>-</button>
      </div>
    )
  }
}

/*
1 - Créer un constante TODO_REMOVE
2 - Creer un actionCreator (une fonction qui créé l'action)
{
  type: TODO_REMOVE,
  payload: 'Acheter du pain'
}
(limitation ne pas mettre 2 fois la même todo)
3 - Au clic du bouton dispatcher cette action
4 - Dans le reducer todosReducer, traiter le type TODO_REMOVE
et supprimer du tableau de manière immuable
MDN: Array.prototype.filter
*/

/*
const mapDispatchToProps = (dispatch) => ({
  handleRemove: () => {
    dispatch({ type: 'TODO_REMOVE', payload: this.props.todo });
  }
})
*/

export default connect()(TodoItem);