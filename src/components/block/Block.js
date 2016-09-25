import React, { Component, PropTypes } from 'react';
import { STAGE_HEIGHT } from '../../constants';
import PartContainer from '../part/PartContainer';
import Matter from 'matter-js';

class Block extends Component {
  static contextTypes = {
    engine: PropTypes.object.isRequired,
    loop: PropTypes.object,
  }

  constructor() {
    super();

    this.state = {
      angle: 0,
    }

    this.boundUpdate = this.update.bind(this);

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
    });
  }

  componentDidMount() {
    this.updateId = this.context.loop.subscribe(this.boundUpdate);
  }

  componentWillUnmount() {
    Matter.World.remove(this.context.engine.world, this.body);
    this.context.loop.unsubscribe(this.updateId);
  }

  update() {
    const { angle } = this.state;
    const { stageY, removeBlock } = this.props;

    if (this.body) {
      if (this.body.position.y > stageY + STAGE_HEIGHT) {
        removeBlock();
      } else {
        const fixedAngle = Number(angle.toFixed(4));
        const fixedBodyAngle = Number(this.body.angle.toFixed(4));

        if (
          fixedAngle !== fixedBodyAngle
        ) {
          this.setState({
            angle: fixedBodyAngle,
          });
        }
      }
    }
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
