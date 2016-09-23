import React, { Component, PropTypes } from 'react';
import BlockContainer from '../block/BlockContainer';
import FloorContainer from '../floor/FloorContainer';
import SixContainer from '../six/SixContainer';

class Level extends Component {
  static propTypes = {
    addBlocks: PropTypes.func.isRequired,
    scale: PropTypes.number.isRequired,
    sixY: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired,
    stageWidth: PropTypes.number.isRequired,
  }

  componentWillMount() {
    this.props.addBlocks(40);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.blockCount / 5) * (nextProps.stageWidth / 10) < nextProps.sixY) {
      this.props.addBlocks(5);
    }
  }

  getWrapperStyles() {
    const { scale, sixY, stageHeight, stageWidth } = this.props;

    return {
      transform: `translateY(${(-sixY + stageHeight / 2 - stageWidth / 10) * scale}px) scale(${scale})`,
      transformOrigin: 'top left',
    }
  }

  render() {
    const { blockIds } = this.props;

    return (
      <div style={this.getWrapperStyles()}>
        <SixContainer />
        <FloorContainer />
        {blockIds.map(id =>
          <BlockContainer id={id} key={`block_${id}`} />
        )}
      </div>
    )
  }
}

export default Level;
