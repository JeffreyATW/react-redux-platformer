const actions = [
  'SET_CHARACTER_POSITION',
  'SET_SCALE',
  'SET_STAGE_X',
];

const actionTypes = {};

actions.forEach(action => {
  actionTypes[action] = Symbol(action);
});

export default actionTypes;
