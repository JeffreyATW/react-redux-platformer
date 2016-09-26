import actionTypes from '../actionTypes';
import { score } from './game.js';

export const addBlocks = (blocks, rows) => ({
  type: actionTypes.ADD_BLOCKS,
  blocks,
  rows,
});

export const deleteBlock = (id) => ({
  type: actionTypes.DELETE_BLOCK,
  id,
});

export const removeBlock = id => dispatch => {
  dispatch(score(5));
  dispatch(deleteBlock(id));
};
