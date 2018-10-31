import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { newTodoReducer, todosReducer } from './todos/reducers';

export const store = createStore(
  combineReducers({
    newTodo: newTodoReducer,
    todos: todosReducer,
  }),
  composeWithDevTools(),
);
