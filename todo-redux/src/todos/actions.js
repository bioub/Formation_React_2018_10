import { TODO_CHANGE, TODO_ADD } from './constants';

export const todoChange = (payload) => ({
  type: TODO_CHANGE,
  payload,
});

export const todoAdd = (payload) => ({
  type: TODO_ADD,
  payload,
});