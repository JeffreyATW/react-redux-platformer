import { connect } from 'react-redux';
import { Stage } from 'react-game-kit';

const mapStateToProps = state => ({
  height: state.stage.height,
  width: state.stage.width,
});

export default connect(
  mapStateToProps
)(Stage);