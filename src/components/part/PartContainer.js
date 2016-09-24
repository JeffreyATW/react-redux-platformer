import { connect } from 'react-redux';
import { removeBlock } from '../../actions/blocks';
import Part from './Part';

const mapStateToProps = (state, ownProps) => {
  let { angle, background, body } = ownProps;

  return {
    angle,
    background,
    body,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeBlock: () => dispatch(removeBlock(ownProps.blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Part);