import update from 'immutability-helper';

import actionTypes from '../actionTypes';

export default new Map([
  [actionTypes.ADD_BLOCKS, (state, action) => {
    const { blocks, rows } = action;

    const newEntities = {};
    const newResults = [];

    let i = 0;

    for (; i < blocks.length; i += 1) {
      const id = state.count + i;
      newEntities[id] = { id, body: blocks[i], rows };
      newResults.push(id);
    }

    return update(state, {
      count: {
        $set: state.count + blocks.length,
      },
      rows: {
        $set: state.rows + rows,
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
  [actionTypes.DELETE_BLOCK, (state, action) => update(state, {
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
  })],
]);
