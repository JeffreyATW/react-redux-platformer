import { connect } from 'react-redux';
import { restart, start } from '../../actions/game';

import Game from './Game';

const mapStateToProps = state => ({
  started: state.game.started,
});

const mapDispatchToProps = dispatch => ({
  restart: () => dispatch(restart()),
  start: () => dispatch(start()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);