import { connect } from 'react-redux';
import { setSixPosition } from '../../actions/six';
import Six from './Six';

const mapStateToProps = state => {
  const x = state.six.position.x;
  const y = state.six.position.y;
  const radius = state.six.radius;
  const angle = 30 * (Math.PI / 180);

  const height = radius * 2;
  const width = Math.sqrt(3) * radius;

  return {
    x,
    y,
    radius,
    angle,
    density: 0.0009,
    height,
    width,
  };
}

const mapDispatchToProps = dispatch => ({
  setPosition: position => dispatch(setSixPosition(position)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Six);