import { connect } from 'react-redux';
import Level from './Level';

const mapStateToProps = state => ({
  scale: state.stage.scale,
  stageX: state.stage.x,
  stageHeight: state.stage.width,
});

export default connect(
  mapStateToProps
)(Level);
