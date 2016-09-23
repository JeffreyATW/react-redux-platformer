import { connect } from 'react-redux';
import { setSixPosition } from '../../actions/six';
import Six from './Six';

const mapStateToProps = (state, ownProps) => {
  let { angle } = ownProps;
  const x = state.six.position.x;
  const y = state.six.position.y;
  const radius = state.six.radius;

  if (angle === undefined) {
    angle = 30 * (Math.PI / 180);
  }

  return {
    x,
    y,
    radius,
    angle,
  };
}

const mapDispatchToProps = dispatch => ({
  setPosition: position => dispatch(setSixPosition(position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Six);