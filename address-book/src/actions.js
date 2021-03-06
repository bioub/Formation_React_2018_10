export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const receiveUsers = (payload) => ({
  type: RECEIVE_USERS,
  payload,
});
