import { connect } from 'react-redux';
import { addBlocks } from '../../actions/blocks';
import { getBlockIds, getRows } from '../../selectors/blocks';
import Level from './Level';

const mapStateToProps = state => ({
  rows: getRows(state),
  blockIds: getBlockIds(state),
  scale: state.stage.scale,
  sixY: state.six.position.y,
  sixX: state.six.position.x,
});

const mapDispatchToProps = dispatch => ({
  addBlocks: (blocks, rows) => dispatch(addBlocks(blocks, rows)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
