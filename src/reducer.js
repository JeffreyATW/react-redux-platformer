import initialState from './initialState';
import * as reducerMaps from './reducerMaps';
import { combineReducers } from 'redux';

const emptyObject = {};

const generateReducer = key => (state = initialState[key] || emptyObject, action) => {
  const reducer = reducerMaps[key].get(action.type);
  if (reducer === undefined) {
    return state;
  }

  return reducer(state, action);
};

const reducers = {};

Object.keys(reducerMaps).forEach(key => {
  reducers[key] = generateReducer(key);
});

export default combineReducers(reducers);
