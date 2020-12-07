import { combineReducers } from 'redux';
import userReducer from './userReducer';
import spotReducer from './spotReducer';
import listReducer from './listReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  userReducer, spotReducer, listReducer, authReducer,
});

export default rootReducer;
