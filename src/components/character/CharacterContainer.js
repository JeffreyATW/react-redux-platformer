import { connect } from 'react-redux';
import { setCharacterPosition } from '../../actions/character';
import Character from './Character';

const mapStateToProps = (state, ownProps) => ({
  x: state.character.position.x,
  y: state.character.position.y,
  height: state.character.dimensions.height,
  width: state.character.dimensions.width,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  setCharacterPosition: position => dispatch(setCharacterPosition(position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);