import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';

class Character extends Component {
  static contextTypes = {
    loop: PropTypes.object,
  };

  static propTypes = {
    setCharacterPosition: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  constructor() {
    super();
    this.boundUpdate = this.update.bind(this);
  }

  componentDidMount() {
    this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.boundUpdate);
  }

  update() {
    this.props.setCharacterPosition(this.body.position);
  }

  getWrapperStyles() {
    const { x, y, scale/*, stageX*/ } = this.props;
    const dimension = this.body ? Math.sqrt(this.body.area) : 0;
    // const targetX = x + stageX;

    return {
      height: `${dimension * scale}px`,
      position: 'absolute',
      transform: `translate(${x * scale}px, ${y * scale}px)`,
      transformOrigin: 'left top',
      width: `${dimension * scale}px`,
    };
  }

  render() {
    return (
      <div style={this.getWrapperStyles()}>
        <Body args={[0,0,50,50]} ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'red', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Character;
