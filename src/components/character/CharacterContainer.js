import { connect } from 'react-redux';
import { setCharacterPosition } from '../../actions/character';
import Character from './Character';

const mapStateToProps = state => ({
  x: state.character.position.x,
  y: state.character.position.y,
  scale: state.stage.scale,
});

const mapDispatchToProps = dispatch => ({
  setCharacterPosition: position => dispatch(setCharacterPosition(position))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);