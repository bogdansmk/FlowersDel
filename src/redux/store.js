import {combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import catalogReducer from './catalogReducer';

let reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  catalog: catalogReducer,
});

let store = createStore(reducers);

export default store;
