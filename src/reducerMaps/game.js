import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.START, (state, action) => update(state, {
    started: {
      $set: true,
    },
  })],
  [actionTypes.REMOVE_BLOCK, (state, action) => {
    if (action.points) {
      return update(state, {
        score: {
          $set: state.score + 5,
        },
      });
    }
    return state;
  }],
  [actionTypes.GAME_OVER, (state, action) => update(state, {
    countdown: {
      $set: 0,
    },
    over: {
      $set: true,
    },
  })],
  [actionTypes.SET_COUNTDOWN, (state, action) => update(state, {
    countdown: {
      $set: action.count,
    },
  })],
]);
