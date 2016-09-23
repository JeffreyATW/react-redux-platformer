import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.REMOVE_BLOCK, (state, action) => {
    return update(state, {
      score: {
        $set: state.score + 5,
      },
    });
  }],
]);
