import { connect } from 'react-redux';
import { addBlocks } from '../../actions/blocks';
import { beginCountdown } from '../../actions/game';
import { setStageY } from '../../actions/stage';
import { getBlockIds, getRows } from '../../selectors/blocks';
import Level from './Level';

const mapStateToProps = state => ({
  countdown: state.game.countdown,
  rows: getRows(state),
  blockIds: getBlockIds(state),
  scale: state.stage.scale,
  stageY: state.stage.y,
  sixY: state.six.position.y,
  sixX: state.six.position.x,
});

const mapDispatchToProps = dispatch => ({
  addBlocks: (blocks, rows) => dispatch(addBlocks(blocks, rows)),
  beginCountdown: () => dispatch(beginCountdown()),
  setStageY: y => dispatch(setStageY(y)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
