import { connect } from 'react-redux';
import { setSixPosition } from '../../actions/six';
import Six from './Six';

const mapDispatchToProps = dispatch => ({
  setPosition: position => dispatch(setSixPosition(position)),
});

export default connect(
  null,
  mapDispatchToProps
)(Six);