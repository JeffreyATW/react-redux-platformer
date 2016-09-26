import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.START, (state, action) => update(state, {
    started: {
      $set: true,
    },
  })],
  [actionTypes.ADD_POINTS, (state, action) => update(state, {
    score: {
      $set: state.score + action.amount,
    },
  })],
  [actionTypes.SET_HIGH_SCORE, (state, action) => update(state, {
    highScore: {
      $set: action.score,
    },
  })],
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
