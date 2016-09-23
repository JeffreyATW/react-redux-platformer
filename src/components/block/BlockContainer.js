import { connect } from 'react-redux';
import { setBlockPosition, removeBlock } from '../../actions/blocks';
import { getBlockCount, makeGetBlockPosition } from '../../selectors/blocks';

import Block from './Block';

const mapStateToProps = () => {
  const getBlockPosition = makeGetBlockPosition();

  return (state, ownProps) => {
    let { id, width, height } = ownProps;
    const stageHeight = state.stage.height;
    const stageWidth = state.stage.width;
    let { x, y } = getBlockPosition(state, id) || {};

    if (width === undefined) {
      width = stageWidth / 10;
    }

    if (height === undefined) {
      height = stageWidth / 10;
    }

    if (x === undefined) {
      x = stageWidth / 4 + (id % 5 * width);
    }

    if (y === undefined) {
      y = stageHeight / 2 + (Math.floor(id / 5) * height);
    }

    const isStatic = getBlockCount(state) - id <= 5;

    return {
      angle: 0,
      isStatic,
      x,
      y,
      width,
      height,
    };
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPosition: position => dispatch(setBlockPosition(ownProps.id, position)),
  removeBlock: () => dispatch(removeBlock(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);