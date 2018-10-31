import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { prenomReducer } from './prenoms/reducers';

export const store = createStore(
  combineReducers({
    prenom: prenomReducer,
  }),
  composeWithDevTools(),
);
/*
const reducer = (previousState) => previousState;
const reducer = (previousState = {prenom: 'Toto'}, {type, payload}) => {
  switch(type) {
    case CHANGE_PRENOM: 
      return {...previousState, prenom: payload};
    default:
      return previousState;
  }
};

export const store = createStore(reducer, {prenom: 'Toto'}, composeWithDevTools());
*/