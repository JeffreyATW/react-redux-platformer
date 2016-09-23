import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';
import { World } from 'matter-js';

class Character extends Component {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  };

  static propTypes = {
    setPosition: PropTypes.func.isRequired,
    shape: PropTypes.string,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }

  isStatic = false;
  shape = 'rectangle';

  makeArgs() {
    const { x, y, height, width } = this.props;
    return [x, y, width, height];
  }

  constructor() {
    super();
    this.boundUpdate = this.update.bind(this);
  }

  componentDidMount() {
    this.updateId = this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.updateId);
    World.remove(this.context.engine.world, this.body);
  }

  update() {
    const { x, y, angle } = this.props;
    if (this.body) {

      if (
        this.body.position.x !== x ||
        this.body.position.y !== y ||
        this.body.angle !== angle
      ) {
        this.props.setPosition(this.body.position);
      }
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
      transformOrigin: 'center',
      width: `${width}px`,
    };
  }
  
  paint() {
    return <div style={{ background: 'red', height: '100%', width: '100%' }} />;
  }

  render() {
    const { angle } = this.props;

    return (
      <div style={this.getWrapperStyles()} onClick={this.boundOnClick}>
        <Body
          angle={(angle * Math.PI) / 180}
          args={this.makeArgs()}
          frictionStatic={1}
          ref={b => { this.body = b === null ? undefined : b.body; }}
          shape={this.shape}
          isStatic={this.props.isStatic}
        >
          {this.paint()}
        </Body>
      </div>
    );
  }
}

export default Character;
