import { connect } from 'react-redux';
import { makeGetBlockById } from '../../selectors/blocks';

import Block from './Block';

const mapStateToProps = () => {
  const getBlockById = makeGetBlockById();
  return (state, ownProps) => {
    let { id } = ownProps;
    const block = getBlockById(state, id);

    return {
      body: block.body,
      id,
      rows: block.rows,
    };
  };
};

export default connect(
  mapStateToProps
)(Block);