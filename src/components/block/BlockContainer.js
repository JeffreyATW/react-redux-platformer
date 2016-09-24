import { connect } from 'react-redux';
import { BLOCK_DIMENSION, STAGE_WIDTH } from '../../constants';
import { makeGetBlockById } from '../../selectors/blocks';

import Block from './Block';

const mapStateToProps = () => {
  const getBlockById = makeGetBlockById();
  return (state, ownProps) => {
    let { id } = ownProps;
    const block = getBlockById(state, id);

    return {
      angle: block.body.angle,
      body: block.body,
      id,
      x: block.body.position.x,
      y: block.body.position.y,
      width: STAGE_WIDTH / 2,
      height: block.rows * BLOCK_DIMENSION,
    };
  };
};

export default connect(
  mapStateToProps
)(Block);