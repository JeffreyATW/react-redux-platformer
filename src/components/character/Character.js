import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';
import Matter from 'matter-js';

class Character extends Component {
  static contextTypes = {
    loop: PropTypes.object,
  };

  static propTypes = {
    setCharacterPosition: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  jumping = true;
  canDoubleJump = false;
  didDoubleJump = true;

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

  move = x => {
    const body = this.body;
    Matter.Body.setVelocity(body, { x, y: body.velocity.y });
  };

  jump = x => {
    const body = this.body;
    Matter.Body.setVelocity(body, { x: body.velocity.x, y: -10 });
    if (this.canDoubleJump) {
      this.didDoubleJump = true;
    }
    this.canDoubleJump = false;
    this.jumping = true;
  }

  checkKeys() {
    const { keys } = this.props;

    const right = keys.isDown(keys.RIGHT);
    const left = keys.isDown(keys.LEFT);

    if (right && !left) {
      this.move(2);
    }
    if (left && !right) {
      this.move(-2);
    }
    
    if (keys.isDown(keys.UP)) {
      if (!this.jumping || this.canDoubleJump) {
        this.jump();
      }
    } else if (this.jumping && !this.didDoubleJump) {
      this.canDoubleJump = true;
    }
  }

  update() {
    this.props.setCharacterPosition(this.body.position);

    const velY = parseFloat(this.body.velocity.y.toFixed(5));
    if (velY === 0 && this.jumping) {
      this.jumping = false;
      this.didDoubleJump = false;
      this.canDoubleJump = false;
    }

    this.checkKeys();
  }

  getWrapperStyles() {
    const { x, y, scale/*, stageX*/ } = this.props;
    let dimension = 0;
    let angle = 0;
    if (this.body) {
      dimension = Math.sqrt(this.body.area);
      angle = this.body.angle * (180/Math.PI);
    }
    // const targetX = x + stageX;

    return {
      height: `${dimension * scale}px`,
      position: 'absolute',
      transform: `translate(${x * scale}px, ${y * scale}px) rotate(${angle}deg)`,
      transformOrigin: 'center',
      width: `${dimension * scale}px`,
    };
  }

  render() {
    return (
      <div style={this.getWrapperStyles()}>
        <Body args={[0,0,50,50]} inertia={Infinity} ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'red', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Character;
