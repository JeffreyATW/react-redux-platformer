import React, { Component, PropTypes } from 'react';
import BlockContainer from '../block/BlockContainer';
import SixContainer from '../six/SixContainer';

class Level extends Component {
  static propTypes = {
    addBlocks: PropTypes.func.isRequired,
    scale: PropTypes.number.isRequired,
    sixY: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired,
  }

  componentWillMount() {
    this.props.addBlocks(40);
  }

  getWrapperStyles() {
    const { scale, sixY, stageHeight } = this.props;

    return {
      transform: `translateY(${(-sixY + stageHeight / 2) * scale}px) scale(${scale})`,
      transformOrigin: 'top left',
    }
  }

  render() {
    const { blockIds } = this.props;

    return (
      <div style={this.getWrapperStyles()}>
        <SixContainer />
        {blockIds.map(id =>
          <BlockContainer id={id} key={`block_${id}`} />
        )}
      </div>
    )
  }
}

export default Level;
