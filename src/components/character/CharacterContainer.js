import { connect } from 'react-redux';
import { setCharacterPosition } from '../../actions/character';
import { setStageX } from '../../actions/stage';
import Character from './Character';

const mapStateToProps = (state, ownProps) => ({
  x: state.character.position.x,
  y: state.character.position.y,
  scale: state.stage.scale,
  stageX: state.stage.x,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  setCharacterPosition: position => dispatch(setCharacterPosition(position)),
  setStageX: x => dispatch(setStageX(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);