import { connect } from 'react-redux';
import Floor from './Floor';

const mapStateToProps = state => ({
  scale: state.stage.scale,
});

export default connect(
  mapStateToProps
)(Floor);