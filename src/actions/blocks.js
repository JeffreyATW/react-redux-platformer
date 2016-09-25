import actionTypes from '../actionTypes';

export const addBlocks = (blocks, rows) => ({
  type: actionTypes.ADD_BLOCKS,
  blocks,
  rows,
});

export const removeBlock = (id, points) => ({
  type: actionTypes.REMOVE_BLOCK,
  id,
  points,
});
