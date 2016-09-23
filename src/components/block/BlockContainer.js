import { connect } from 'react-redux';
import { removeBlock } from '../../actions/blocks';
import { getBlockCount } from '../../selectors/blocks';

import Block from './Block';

const mapStateToProps = (state, ownProps) => {
  let { id, width, height } = ownProps;
  const stageHeight = state.stage.height;
  const stageWidth = state.stage.width;

  if (width === undefined) {
    width = stageWidth / 10;
  }

  if (height === undefined) {
    height = stageWidth / 10;
  }

  const x = stageWidth / 4 + (id % 5 * width) + width / 2;
  const y = stageHeight / 2 + (Math.floor(id / 5) * height) + height / 2;

  return {
    angle: 0,
    x,
    y,
    width,
    height,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeBlock: () => dispatch(removeBlock(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);