import { connect } from 'react-redux';
import { restart } from '../../actions/game';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  gameOver: state.game.over,
});

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(restart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameOver);
