import { connect } from 'react-redux';
import { getBlockCount } from '../../selectors/blocks';

import Floor from './Floor';

const mapStateToProps = (state, ownProps) => {
  const stageHeight = state.stage.height;
  const stageWidth = state.stage.width;
  const blockCount = getBlockCount(state);

  const width = stageWidth / 2;
  const height = stageWidth / 10;

  const x = stageWidth / 4 + width / 2;
  const y = stageHeight / 2 + (Math.floor(blockCount / 5) * height) + height / 2;

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