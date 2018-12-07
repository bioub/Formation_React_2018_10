import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos;
export const selectNewTodo = (state) => state.newTodo;

export const selectTodosCount = createSelector(
  selectTodos,
  (todos) => todos.length,
);