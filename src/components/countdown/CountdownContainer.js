import { connect } from 'react-redux';
import Countdown from './Countdown';

const mapStateToProps = state => ({
  countdown: state.game.countdown,
});

export default connect(
  mapStateToProps
)(Countdown);
