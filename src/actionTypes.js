const actions = [
  'ADD_BLOCKS',
  'SET_COUNTDOWN',
  'GAME_OVER',
  'REMOVE_BLOCK',
  'RESTART',
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
