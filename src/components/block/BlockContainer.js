import { connect } from 'react-redux';
import { deleteBlock } from '../../actions/blocks';
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
  deleteBlock: () => dispatch(deleteBlock(ownProps.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Block);