import { createStore } from 'redux';
import { combineReducers } from 'redux';
import pokemon from './reducers/pokemon';

const reducers = combineReducers({ pokemon });

const store = createStore(reducers);

export default store;
