/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:

      return { ...state, user: action.user };
    case actionTypes.LOAD_USER_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
