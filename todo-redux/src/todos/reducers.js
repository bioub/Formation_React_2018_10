import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from './constants';

export const newTodoReducer = (previousState = '', action) => {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return previousState
  }
};

/*
{
  newTodo: 'Acheter du...' // <------- newTodoReducer
  todos: ['A', 'B', 'C'] // <------- todosReducer
}
*/
export const todosReducer = (previousState = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...previousState, action.payload];
    case TODO_REMOVE:
      return previousState.filter((todo) => todo !== action.payload);
    default:
      return previousState
  }
};