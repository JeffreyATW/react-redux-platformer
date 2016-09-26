import { connect } from 'react-redux';
import HighScore from './HighScore';

const mapStateToProps = state => ({
  highScore: state.game.highScore,
});

export default connect(
  mapStateToProps
)(HighScore);
