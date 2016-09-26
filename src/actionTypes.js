const actions = [
  'ADD_BLOCKS',
  'ADD_POINTS',
  'DELETE_BLOCK',
  'GAME_OVER',
  'RESTART',
  'SET_COUNTDOWN',
  'SET_HIGH_SCORE',
  'SET_SIX_POSITION',
  'SET_SCALE',
  'SET_STAGE_Y',
  'START',
];

const actionTypes = {};

actions.forEach(action => {
  actionTypes[action] = Symbol(action);
});

export default actionTypes;
