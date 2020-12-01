import { combineReducers } from 'redux';
import userReducer from './userReducer';
import spotReducer from './spotReducer';

const rootReducer = combineReducers({ userReducer, spotReducer });

export default rootReducer;
