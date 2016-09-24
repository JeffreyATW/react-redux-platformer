import { BLOCK_DIMENSION, STAGE_WIDTH } from './constants';

const radius = (BLOCK_DIMENSION * 2) / Math.sqrt(3);

export default {
  game: {
    score: 0,
  },
  six: {
    position: {
      x: STAGE_WIDTH / 2,
      y: STAGE_WIDTH / 2 + BLOCK_DIMENSION * 2,
    },
    radius,
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
  },
};
