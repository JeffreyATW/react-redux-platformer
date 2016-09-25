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
    const { angle, x, y } = this.state;
    if (this.body) {
      const fixedX = Number(x.toFixed(0));
      const fixedY = Number(y.toFixed(0));
      const fixedAngle = Number(angle.toFixed(4));
      const fixedBodyX = Number(this.body.position.x.toFixed(0));
      const fixedBodyY = Number(this.body.position.y.toFixed(0));

      // don't use incorrect angle for Part
      let fixedBodyAngle;
      if (this.props.angle === undefined) {
        fixedBodyAngle = Number(this.body.angle.toFixed(4));
      } else {
        fixedBodyAngle = this.props.angle;
      }
      if (
        fixedX !== fixedBodyX ||
        fixedY !== fixedBodyY ||
        fixedAngle !== fixedBodyAngle
      ) {
        this.setState({
          x: this.body.position.x,
          y: this.body.position.y,
          angle: this.body.angle,
        });
        if (this.props.setPosition) {
          this.props.setPosition({
            x: this.body.position.x,
            y: this.body.position.y,
          });
        }
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
    let background = this.background;
    if (this.props.background) {
      background = this.props.background;
    }

    return <div style={{ background, height: '100%', transition: 'background .5s', width: '100%' }} />;
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
