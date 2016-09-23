import { connect } from 'react-redux';
import { addBlocks } from '../../actions/blocks';
import { getBlockIds, getBlockCount } from '../../selectors/blocks';
import Level from './Level';

const mapStateToProps = state => ({
  blockCount: getBlockCount(state),
  blockIds: getBlockIds(state),
  scale: state.stage.scale,
  sixY: state.six.position.y,
  sixX: state.six.position.x,
  stageHeight: state.stage.height,
  stageWidth: state.stage.width,
});

const mapDispatchToProps = dispatch => ({
  addBlocks: blocks => dispatch(addBlocks(blocks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
