import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';

class Character extends Component {
  static contextTypes = {
    loop: PropTypes.object,
  };

  static propTypes = {
    angle: PropTypes.number,
    setPosition: PropTypes.func,
    shape: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
  }

  shape = 'rectangle';
  color = 'red';

  makeArgs() {
    const { x, y, width, height } = this.state;
    return [x, y, width, height];
  }

  constructor() {
    super();
    this.boundUpdate = this.update.bind(this);
    this.state = {
      angle: 0,
      x: 0,
      y: 0,
    };

    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 64);
    const b = Math.ceil(Math.random() * 128);
    this.background = `rgb(${r}, ${g}, ${b})`;
  }

  componentDidMount() {
    this.updateId = this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.updateId);
  }

  update() {
    const { x, y, angle } = this.state;
    if (this.body) {
      if (
        this.body.position.x !== x ||
        this.body.position.y !== y ||
        this.body.angle !== angle
      ) {
        this.setState({
          x: this.body.position.x,
          y: this.body.position.y,
          angle: this.body.angle,
        });
      }
      if (this.props.setPosition) {
        this.props.setPosition(this.body.position);
      }
    }
  }

  getWrapperStyles() {
    const { x, y, angle, height, width } = this.state;

    return {
      height: `${height}px`,
      position: 'absolute',
      transform: `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle.toFixed(10)}rad)`,
      transformOrigin: 'center',
      width: `${width}px`,
    };
  }
  
  paint() {
    return <div style={{ background: this.background, height: '100%', width: '100%' }} />;
  }

  render() {
    const { angle, density } = this.state;

    return (
      <div style={this.getWrapperStyles()} onClick={this.boundOnClick}>
        <Body
          angle={angle}
          args={this.makeArgs()}
          density={density || 1}
          frictionStatic={1}
          ref={b => { this.body = b === null ? undefined : b.body; }}
          shape={this.shape}
          slop={0}
          isStatic={this.isStatic}
        >
          {this.paint()}
        </Body>
      </div>
    );
  }
}

export default Character;
