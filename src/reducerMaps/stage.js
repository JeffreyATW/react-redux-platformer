import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.SET_SCALE, (state, action) => update(state, {
    scale: {
      $set: action.scale,
    },
  })],
  [actionTypes.SET_STAGE_X, (state, action) => update(state, {
    x: {
      $set: action.x,
    },
  })],
]);
