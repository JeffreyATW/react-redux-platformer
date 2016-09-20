import { connect } from 'react-redux';
import Level from './Level';

const mapStateToProps = state => ({
  scale: state.stage.scale,
  stageX: state.stage.x,
});

export default connect(
  mapStateToProps
)(Level);
