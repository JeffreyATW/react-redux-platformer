import { connect } from 'react-redux';
import { BLOCK_DIMENSION, STAGE_WIDTH, STAGE_HEIGHT } from '../../constants';
import { getRows } from '../../selectors/blocks';

import Floor from './Floor';

const mapStateToProps = (state, ownProps) => {
  const rows = getRows(state);

  const width = BLOCK_DIMENSION * 5;
  const height = BLOCK_DIMENSION;

  const x = STAGE_WIDTH / 4 + width / 2;
  const y = STAGE_HEIGHT / 2 + (rows * height) + height / 2;

  return {
    angle: 0,
    x,
    y,
    width,
    height,
  };
};

export default connect(
  mapStateToProps
)(Floor);