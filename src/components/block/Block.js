import React, { PropTypes } from 'react';
import { BLOCK_DIMENSION, STAGE_WIDTH } from '../../constants';
import Character from '../character/Character';
import PartContainer from '../part/PartContainer';
import Matter from 'matter-js';

class Block extends Character {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  }

  constructor() {
    super();

    this.state = {
      angle: 0,
      x: 0,
      y: 0,
      width: STAGE_WIDTH / 2,
      height: BLOCK_DIMENSION,
    }

    const r = Math.ceil(Math.random() * 255);
    const g = Math.ceil(Math.random() * 64);
    const b = Math.ceil(Math.random() * 128);
    this.background = `rgb(${r}, ${g}, ${b})`;
  }

  componentWillMount() {
    this.body = this.props.body;
    Matter.World.addBody(this.context.engine.world, this.body);

    this.setState({
      angle: this.body.angle,
      height: this.props.rows * BLOCK_DIMENSION,
      x: this.body.position.x,
      y: this.body.position.y
    });
  }

  componentWillUnmount() {
    Matter.World.remove(this.context.engine.world, this.body);
  }

  render() {
    const { id } = this.props;
    const { angle } = this.state;

    return (
      <div>
        {this.body.parts.map((part, i) =>
          i !== 0 && <PartContainer angle={angle} blockId={id} key={`block_${id}_part_${i}`} body={part} background={this.background} />
        )}
      </div>
    );
  }
}

export default Block;
