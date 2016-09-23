import actionTypes from '../actionTypes';

export const addBlocks = blocks => ({
  type: actionTypes.ADD_BLOCKS,
  blocks,
});

export const setBlockPosition = (id, position) => ({
  type: actionTypes.SET_BLOCK_POSITION,
  id,
  position,
});

export const removeBlock = id => ({
  type: actionTypes.REMOVE_BLOCK,
  id,
});
