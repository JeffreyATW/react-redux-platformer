const stageHeight = 1134;
const stageWidth = 750;
const radius = (stageWidth / 5) / Math.sqrt(3);

export default {
  six: {
    position: {
      x: stageWidth / 2 - radius / 2,
      y: stageHeight / 2 - radius * 2,
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
