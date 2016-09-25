import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.START, (state, action) => {
    return update(state, {
      started: {
        $set: true,
      },
    });
  }],
  [actionTypes.REMOVE_BLOCK, (state, action) => {
    return update(state, {
      score: {
        $set: state.score + 5,
      },
    });
  }],
  [actionTypes.GAME_OVER, (state, action) => {
    return update(state, {
      countdown: {
        $set: 0,
      },
      over: {
        $set: true,
      },
    });
  }],
  [actionTypes.SET_COUNTDOWN, (state, action) => {
    return update(state, {
      countdown: {
        $set: action.count,
      },
    });
  }],
]);
