import { connect } from 'react-redux';
import { BLOCK_DIMENSION } from '../../constants';
import { removeBlock } from '../../actions/blocks';
import Part from './Part';

const mapStateToProps = (state, ownProps) => {
  let { angle, background, body } = ownProps;

  return {
    angle,
    background,
    body,
    x: body.position.x,
    y: body.position.y,
    width: BLOCK_DIMENSION,
    height: BLOCK_DIMENSION,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeBlock: () => dispatch(removeBlock(ownProps.blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Part);