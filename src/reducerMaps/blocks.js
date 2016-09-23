import update from 'react-addons-update';
import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.ADD_BLOCKS, (state, action) => {
    const newEntities = {};
    const newResults = [];

    let id = state.count;

    for (; id < state.count + action.blocks; id += 1) {
      newEntities[id] = { id };
      newResults.push(id);
    }

    return update(state, {
      count: {
        $set: id,
      },
      entities: {
        blocks: {
          $merge: newEntities,
        },
      },
      results: {
        $push: newResults,
      },
    });
  }],
  [actionTypes.REMOVE_BLOCK, (state, action) => {
    return update(state, {
      entities: {
        blocks: {
          [action.id]: {
            $set: undefined,
          },
        },
      },
      results: {
        $splice: [[state.results.indexOf(action.id), 1]],
      },
    });
  }],
]);
