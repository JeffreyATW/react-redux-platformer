import { connect } from 'react-redux';
import GameOver from './GameOver';

const mapStateToProps = state => ({
  gameOver: state.game.over,
});

export default connect(
  mapStateToProps,
)(GameOver);
