import { combineReducers } from 'redux';
import userReducer from './userReducer';
import spotReducer from './spotReducer';
import listReducer from './listReducer';

const rootReducer = combineReducers({ userReducer, spotReducer, listReducer });

export default rootReducer;
