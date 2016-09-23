import actionTypes from '../actionTypes';

export const addBlocks = blocks => ({
  type: actionTypes.ADD_BLOCKS,
  blocks,
});

export const setSixPosition = position => ({
  type: actionTypes.SET_SIX_POSITION,
  position,
});
