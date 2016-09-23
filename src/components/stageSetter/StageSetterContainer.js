import { connect } from 'react-redux';
import StageSetter from './StageSetter';
import { setScale } from '../../actions/stage';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  setScale: scale => dispatch(setScale(scale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageSetter);