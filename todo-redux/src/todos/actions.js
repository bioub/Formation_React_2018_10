import { TODO_CHANGE, TODO_ADD, TODO_REMOVE } from './constants';

// Pour factoriser : 
// installer redux-actions, puis :
// export const todoChange = createAction(TODO_CHANGE);
export const todoChange = (payload) => ({
  type: TODO_CHANGE,
  payload,
});

export const todoAdd = (payload) => ({
  type: TODO_ADD,
  payload,
});

export const todoRemove = (payload) => ({
  type: TODO_REMOVE,
  payload,
});