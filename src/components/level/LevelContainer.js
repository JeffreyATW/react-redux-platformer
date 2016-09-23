import { connect } from 'react-redux';
import { addBlocks } from '../../actions/blocks';
import { getBlockIds } from '../../selectors/blocks';
import Level from './Level';

const mapStateToProps = state => ({
  blockIds: getBlockIds(state),
  scale: state.stage.scale,
  sixY: state.six.position.y,
  stageHeight: state.stage.height,
});

const mapDispatchToProps = dispatch => ({
  addBlocks: blocks => dispatch(addBlocks(blocks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
