const highScore = window.localStorage.getItem('sixHighScore') || 0;

export default {
  game: {
    highScore,
    score: 0,
    over: false,
    started: false,
  },
  six: {
    position: {
      x: 0,
      y: 0,
    },
  },
  blocks: {
    count: 0,
    rows: 0,
    entities: {
      blocks: {},
    },
    results: [],
  },
  stage: {
    scale: 1,
    y: 0,
  },
};
