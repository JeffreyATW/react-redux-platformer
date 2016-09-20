import { connect } from 'react-redux';
import Floor from './Floor';

const mapStateToProps = (state, ownProps) => {
  let { x, y, width, height, angle } = ownProps;
  const stageHeight = state.stage.height;
  const stageWidth = state.stage.width;

  if (width === undefined) {
    width = stageWidth * 2;
  }

  if (height === undefined) {
    height = 50;
  }

  if (x === undefined) {
    x = width / 2;
  }

  if (y === undefined) {
    y = stageHeight - height / 2;
  }

  if (angle === undefined) {
    angle = 0;
  }

  return {
    x,
    y,
    width,
    height,
    angle,
  };
}

export default connect(
  mapStateToProps
)(Floor);