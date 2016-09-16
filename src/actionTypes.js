const actions = [
  'SET_CHARACTER_POSITION',
  'SET_SCALE',
];

const actionTypes = {};

actions.forEach(action => {
  actionTypes[action] = Symbol(action);
});

export default actionTypes;
