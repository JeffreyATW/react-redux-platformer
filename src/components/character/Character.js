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

  checkKeys(shouldMoveStageLeft, shouldMoveStageRight) {
    const { keys } = this.props;

    if (keys.isDown(keys.DOWN)) {
      Matter.Body.set(this.body, 'friction', 0);
    } else {
      Matter.Body.set(this.body, 'friction', 0.001);
    }

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
    const { x, y } = this.props;
    if (this.body) {

      if (this.body.position.x !== x || this.body.position.y !== y) {
        this.props.setCharacterPosition(this.body.position);
      }

      const velY = parseFloat(this.body.velocity.y.toFixed(5));
      if (velY === 0 && this.jumping) {
        this.jumping = false;
        this.didDoubleJump = false;
        this.canDoubleJump = false;
      }

      this.checkKeys();
    }
  }

  getWrapperStyles() {
    const { x, y, height, width } = this.props;
    let angle = 0;
    if (this.body) {
      angle = this.body.angle * (180/Math.PI);
    }

    return {
      height: `${height}px`,
      position: 'absolute',
      transform: `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle}deg)`,
      transformOrigin: 'top left',
      width: `${width}px`,
    };
  }

  render() {
    const { x, y, height, width } = this.props;

    return (
      <div style={this.getWrapperStyles()}>
        <Body args={[x, y, width, height]} friction={.001} inertia={Infinity} ref={b => { this.body = b === null ? undefined : b.body; }}>
          <div style={{ background: 'red', height: '100%', width: '100%' }} />
        </Body>
      </div>
    );
  }
}

export default Character;
