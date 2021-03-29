/* eslint-disable import/no-anonymous-default-export */
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log("register in reducer");
      return { ...state, register: action.payload };
    case LOGIN_USER:
      //console.log("in user_reducer");
      console.log("...state", state);
      return { ...state, loginSuccess: action.payload };
    case AUTH_USER:
      console.log("...state", state);
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      console.log("...state", state);
      return { ...state };
    default:
      return state;
  }
}
