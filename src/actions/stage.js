import actionTypes from '../actionTypes';

export const setScale = scale => ({
  type: actionTypes.SET_SCALE,
  scale,
});

export const setStageY = y => ({
  type: actionTypes.SET_STAGE_Y,
  y,
});
