import { TODO_CHANGE, TODO_ADD } from './constants';

export const newTodoReducer = (previousState = '', action) => {
  switch (action.type) {
    case TODO_CHANGE:
      return action.payload;
    default:
      return previousState
  }
};

export const todosReducer = (previousState = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...previousState, action.payload];
    default:
      return previousState
  }
};