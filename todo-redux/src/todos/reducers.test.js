import { newTodoReducer, todosReducer } from './reducers';

test('newTodoReducer returns previousState on other type', () => {
  const previousState = 'Acheter du pain';
  const nextState = newTodoReducer(previousState, { type: 'UNKNOWN' });

  expect(nextState).toEqual(previousState);
});

test('newTodoReducer returns nextState on type TODO_CHANGE', () => {
  const previousState = 'Acheter du pain';
  const newValue = 'Acheter du lait';
  const nextState = newTodoReducer(previousState, { type: 'TODO_CHANGE', payload: newValue });

  expect(nextState).toEqual(newValue);
  expect(newValue).not.toEqual(previousState); // IMMUABLE
});



test('todosReducer returns nextState on type TODO_ADD', () => {
  const previousState = ['Acheter du pain'];
  const newValue = 'Acheter du lait';
  const nextState = todosReducer(previousState, { type: 'TODO_ADD', payload: newValue });

  expect(nextState).toEqual(['Acheter du pain', 'Acheter du lait']);
  expect(nextState).not.toBe(previousState); // IMMUABLE
});