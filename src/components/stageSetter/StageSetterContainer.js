import { connect } from 'react-redux';
import StageSetter from './StageSetter';
import { setScale, setStageX } from '../../actions/stage';

const mapStateToProps = (state, ownProps) => ({
  characterX: state.character.position.x,
  stageWidth: state.stage.width,
  stageX: state.stage.x,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setScale: scale => dispatch(setScale(scale)),
  setStageX: x => dispatch(setStageX(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageSetter);