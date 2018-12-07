import { todoChange, todoAdd } from './actions';

// STYLE BDD (style phrasé)
// en lisant la phrase ci-dessous on peut comprendre
// ce que fait la fonction
it('should create todoChange action', () => {
  const action = todoChange('Acheter du pain');
  expect(action.type).toEqual('TODO_CHANGE');
  expect(action.payload).toEqual('Acheter du pain');
});


it('should create todoAdd action', () => {
  const action = todoAdd('Acheter du pain');
  expect(action.type).toEqual('TODO_ADD');
  expect(action.payload).toEqual('Acheter du pain');
});
