import initialState from './initialState';
import actionTypes from './actionTypes';
import * as reducerMaps from './reducerMaps';
import { combineReducers } from 'redux';

const emptyObject = {};

const generateReducer = key => (state = initialState[key] || emptyObject, action) => {
  const reducer = reducerMaps[key].get(action.type);
  if (reducer === undefined) {
    // If a SET_STATE_TO_LOGGED_OUT reducer hasn't been set, reset this state slice to initial.
    if (action.type === actionTypes.RESTART) {
      return initialState[key] || emptyObject;
    }

    return state;
  }

  return reducer(state, action);
};

const reducers = {};

Object.keys(reducerMaps).forEach(key => {
  reducers[key] = generateReducer(key);
});

export default combineReducers(reducers);
