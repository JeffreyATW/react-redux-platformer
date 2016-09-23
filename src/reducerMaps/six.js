import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.SET_SIX_POSITION, (state, action) => update(state, {
    position: {
      $set: action.position,
    },
  })],
]);
