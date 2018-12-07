import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { FETCH_USERS, RECEIVE_USERS } from './actions';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const initialState = {
  users: [],
  loading: false,
};

const reducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...previousState, loading: true};
    case RECEIVE_USERS:
      return {...previousState, users: action.payload, loading: false};
    default:
      return previousState
  }
};

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);


sagaMiddleware.run(mySaga);
