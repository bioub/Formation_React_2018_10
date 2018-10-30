import { CHANGE_PRENOM } from "./constants";

export const changePrenom = (payload) => ({
  type: CHANGE_PRENOM,
  payload,
});