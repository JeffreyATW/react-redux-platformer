import { createSelector } from 'reselect';

export const getBlockIds = state => state.blocks.results;
export const getBlockEntities = state => state.blocks.entities.blocks;
export const getRows = state => state.blocks.rows;

const getProps = (state, props) => props;

export const makeGetBlockById = () => createSelector(
  getBlockEntities, getProps,
  (blockEntities, id) => blockEntities[id]
);

export const getBlocks = createSelector(
  getBlockIds, getBlockEntities,
  (blockIds, blockEntities) => blockIds.map(id => blockEntities[id])
);
