import { connect } from 'react-redux';
import { removeBlock } from '../../actions/blocks';
import { makeGetBlockById } from '../../selectors/blocks';

import Block from './Block';

const mapStateToProps = () => {
  const getBlockById = makeGetBlockById();
  return (state, ownProps) => {
    let { id } = ownProps;
    const block = getBlockById(state, id);

    return {
      body: block.body,
      gameOver: state.game.over,
      id,
      rows: block.rows,
      stageY: state.stage.y,
    };
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeBlock: () => dispatch(removeBlock(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);