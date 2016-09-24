import { connect } from 'react-redux';
import { getRows } from '../../selectors/blocks';

import Floor from './Floor';

const mapStateToProps = (state, ownProps) => ({
  rows: getRows(state),
});

export default connect(
  mapStateToProps
)(Floor);