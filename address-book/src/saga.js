import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { receiveUsers, FETCH_USERS } from './actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* fetchUser() {
   try {
      const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
      const users = yield res.json();
      yield put(receiveUsers(users));
   } catch (e) {
      // yield put(catchError());
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export function* mySaga() {
  yield takeEvery(FETCH_USERS, fetchUser);
}


export default mySaga;