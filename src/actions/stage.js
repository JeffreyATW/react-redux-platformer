import actionTypes from '../actionTypes';

export const setScale = scale => ({
  type: actionTypes.SET_SCALE,
  scale,
});

export const setStageX = x => ({
  type: actionTypes.SET_STAGE_X,
  x,
});
