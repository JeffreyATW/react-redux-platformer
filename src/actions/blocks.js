import actionTypes from '../actionTypes';

export const addBlocks = blocks => ({
  type: actionTypes.ADD_BLOCKS,
  blocks,
});

export const removeBlock = id => ({
  type: actionTypes.REMOVE_BLOCK,
  id,
});
