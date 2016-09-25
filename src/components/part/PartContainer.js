import { connect } from 'react-redux';
import { removeBlock } from '../../actions/blocks';
import Part from './Part';

const mapStateToProps = (state, ownProps) => {
  let { angle, background, body } = ownProps;

  return {
    angle,
    background,
    body,
    gameOver: state.game.over,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeBlock: () => dispatch(removeBlock(ownProps.blockId, true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Part);