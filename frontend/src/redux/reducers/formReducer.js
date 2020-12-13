/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

export default function formReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.CREATE_PROJECT:

      newState = { ...state, info: action.newProject };
      break;
    case actionTypes.DELETE_PROJECT:
      const newList = state.list.filter((item) => item._id !== action.listItem.projects._id);
      newState = { ...state, list: newList };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
