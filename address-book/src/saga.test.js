import { fetchUser } from './saga'
import { call } from 'redux-saga/effects';

test('user saga', () => {
   const it = fetchUser();

   expect(it.next().value).toEqual(call(fetch, 'https://jsonplaceholder.typicode.com/users'));
})