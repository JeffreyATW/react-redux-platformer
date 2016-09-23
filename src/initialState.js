const stageHeight = 1134;
const stageWidth = 750;
const radius = (stageWidth / 5) / Math.sqrt(3);

export default {
  game: {
    score: 0,
  },
  six: {
    position: {
      x: stageWidth / 2,
      y: stageHeight / 2 - stageWidth / 10,
    },
    radius,
  },
  blocks: {
    count: 0,
    entities: {
      blocks: {},
    },
    results: [],
  },
  stage: {
    scale: 1,
    height: stageHeight,
    width: stageWidth,
  },
};
