import { connect } from 'react-redux';
import Score from './Score';

const mapStateToProps = state => ({
  score: state.game.score,
});

export default connect(
  mapStateToProps
)(Score);
