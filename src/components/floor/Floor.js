import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';

class Floor extends Component {
  static propTypes = {
    scale: PropTypes.number.isRequired,
  }

  height = 50;
  width = 512;

  getWrapperStyles() {
    const { scale } = this.props;
    let x = 0;
    let y = 0;
    if (this.body) {
      x = this.body.position.x;
      y = this.body.position.y;
    }
    // const targetX = x + stageX;

    return {
      height: `${this.height * scale}px`,
      position: 'absolute',
      transform: `translate(${x * scale}px, ${y * scale}px)`,
      transformOrigin: 'left top',
      width: `${this.width * scale}px`,
    };
  }

  render() {
    return (
      <div style={this.getWrapperStyles()}>
        <Body args={[0, 462, this.width, this.height]} isStatic ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'blue', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Floor;
