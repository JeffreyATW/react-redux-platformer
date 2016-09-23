import React, { Component, PropTypes } from 'react';
import { Body } from 'react-game-kit';
import { World } from 'matter-js';

class Character extends Component {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  };

  static propTypes = {
    shape: PropTypes.string,
  }

  isStatic = false;
  shape = 'rectangle';

  makeArgs() {
    const { x, y } = this.state;
    const { height, width } = this.props;
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
  }

  componentWillMount() {
    const { angle, x, y } = this.props;
    this.setState({ angle, x, y });
  }

  componentDidMount() {
    this.updateId = this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.updateId);
    World.remove(this.context.engine.world, this.body);
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
    }
  }

  getWrapperStyles() {
    const { x, y, angle } = this.state;
    const { height, width } = this.props;

    return {
      height: `${height}px`,
      position: 'absolute',
      transform: `translate(${x - width / 2}px, ${y - height / 2}px) rotate(${angle}rad)`,
      transformOrigin: 'center',
      width: `${width}px`,
    };
  }
  
  paint() {
    return <div style={{ background: 'red', height: '100%', width: '100%' }} />;
  }

  render() {
    const { angle } = this.state;

    return (
      <div style={this.getWrapperStyles()} onClick={this.boundOnClick}>
        <Body
          angle={angle}
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
