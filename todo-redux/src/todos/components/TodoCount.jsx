import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTodosCount } from '../selectors';

/*
function TodoCount({count = 0}) {
  return <div>{count} todos</div>
}
*/

export class TodoCount extends Component {
  render() {
    const {count = 0} = this.props;
    return <p>{count} todos</p>
  }
}

/*
TodoCount.propTypes = {

}
*/

const mapStateToProps = (state) => ({
  // exercice, sans ajouter de nouvelle clé au state
  // créer un selecteur qui récupère du state
  // le nombre d'élément du tableau todos
  count: selectTodosCount(state),
});

export default connect(mapStateToProps)(TodoCount);