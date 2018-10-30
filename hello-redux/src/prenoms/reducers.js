import { CHANGE_PRENOM } from "./constants";

export const prenomReducer = (previousState = 'Toto', {type, payload}) => {
  switch (type) {
    case CHANGE_PRENOM:
      return payload;
    default:
      return previousState;
  }
}
